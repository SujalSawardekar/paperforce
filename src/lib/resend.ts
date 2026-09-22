// src/lib/resend.ts
// Unified email delivery client — uses Gmail SMTP via Nodemailer with Resend / log fallback

import nodemailer from "nodemailer";
import { Resend } from "resend";

export const EMAIL_FROM =
  process.env.EMAIL_FROM || "Paperforce India <sales@paperforce.in>";

export const SALES_EMAIL =
  process.env.SALES_EMAIL || "sales@paperforce.in";

const DEFAULT_SMTP_USER = "sales@paperforce.in";
const DEFAULT_SMTP_PASS = "etpgkroccfjqfsea";

function getTransporter() {
  const user = (process.env.SMTP_USER || DEFAULT_SMTP_USER).trim();
  const rawPass = process.env.SMTP_PASS || DEFAULT_SMTP_PASS;
  const pass = rawPass.trim().replace(/\s+/g, "");

  if (!user || !pass) {
    console.warn("[SMTP CONFIG WARNING] No SMTP credentials found.");
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "465", 10),
    secure: process.env.SMTP_SECURE !== "false", // true for 465 (SSL)
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/**
 * Send an email via Gmail SMTP, with fallback to Resend or console.log.
 */
export async function sendEmail(opts: {
  to: string | string[];
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    path?: string;
    content?: string | Buffer;
    contentType?: string;
  }>;
}) {
  const recipients = Array.isArray(opts.to) ? opts.to.join(", ") : opts.to;

  // 1. Primary: Send via Nodemailer / Gmail SMTP
  try {
    const transporter = getTransporter();
    if (transporter) {
      const info = await transporter.sendMail({
        from: EMAIL_FROM,
        to: recipients,
        subject: opts.subject,
        html: opts.html,
        attachments: opts.attachments,
      });
      console.log("[SMTP SUCCESS] Email sent to:", recipients, "MessageId:", info.messageId);
      return { success: true, id: info.messageId };
    }
  } catch (smtpErr) {
    console.error("[SMTP ERROR] Failed to send via Gmail SMTP:", smtpErr);
  }

  // 2. Secondary: Send via Resend API
  if (resend) {
    try {
      const { data, error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: Array.isArray(opts.to) ? opts.to : [opts.to],
        subject: opts.subject,
        html: opts.html,
      });
      if (error) {
        console.error("[RESEND ERROR]", error);
      } else {
        console.log("[RESEND SUCCESS] Email sent to:", recipients, "Id:", data?.id);
        return { success: true, id: data?.id };
      }
    } catch (resendErr) {
      console.error("[RESEND EXCEPTION]", resendErr);
    }
  }

  // 3. Fallback: Dev console log
  console.log("[EMAIL DEV FALLBACK]", {
    to: opts.to,
    subject: opts.subject,
    preview: opts.html.slice(0, 200),
  });
  return { success: true, id: "dev-fallback" };
}


