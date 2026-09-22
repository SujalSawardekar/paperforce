import { NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "PaperForce Catalogue.pdf");

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Catalogue file not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="PaperForce-Catalogue.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
