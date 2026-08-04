import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Container } from "@/components/common/container";
import { SectionTitle } from "@/components/common/section-title";
import { ContactForm } from "./contact-form";
import { AccordionItem } from "@/components/ui/accordion";
import { MapPin, Mail, Phone, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Paperforce India LLP",
  description: "Get in touch with Paperforce India LLP for bulk notebook and paper stationery export enquiries. Manufacturing facility in Palghar, Maharashtra, exporting worldwide via JNPT.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 py-24 md:py-32 bg-white dark:bg-background">
      <Container className="space-y-20">
        
        {/* Page Banner Header */}
        <div className="space-y-6 max-w-3xl text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0b1c3f] dark:text-white font-serif">
            Let's Discuss Your Supply Chain
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you are an importer, distributor, wholesaler, or retail chain, our team is ready to discuss container specifications and timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-900" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Manufacturing Facility</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Palghar, Maharashtra<br />
                    India (100% EOU)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-slate-900" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Correspondence</h3>
                  <a href="mailto:info@paperforce.in" className="text-sm text-slate-500 hover:underline hover:text-slate-900">
                    info@paperforce.in
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 rounded-3xl -m-6 sm:-m-10 p-6 sm:p-10 -z-10 border border-slate-100 dark:border-slate-800" />
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-400">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

        </div>
      </Container>
    </main>
  );
}
