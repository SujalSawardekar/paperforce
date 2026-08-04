export const dynamic = 'force-dynamic';
// src/app/api/revalidate/route.ts
// POST /api/revalidate — on-demand ISR revalidation (for CMS webhooks)

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-revalidate-secret");
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const path = body.path as string | undefined;
  const tag = body.tag as string | undefined;

  if (path) revalidatePath(path);
  if (tag) revalidateTag(tag, "max");
  if (!path && !tag) {
    // Revalidate all key pages
    revalidatePath("/");
    revalidatePath("/products");
    revalidatePath("/products/[slug]", "page");
  }

  return NextResponse.json({ revalidated: true, at: new Date().toISOString() });
}
