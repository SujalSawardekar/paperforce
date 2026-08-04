export const dynamic = 'force-dynamic';
// src/app/api/admin/rfqs/[id]/route.ts
// GET / PATCH / DELETE /api/admin/rfqs/:id — JWT protected

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const UpdateRFQSchema = z.object({
  status: z.enum(["NEW","REVIEWING","QUOTE_SENT","NEGOTIATING","WON","LOST","SPAM"]).optional(),
  priority: z.enum(["LOW","NORMAL","HIGH","URGENT"]).optional(),
  adminNotes: z.string().max(2000).optional(),
  assignedToId: z.string().optional().nullable(),
});

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const rfq = await prisma.rFQ.findUnique({
    where: { id },
    include: { items: { include: { product: { select: { name: true, slug: true } } } }, assignedTo: { select: { name: true, email: true } } },
  });

  if (!rfq) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(rfq);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const parsed = UpdateRFQSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Validation failed", details: parsed.error.flatten() }, { status: 422 });

  const updated = await prisma.rFQ.update({
    where: { id },
    data: {
      ...parsed.data,
      ...(parsed.data.status === "QUOTE_SENT" ? { quoteSentAt: new Date() } : {}),
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = session.user as { role?: string };
  if (user.role !== "SUPER_ADMIN" && user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  await prisma.rFQ.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
