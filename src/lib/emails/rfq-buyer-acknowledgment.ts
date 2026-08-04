// src/lib/emails/rfq-buyer-acknowledgment.ts
// Generates acknowledgment email sent to the buyer after RFQ submission

interface Item {
  productName: string;
  quantity?: number;
  unit?: string;
}

interface BuyerAckParams {
  contactName: string;
  companyName: string;
  items: Item[];
}

export function rfqBuyerAckHtml(p: BuyerAckParams): string {
  const itemList = p.items
    .map((i) => `<li style="padding:4px 0;font-size:13px;color:#475569;">${i.productName}${i.quantity ? ` — ${i.quantity} ${i.unit ?? ""}` : ""}</li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Enquiry Received — Paperforce India</title></head>
<body style="font-family:Arial,sans-serif;background:#f8fafc;margin:0;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
    <!-- Header -->
    <div style="background:#0b1c3f;padding:32px;">
      <p style="color:#ffffff;font-size:20px;font-weight:700;margin:0;">Paperforce India LLP</p>
      <p style="color:#94a3b8;font-size:12px;margin:4px 0 0;">Global Stationery Manufacturer & Exporter</p>
    </div>
    <!-- Body -->
    <div style="padding:32px;">
      <p style="font-size:16px;font-weight:600;color:#0b1c3f;margin-bottom:8px;">Dear ${p.contactName},</p>
      <p style="font-size:13px;color:#475569;line-height:1.6;margin-bottom:16px;">
        Thank you for reaching out to <strong>Paperforce India LLP</strong>. We have received your enquiry on behalf of <strong>${p.companyName}</strong> and our export commercial division will contact you within <strong>1 business day</strong> with pricing details, container specifications, and lead times.
      </p>

      <p style="font-size:13px;font-weight:700;color:#0b1c3f;margin-bottom:8px;">Products You Enquired About</p>
      <ul style="margin:0 0 24px;padding-left:20px;">
        ${itemList}
      </ul>

      <div style="background:#f1f5f9;border-radius:8px;padding:16px;margin-bottom:24px;">
        <p style="font-size:12px;color:#64748b;margin:0 0 8px;font-weight:600;">WHAT HAPPENS NEXT</p>
        <p style="font-size:12px;color:#475569;margin:0;line-height:1.6;">
          Our export team at Nhava Sheva (JNPT) will review your requirements, compile container-grade pricing, and respond with a formal quotation. For urgent requirements, you may also reach us directly on WhatsApp.
        </p>
      </div>

      <table style="width:100%;font-size:12px;color:#475569;">
        <tr><td style="padding:4px 0;font-weight:600;width:120px;">Email:</td><td>info@paperforce.in</td></tr>
        <tr><td style="padding:4px 0;font-weight:600;">WhatsApp:</td><td>+91 99999 99999 (B2B Line)</td></tr>
        <tr><td style="padding:4px 0;font-weight:600;">Factory:</td><td>Palghar, Maharashtra, India</td></tr>
      </table>
    </div>
    <div style="background:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0;">
      <p style="font-size:11px;color:#94a3b8;margin:0;">
        This is an automated acknowledgment. Please do not reply to this email. 
        For direct contact, email <a href="mailto:info@paperforce.in" style="color:#0b1c3f;">info@paperforce.in</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}
