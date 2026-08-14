// src/lib/resend.ts
// Resend email client — gracefully degrades to console log when API key is absent

import { Resend } from "resend";

export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export const EMAIL_FROM =
  process.env.EMAIL_FROM ?? "Paperforce India <noreply@paperforce.in>";

export const SALES_EMAIL = process.env.SALES_EMAIL ?? "vedant@paperforce.in";

/**
 * Send an email. Falls back to console.log when Resend is not configured.
 */
export async function sendEmail(opts: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  if (!resend) {
    // Dev fallback — log instead of sending
    console.log("[EMAIL DEV FALLBACK]", {
      to: opts.to,
      subject: opts.subject,
      preview: opts.html.slice(0, 200),
    });
    return { success: true, id: "dev-fallback" };
  }

  const { data, error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: Array.isArray(opts.to) ? opts.to : [opts.to],
    subject: opts.subject,
    html: opts.html,
  });

  if (error) {
    console.error("[RESEND ERROR]", error);
    return { success: false, error };
  }

  return { success: true, id: data?.id };
}
