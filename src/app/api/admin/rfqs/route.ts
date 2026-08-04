export const dynamic = 'force-dynamic';
// src/app/api/admin/rfqs/route.ts
// GET /api/admin/rfqs — paginated RFQ list (JWT protected)

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1"));
  const limit = Math.min(50, parseInt(searchParams.get("limit") ?? "20"));
  const status = searchParams.get("status") ?? undefined;
  const search = searchParams.get("search") ?? undefined;

  const where = {
    ...(status ? { status: status as never } : {}),
    ...(search
      ? {
          OR: [
            { companyName: { contains: search, mode: "insensitive" as const } },
            { email: { contains: search, mode: "insensitive" as const } },
            { country: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const [rfqs, total] = await Promise.all([
    prisma.rFQ.findMany({
      where,
      include: { items: true, assignedTo: { select: { name: true, email: true } } },
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.rFQ.count({ where }),
  ]);

  return NextResponse.json({ rfqs, total, page, limit, pages: Math.ceil(total / limit) });
}
