import { z } from "zod";

// ─── Existing contact enquiry form (kept for backward compat) ─────────────────
export const EnquirySchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters"),
  company: z.string().min(2, "Company Name must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email address"),
  phone: z.string().min(6, "Phone/WhatsApp number must be at least 6 characters"),
  productInterest: z.enum([
    "exercise-books",
    "spiral-bound",
    "double-wire-bound",
    "gally-bound",
    "centre-stitched",
    "glue-bound",
    "packaging",
  ], { message: "Please select a valid product interest category" }),
  moq: z.string().min(1, "Please specify your required MOQ / volume (e.g. 1 FCL, 5000 units)"),
  message: z.string().min(10, "Message must detail your specifications and be at least 10 characters"),
  _hp: z.string().max(0, "Bot detected").optional(), // Honeypot — must be empty
});

export type EnquiryInput = z.infer<typeof EnquirySchema>;

// ─── Full structured RFQ (for /api/rfq) ──────────────────────────────────────
export const RFQItemSchema = z.object({
  productId: z.string().optional(),
  productName: z.string().min(1).max(150),
  quantity: z.coerce.number().int().positive().optional(),
  unit: z.enum(["cartons", "reams", "pieces", "containers"]).optional(),
  specNotes: z.string().max(500).optional(),
});

export const RFQSchema = z.object({
  companyName: z.string().min(2).max(120),
  contactName: z.string().min(2).max(80),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().min(2).max(60),
  destinationPort: z.string().max(80).optional(),
  incotermsPreferred: z.enum(["FOB", "CIF", "CFR", "DAP", "EXW"]).optional(),
  estimatedVolume: z.string().max(100).optional(),
  targetDeliveryDate: z.string().optional(),
  currency: z.enum(["USD", "EUR", "GBP", "AED", "INR"]).default("USD"),
  items: z.array(RFQItemSchema).min(1).max(10),
  additionalNotes: z.string().max(1000).optional(),
  _hp: z.string().max(0, "Bot detected").optional(),
});

export type RFQInput = z.infer<typeof RFQSchema>;

// ─── Simple contact message ───────────────────────────────────────────────────
export const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().max(120).optional(),
  message: z.string().min(10).max(2000),
  _hp: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof ContactSchema>;

// ─── Admin login ──────────────────────────────────────────────────────────────
export const AdminLoginSchema = z.object({
  email: z.string().email("Valid email required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type AdminLoginInput = z.infer<typeof AdminLoginSchema>;

// ─── Product upsert (admin catalog CRUD) ─────────────────────────────────────
export const ProductSchema = z.object({
  name: z.string().min(2).max(120),
  slug: z
    .string()
    .min(2)
    .max(120)
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  description: z.string().min(10).max(2000),
  categoryId: z.string().min(1),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
});

export type ProductInput = z.infer<typeof ProductSchema>;
