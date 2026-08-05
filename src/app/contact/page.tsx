import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Container } from "@/components/common/container";
import { SectionTitle } from "@/components/common/section-title";
import { ContactForm } from "./contact-form";
import { ContactMap } from "./contact-map";
import { AccordionItem } from "@/components/ui/accordion";
import { MapPin, Mail, Phone, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Paperforce India LLP",
  description: "Get in touch with Paperforce India LLP for bulk notebook and paper stationery export enquiries. Manufacturing facility in Palghar, Maharashtra, exporting worldwide via JNPT.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 w-full min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        
        {/* Left Column: Info & Contact Person */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 pt-32 lg:p-16 lg:pt-40 xl:p-24 xl:pt-48 overflow-hidden">
          {/* Subtle blue gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f8] via-[#e6f0fa] to-[#f4f7fb] -z-10" />
          
          <div className="w-full max-w-lg space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b1c3f] font-serif leading-tight">
                Let's Discuss Your<br />Supply Chain
              </h1>
              
              <p className="text-base text-slate-600 leading-relaxed pt-2 max-w-md">
                Whether you are an importer, distributor, wholesaler, or retail chain, our team is ready to discuss container specifications and timelines.
              </p>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 space-y-8">
              <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Contact Us</h3>
              
              <div>
                <h4 className="text-xl font-bold text-slate-900">Paperforce India LLP</h4>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 text-sm">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Office Address</span>
                    <span className="text-slate-700 leading-relaxed">[Registered Office Address]</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone No.</span>
                    <span className="text-slate-700 leading-relaxed">[Company Phone Number]</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm">
                  <MessageSquare className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">WhatsApp</span>
                    <span className="text-slate-700 leading-relaxed">[Company WhatsApp Number]</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email ID</span>
                    <a href="mailto:[Company Email Address]" className="text-slate-700 hover:text-slate-900 hover:underline leading-relaxed">
                      [Company Email Address]
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Clock className="w-4 h-4" />
              <span>We respond to all enquiries within <strong className="text-slate-700">1 business day</strong>.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 pt-16 lg:p-16 lg:pt-32 xl:p-24 xl:pt-40 shadow-[-20px_0_40px_-15px_rgba(0,0,0,0.05)] z-10 relative">
          <div className="w-full max-w-xl">
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-400">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

      </div>

      {/* Our Locations Section */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <Container>
          <ContactMap />
        </Container>
      </section>
    </main>
  );
}
