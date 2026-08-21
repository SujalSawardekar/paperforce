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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address format." },
      { status: 400 }
    );
  }

  let savedToDb = false;
  if (process.env.DATABASE_URL) {
    try {
      await prisma.contactSubmission.create({
        data: {
          name,
          email,
          phone: phone || null,
          subject: "Catalogue Request",
          message: `Requested the product catalogue. Phone: ${phone}. Email: ${email}.`,
        },
      });
      savedToDb = true;
    } catch (dbErr) {
      console.error("[CATALOGUE DB ERROR] Failed to write to Prisma DB:", dbErr);
    }
  }

  if (!savedToDb) {
    await saveRequestFallback({ name, email, phone });
  }

  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const catalogueUrl = `${baseUrl}/PaperForce%20Catalogue.pdf`;

  // Send Catalogue Email to User
  await sendEmail({
    to: email,
    subject: "Your Paperforce Product Catalogue",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Paperforce Product Catalogue</title>
</head>
<body style="font-family: sans-serif; background: #f6f7fb; padding: 32px 16px; margin: 0; color: #334155;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(30,50,97,0.03);">
    <div style="background: #1e3261; padding: 32px; text-align: center; color: #ffffff;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.05em;">Paperforce India</h1>
      <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.8;">Premium Stationery Manufacturing</p>
    </div>
    
    <div style="padding: 32px 24px; line-height: 1.6; font-size: 15px;">
      <p style="margin-top: 0;">Dear <strong>${name}</strong>,</p>
      <p>Thank you for requesting our B2B Product Catalogue. We are excited to support your sourcing requirements.</p>
      <p>Inside, you will find detailed specifications on our notebooks collection, paper quality indexes, cover rulings, and export packaging parameters.</p>
      
      <div style="text-align: center; margin: 36px 0;">
        <a href="${catalogueUrl}" target="_blank" style="display: inline-block; background: #1e3261; color: #ffffff; text-decoration: none; padding: 14px 36px; border-radius: 8px; font-size: 14px; font-weight: 700; box-shadow: 0 4px 6px rgba(30,50,97,0.15);">Download Product Catalogue</a>
      </div>
      
      <p style="font-size: 12px; color: #94a3b8; word-break: break-all;">
        If the button above does not work, copy and paste this link in your browser:<br/>
        <a href="${catalogueUrl}" style="color: #2563eb; text-decoration: underline;">${catalogueUrl}</a>
      </p>
      
      <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
      <p style="margin: 0; font-size: 14px; color: #64748b;">
        Best Regards,<br/>
        <strong>Export Sales Team</strong><br/>
        Paperforce India LLP
      </p>
    </div>
  </div>
</body>
</html>`,
  });

  // Notify Sales Team
  await sendEmail({
    to: SALES_EMAIL,
    subject: `[New Lead] Catalogue Download Requested — ${name}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Catalogue Download Request</title>
</head>
<body style="font-family: sans-serif; background: #f6f7fb; padding: 24px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
    <div style="background: #1e3261; padding: 24px; color: #ffffff;">
      <h2 style="margin: 0; font-size: 18px;">📋 Catalogue Download Request</h2>
    </div>
    <div style="padding: 24px; font-size: 14px; line-height: 1.6;">
      <p>A new user has submitted details and downloaded the product catalogue:</p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr><td style="padding: 6px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 6px 0; font-weight: bold;">${name}</td></tr>
        <tr><td style="padding: 6px 0; color: #64748b;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #64748b;">Phone</td><td style="padding: 6px 0;">${phone}</td></tr>
      </table>
    </div>
  </div>
</body>
</html>`,
  });

  return NextResponse.json({
    success: true,
    message: "Success! The catalogue download link has been emailed to you.",
  });
}
