// src/lib/emails/rfq-team-notification.ts
// Generates HTML email sent to the Paperforce sales team on each new RFQ

interface Item {
  productName: string;
  quantity?: number;
  unit?: string;
  specNotes?: string;
}

interface TeamNotificationParams {
  rfqId: string;
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  country: string;
  destinationPort?: string;
  incotermsPreferred?: string;
  currency: string;
  estimatedVolume?: string;
  items: Item[];
  additionalNotes?: string;
}

export function rfqTeamHtml(p: TeamNotificationParams): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const itemRows = p.items
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${item.productName}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${item.quantity ? `${item.quantity} ${item.unit ?? ""}` : "TBC"}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${item.specNotes ?? "—"}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New RFQ — Paperforce</title></head>
<body style="font-family:Arial,sans-serif;background:#f8fafc;margin:0;padding:24px;">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
    <!-- Header -->
    <div style="background:#0b1c3f;padding:24px 32px;">
      <p style="color:#ffffff;font-size:18px;font-weight:700;margin:0;">📋 New RFQ Received</p>
      <p style="color:#94a3b8;font-size:12px;margin:4px 0 0;">Paperforce India LLP — Export Division</p>
    </div>
    <!-- Body -->
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;width:160px;">RFQ ID</td><td style="padding:6px 0;font-size:13px;font-weight:600;">${p.rfqId}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Company</td><td style="padding:6px 0;font-size:13px;font-weight:600;">${p.companyName}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Contact</td><td style="padding:6px 0;font-size:13px;">${p.contactName}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Email</td><td style="padding:6px 0;font-size:13px;"><a href="mailto:${p.email}" style="color:#0b1c3f;">${p.email}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Phone</td><td style="padding:6px 0;font-size:13px;">${p.phone ?? "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Country</td><td style="padding:6px 0;font-size:13px;">${p.country}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Destination Port</td><td style="padding:6px 0;font-size:13px;">${p.destinationPort ?? "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Incoterms</td><td style="padding:6px 0;font-size:13px;">${p.incotermsPreferred ?? "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Currency</td><td style="padding:6px 0;font-size:13px;">${p.currency}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:12px;">Est. Volume</td><td style="padding:6px 0;font-size:13px;">${p.estimatedVolume ?? "—"}</td></tr>
      </table>

      <p style="font-size:13px;font-weight:700;color:#0b1c3f;margin-bottom:8px;">Items Requested</p>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:12px;">
        <thead>
          <tr style="background:#f1f5f9;">
            <th style="padding:8px 12px;text-align:left;color:#64748b;">Product</th>
            <th style="padding:8px 12px;text-align:left;color:#64748b;">Quantity</th>
            <th style="padding:8px 12px;text-align:left;color:#64748b;">Spec Notes</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
      </table>

      ${p.additionalNotes ? `<p style="font-size:13px;font-weight:700;color:#0b1c3f;margin-bottom:8px;">Additional Notes</p><p style="font-size:12px;color:#475569;background:#f8fafc;padding:12px;border-radius:6px;margin-bottom:24px;">${p.additionalNotes}</p>` : ""}

      <a href="${appUrl}/admin/rfqs/${p.rfqId}" 
         style="display:inline-block;background:#0b1c3f;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:600;">
        View in Admin Panel →
      </a>
    </div>
    <div style="background:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0;">
      <p style="font-size:11px;color:#94a3b8;margin:0;">Paperforce India LLP · Mumbai HQ · Palghar Manufacturing</p>
    </div>
  </div>
</body>
</html>`;
}
