// prisma/seed.ts
// Database seeding script — populates default admin user and initial product categories

import { PrismaClient, AdminRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // 1. Seed Default Admin User
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? "admin@paperforce.in";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? "ChangeMe123!";
  const adminName = process.env.SEED_ADMIN_NAME ?? "Admin";

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    const admin = await prisma.adminUser.create({
      data: {
        email: adminEmail,
        name: adminName,
        passwordHash,
        role: AdminRole.SUPER_ADMIN,
      },
    });
    console.log(`✅ Default admin user created: ${admin.email}`);
  } else {
    console.log(`ℹ️ Default admin user already exists: ${existingAdmin.email}`);
  }

  // 2. Seed Initial B2B Product Categories
  const categories = [
    { name: "Exercise Books", slug: "exercise-books", description: "Classic school and volume-procurement configuration stitched books." },
    { name: "Spiral Bound", slug: "spiral-bound", description: "Wire-coil bind lay-flat journals for workspace utility." },
    { name: "Double Wire", slug: "double-wire-bound", description: "Reinforced double-loop construction for executive planners." },
    { name: "Hardcover Gally", slug: "gally-bound", description: "Rigid board casing archival notebooks built for durability." },
    { name: "Centre Stitched", slug: "centre-stitched", description: "Economic saddle-stitched sheets for tender distributions." },
    { name: "Glue Bound", slug: "glue-bound", description: "Adhesive spine notepad configurations." },
    { name: "Paper Packaging", slug: "packaging", description: "Custom packaging bags, boxes, and heavy duplex materials." },
  ];

  console.log("🌱 Seeding product categories...");
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
      },
    });
  }
  console.log("✅ Categories seeded successfully.");

  console.log("🌱 Database seeding complete.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
