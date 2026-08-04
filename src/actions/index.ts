"use server";

import { EnquirySchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";
import { sendEmail, SALES_EMAIL } from "@/lib/resend";
import { rfqTeamHtml } from "@/lib/emails/rfq-team-notification";
import { rfqBuyerAckHtml } from "@/lib/emails/rfq-buyer-acknowledgment";
import * as fs from "fs";
import * as path from "path";

// Fallback JSON-based store in case the database URL is not configured/accessible
const SUBMISSIONS_FALLBACK_FILE = path.join(process.cwd(), "prisma", "submissions.json");

async function saveSubmissionFallback(data: Record<string, unknown>) {
  try {
    const dir = path.dirname(SUBMISSIONS_FALLBACK_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    let submissions: Record<string, unknown>[] = [];
    if (fs.existsSync(SUBMISSIONS_FALLBACK_FILE)) {
      const fileContent = fs.readFileSync(SUBMISSIONS_FALLBACK_FILE, "utf-8");
      submissions = JSON.parse(fileContent || "[]");
    }
    
    submissions.push({
      id: "fallback-" + Math.random().toString(36).substr(2, 9),
      ...data,
      createdAt: new Date().toISOString(),
    });
    
    fs.writeFileSync(SUBMISSIONS_FALLBACK_FILE, JSON.stringify(submissions, null, 2), "utf-8");
    console.log("[DB FALLBACK] Lead saved to local file successfully.");
  } catch (error) {
    console.error("[DB FALLBACK ERROR] Failed to save lead locally:", error);
  }
}

export async function submitEnquiryAction(data: unknown) {
  try {
    const validated = EnquirySchema.safeParse(data);
    
    if (!validated.success) {
      return {
        success: false,
        message: "Form validation failed. Please check the fields below.",
        errors: validated.error.flatten().fieldErrors,
      };
    }

    // Bot detection check (Honeypot)
    if (validated.data._hp) {
      console.warn("[BOT DETECTED] Honeypot field filled.");
      return {
        success: true, // Silent success to confuse bots
        message: "Your enquiry has been successfully sent.",
      };
    }

    const { name, company, country, email, phone, productInterest, moq, message } = validated.data;

    let savedToDb = false;
    let dbRecordId = "fallback";

    // Attempt to write to PostgreSQL database via Prisma
    if (process.env.DATABASE_URL) {
      try {
        const rfq = await prisma.rFQ.create({
          data: {
            companyName: company,
            contactName: name,
            email: email,
            phone: phone || null,
            country: country,
            estimatedVolume: moq,
            additionalNotes: message,
            source: "website_enquiry_form",
            items: {
              create: [
                {
                  productName: productInterest.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase()),
                  specNotes: `MOQ requested: ${moq}`,
                }
              ]
            }
          }
        });
        dbRecordId = rfq.id;
        savedToDb = true;
        console.log("[DB SUCCESS] Lead stored in database with ID:", rfq.id);
      } catch (prismaError) {
        console.error("[DB ERROR] Prisma database write failed. Falling back to local file storage:", prismaError);
      }
    } else {
      console.log("[DB NOTICE] DATABASE_URL is not configured. Falling back to local file storage.");
    }

    // Save lead to local JSON storage if PostgreSQL write failed or wasn't configured
    if (!savedToDb) {
      await saveSubmissionFallback({
        name,
        company,
        country,
        email,
        phone,
        productInterest,
        moq,
        message
      });
    }

    // Send emails (non-blocking notification)
    try {
      const items = [{
        productName: productInterest.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase()),
        specNotes: `MOQ: ${moq}`
      }];

      await Promise.allSettled([
        sendEmail({
          to: SALES_EMAIL,
          subject: `[New Website Lead] ${company} — ${country}`,
          html: rfqTeamHtml({
            rfqId: dbRecordId,
            companyName: company,
            contactName: name,
            email: email,
            phone: phone,
            country: country,
            currency: "USD",
            estimatedVolume: moq,
            items: items,
            additionalNotes: message
          })
        }),
        sendEmail({
          to: email,
          subject: "Thank you for contacting Paperforce India LLP",
          html: rfqBuyerAckHtml({
            contactName: name,
            companyName: company,
            items: items
          })
        })
      ]);
    } catch (emailError) {
      console.error("[EMAIL ERROR] Outbound email routing failed:", emailError);
    }

    return {
      success: true,
      message: "Your enquiry has been successfully sent. Our export commercial division will contact you with specific quotations and container lead times.",
    };
  } catch (error) {
    console.error("Server Action submitEnquiryAction Error:", error);
    return {
      success: false,
      message: "An internal server error occurred. Please try again later or contact info@paperforce.in directly.",
    };
  }
}
