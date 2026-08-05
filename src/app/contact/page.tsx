import type { Metadata } from "next";
import { ContactPageContent } from "./contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us | Paperforce India LLP",
  description: "Get in touch with Paperforce India LLP for bulk notebook and paper stationery export enquiries. Manufacturing facility in Palghar, Maharashtra, exporting worldwide via JNPT.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
