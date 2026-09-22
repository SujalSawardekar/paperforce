export const dynamic = 'force-dynamic';
// src/app/api/contact/route.ts
// POST /api/contact — simple contact message submission API with honeypot and db backup fallback

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ContactSchema } from "@/lib/validations";
import { sendEmail, SALES_EMAIL } from "@/lib/resend";
import { rateLimit } from "@/lib/rate-limit";
import * as fs from "fs";
import * as path from "path";

const CONTACT_FALLBACK_FILE = path.join(process.cwd(), "prisma", "contact_submissions.json");

async function saveContactFallback(data: Record<string, unknown>) {
  try {
    const dir = path.dirname(CONTACT_FALLBACK_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    let submissions: Record<string, unknown>[] = [];
    if (fs.existsSync(CONTACT_FALLBACK_FILE)) {
      const fileContent = fs.readFileSync(CONTACT_FALLBACK_FILE, "utf-8");
      submissions = JSON.parse(fileContent || "[]");
    }
    
    submissions.push({
      id: "contact-" + Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: new Date().toISOString(),
    });
    
    fs.writeFileSync(CONTACT_FALLBACK_FILE, JSON.stringify(submissions, null, 2), "utf-8");
  } catch (error) {
    console.error("[CONTACT FALLBACK ERROR] Failed to save contact locally:", error);
  }
}

export async function POST(req: NextRequest) {
  // Rate limiting: 10 contact messages per IP per hour
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limited = rateLimit(ip, 10, 60 * 60 * 1000);
  if (!limited.allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot check
  if (parsed.data._hp) {
    return NextResponse.json({ success: true });
  }

  const { name, email, phone, subject, message } = parsed.data;

  let savedToDb = false;
  if (process.env.DATABASE_URL) {
    try {
      const dbPromise = prisma.contactSubmission.create({
        data: {
          name,
          email,
          phone: phone || null,
          subject: subject || null,
          message,
        },
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Database connection timeout")), 1500)
      );

      await Promise.race([dbPromise, timeoutPromise]);
      savedToDb = true;
    } catch (dbErr) {
      console.error("[CONTACT DB ERROR] Failed to write to Prisma DB:", dbErr);
    }
  }

  if (!savedToDb) {
    await saveContactFallback({ name, email, phone, subject, message });
  }

  // Send notification email to admin and confirmation acknowledgment to user
  try {
    await Promise.allSettled([
      // 1. Alert Sales / Admin Team
      sendEmail({
        to: SALES_EMAIL,
        subject: `[Contact Form Message] Subject: ${subject || "General Inquiry"}`,
        html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Contact Message</title></head>
<body style="font-family:sans-serif;background:#f8fafc;padding:24px;margin:0;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.02);">
    <div style="background:#0b1c3f;padding:24px;color:#ffffff;">
      <h2 style="margin:0;font-size:18px;">✉️ New Website Contact Message</h2>
    </div>
    <div style="padding:24px;font-size:14px;line-height:1.6;color:#334155;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr><td style="padding:6px 0;color:#64748b;width:120px;">Name</td><td style="padding:6px 0;font-weight:bold;">${name}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#0b1c3f;">${email}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;">Phone</td><td style="padding:6px 0;">${phone || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;">Subject</td><td style="padding:6px 0;font-weight:bold;">${subject || "General Inquiry"}</td></tr>
      </table>
      <div style="background:#f1f5f9;border-radius:8px;padding:16px;">
        <h4 style="margin:0 0 8px;color:#0b1c3f;font-size:12px;text-transform:uppercase;">Message</h4>
        <p style="margin:0;white-space:pre-wrap;">${message}</p>
      </div>
    </div>
    <div style="background:#f8fafc;padding:12px 24px;border-top:1px solid #e2e8f0;text-align:center;font-size:11px;color:#94a3b8;">
      Paperforce India LLP
    </div>
  </div>
</body>
</html>`,
      }),

      // 2. Send Acknowledgment to the User
      sendEmail({
        to: email,
        subject: "Thank you for contacting Paperforce India LLP",
        html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Thank you for contacting Paperforce India</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background:#f6f7fb; padding:32px 16px; margin:0; color:#334155;">
  <div style="max-width:600px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden; box-shadow:0 4px 12px rgba(30,50,97,0.04);">
    <div style="background:#1e3261; padding:32px 24px; text-align:center; color:#ffffff;">
      <h1 style="margin:0; font-size:24px; font-weight:700;">Paperforce India LLP</h1>
    </div>
    <div style="padding:36px 28px; line-height:1.65; font-size:15px; color:#334155;">
      <p style="margin-top:0;">Dear <strong>${name}</strong>,</p>
      <p>Thank you for reaching out to us. We have received your message regarding <strong>${subject || "General Inquiry"}</strong>.</p>
      <p>Our sales team will review your inquiry and get back to you shortly.</p>
      <hr style="border:0; border-top:1px solid #f1f5f9; margin:28px 0;" />
      <p style="margin:0; font-size:13px; color:#64748b; text-align:center;">
        Best Regards,<br/>
        <strong>Paperforce India LLP</strong>
      </p>
    </div>
  </div>
</body>
</html>`,
      }),
    ]);
  } catch (emailErr) {
    console.error("[CONTACT EMAIL ERROR]", emailErr);
  }

  return NextResponse.json({
    success: true,
    message: "Thank you for your message. We will get back to you shortly.",
  });
}
