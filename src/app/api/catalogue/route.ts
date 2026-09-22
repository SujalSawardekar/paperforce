export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail, SALES_EMAIL } from "@/lib/resend";
import { rateLimit } from "@/lib/rate-limit";
import * as fs from "fs";
import * as path from "path";

const CATALOGUE_FALLBACK_FILE = path.join(process.cwd(), "prisma", "catalogue_requests.json");

async function saveRequestFallback(data: Record<string, unknown>) {
  try {
    const dir = path.dirname(CATALOGUE_FALLBACK_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    let requests: Record<string, unknown>[] = [];
    if (fs.existsSync(CATALOGUE_FALLBACK_FILE)) {
      const fileContent = fs.readFileSync(CATALOGUE_FALLBACK_FILE, "utf-8");
      requests = JSON.parse(fileContent || "[]");
    }
    
    requests.push({
      id: "req-" + Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: new Date().toISOString(),
    });
    
    fs.writeFileSync(CATALOGUE_FALLBACK_FILE, JSON.stringify(requests, null, 2), "utf-8");
  } catch (error) {
    console.error("[CATALOGUE FALLBACK ERROR] Failed to save catalogue request locally:", error);
  }
}

export async function POST(req: NextRequest) {
  // Rate limiting: 10 requests per IP per hour
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limited = rateLimit(ip, 10, 60 * 60 * 1000);
  if (!limited.allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: { name?: string; email?: string; phone?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const { name, email, phone } = body;
  if (!name || !email || !phone) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  const trimmedName = name.trim();
  const trimmedPhone = phone.trim();
  const trimmedEmail = email.trim();

  // Name Validation
  if (trimmedName.length < 2 || trimmedName.length > 60) {
    return NextResponse.json(
      { success: false, message: "Full name must be between 2 and 60 characters." },
      { status: 400 }
    );
  }
  const nameRegex = /^[a-zA-Z\s.'-]+$/;
  if (!nameRegex.test(trimmedName)) {
    return NextResponse.json(
      { success: false, message: "Name must contain letters and spaces only." },
      { status: 400 }
    );
  }

  // Phone Validation
  const digitsOnly = trimmedPhone.replace(/\D/g, "");
  if (digitsOnly.length < 7 || digitsOnly.length > 15) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid phone number (between 7 and 15 digits)." },
      { status: 400 }
    );
  }
  const phoneStructureRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  if (!phoneStructureRegex.test(trimmedPhone)) {
    return NextResponse.json(
      { success: false, message: "Invalid phone number format." },
      { status: 400 }
    );
  }

  // Email Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmedEmail)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address format." },
      { status: 400 }
    );
  }

  let savedToDb = false;
  if (process.env.DATABASE_URL) {
    try {
      const dbPromise = prisma.contactSubmission.create({
        data: {
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone || null,
          subject: "Catalogue Request",
          message: `Requested the product catalogue. Phone: ${trimmedPhone}. Email: ${trimmedEmail}.`,
        },
      });

      // Timeout after 1.5s if local database is unreachable
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Database connection timeout")), 1500)
      );

      await Promise.race([dbPromise, timeoutPromise]);
      savedToDb = true;
    } catch {
      // Graceful fallback to local JSON storage without slowing down user response
    }
  }

  if (!savedToDb) {
    await saveRequestFallback({ name: trimmedName, email: trimmedEmail, phone: trimmedPhone });
  }

  const baseUrl = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "https://paperforce.in";
  const downloadUrl = `${baseUrl}/api/download-catalogue`;

  // Send both emails concurrently for maximum speed (sub-second delivery)
  try {
    await Promise.allSettled([
      // 1. Send Product Catalogue to the Client's Email
      sendEmail({
        to: trimmedEmail,
        subject: "Your Paperforce Product Catalogue",
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Paperforce Product Catalogue</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f6f7fb; padding: 32px 16px; margin: 0; color: #334155;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(30,50,97,0.04);">
    <div style="background: #1e3261; padding: 32px 24px; text-align: center; color: #ffffff;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.04em;">Paperforce India LLP</h1>
    </div>
    
    <div style="padding: 36px 28px; line-height: 1.65; font-size: 15px; color: #334155;">
      <p style="margin-top: 0;">Dear <strong>${trimmedName}</strong>,</p>
      <p>Thank you for requesting our official <strong>B2B Product Catalogue</strong>.</p>
      
      <div style="text-align: center; margin: 36px 0;">
        <a href="${downloadUrl}" style="display: inline-block; background: #1e3261; color: #ffffff; text-decoration: none; padding: 15px 36px; border-radius: 8px; font-size: 15px; font-weight: 700; box-shadow: 0 4px 10px rgba(30,50,97,0.2);">Download Product Catalogue (PDF)</a>
      </div>
      
      <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 28px 0;" />
      <p style="margin: 0; font-size: 13px; color: #64748b; text-align: center;">
        Best Regards,<br/>
        <strong>Paperforce India LLP</strong>
      </p>
    </div>
  </div>
</body>
</html>`,
      }),

      // 2. Notify the Sales / Admin Team
      sendEmail({
        to: SALES_EMAIL,
        subject: `[New Lead] Catalogue Download Requested — ${trimmedName}`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Catalogue Download Request</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f6f7fb; padding: 24px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
    <div style="background: #1e3261; padding: 20px 24px; color: #ffffff;">
      <h2 style="margin: 0; font-size: 18px;">📋 New Catalogue Request</h2>
    </div>
    <div style="padding: 24px; font-size: 14px; line-height: 1.6;">
      <p style="margin-top: 0; color: #475569;">A prospective buyer has requested the product catalogue:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 20px;">
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b; width: 120px;">Full Name</td><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">${trimmedName}</td></tr>
        <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; color: #64748b;">Email Address</td><td style="padding: 8px 0;"><a href="mailto:${trimmedEmail}" style="color: #2563eb; font-weight: 500;">${trimmedEmail}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #64748b;">Phone Number</td><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">${trimmedPhone}</td></tr>
      </table>
      <div style="background: #f8fafc; border-radius: 8px; padding: 12px 16px; font-size: 12px; color: #64748b;">
        The B2B Product Catalogue download link has been automatically dispatched to <strong>${trimmedEmail}</strong>.
      </div>
    </div>
  </div>
</body>
</html>`,
      }),
    ]);
  } catch (emailErr) {
    console.error("[CATALOGUE EMAIL ERROR]", emailErr);
  }

  return NextResponse.json({
    success: true,
    message: "Success! The catalogue has been sent to your email address.",
  });
}


