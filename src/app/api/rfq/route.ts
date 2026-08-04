export const dynamic = 'force-dynamic';
// src/app/api/rfq/route.ts
// POST /api/rfq — validate, store in DB, notify sales team, ACK buyer

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { RFQSchema } from "@/lib/validations";
import { sendEmail, SALES_EMAIL } from "@/lib/resend";
import { rateLimit } from "@/lib/rate-limit";
import { rfqTeamHtml } from "@/lib/emails/rfq-team-notification";
import { rfqBuyerAckHtml } from "@/lib/emails/rfq-buyer-acknowledgment";

export async function POST(req: NextRequest) {
  // ── Rate limiting: 5 RFQs per IP per hour ──────────────────────────────────
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limited = rateLimit(ip, 5, 60 * 60 * 1000);
  if (!limited.allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // ── Parse & validate body ─────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const parsed = RFQSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed. Please check the fields below.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot check
  if (parsed.data._hp) {
    // Silent 200 to confuse bots
    return NextResponse.json({ success: true });
  }

  const {
    companyName, contactName, email, phone, country,
    destinationPort, incotermsPreferred, estimatedVolume,
    targetDeliveryDate, currency, items, additionalNotes,
  } = parsed.data;

  // ── Persist to database ───────────────────────────────────────────────────
  let rfq;
  try {
    rfq = await prisma.rFQ.create({
      data: {
        companyName,
        contactName,
        email,
        phone,
        country,
        destinationPort,
        incotermsPreferred,
        estimatedVolume,
        targetDeliveryDate,
        currency,
        additionalNotes,
        source: "website",
        ipAddress: ip,
        items: {
          create: items.map((item) => ({
            productId: item.productId ?? null,
            productName: item.productName,
            quantity: item.quantity ?? null,
            unit: item.unit ?? null,
            specNotes: item.specNotes ?? null,
          })),
        },
      },
    });
  } catch (err) {
    console.error("[RFQ DB ERROR]", err);
    return NextResponse.json(
      { success: false, message: "Database error. Please try again." },
      { status: 500 }
    );
  }

  // ── Send emails (non-blocking — don't fail if email fails) ───────────────
  await Promise.allSettled([
    sendEmail({
      to: SALES_EMAIL,
      subject: `[New RFQ] ${companyName} — ${country} — ${items.map((i) => i.productName).join(", ")}`,
      html: rfqTeamHtml({ rfqId: rfq.id, companyName, contactName, email, phone, country, destinationPort, incotermsPreferred, currency, estimatedVolume, items, additionalNotes }),
    }),
    sendEmail({
      to: email,
      subject: `Your enquiry has been received — Paperforce India LLP`,
      html: rfqBuyerAckHtml({ contactName, companyName, items }),
    }),
  ]);

  return NextResponse.json({
    success: true,
    rfqId: rfq.id,
    message: "Your enquiry has been received. Our export team will contact you within 1 business day.",
  });
}
