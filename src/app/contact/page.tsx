import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Container } from "@/components/common/container";
import { SectionTitle } from "@/components/common/section-title";
import { ContactForm } from "./contact-form";
import { ContactMap } from "./contact-map";
import { AccordionItem } from "@/components/ui/accordion";
import { MapPin, Mail, Phone, MessageSquare, Clock, Globe } from "lucide-react";

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
                Let's Build Your<br />Next Export Partnership
              </h1>
              
              <div className="space-y-4 text-base text-slate-600 leading-relaxed pt-2 max-w-md">
                <p>
                  Paperforce India LLP manufactures premium notebooks and paper stationery for importers, distributors, wholesalers, retailers, educational institutions, and private-label brands across global markets.
                </p>
                <p>
                  Whether you're looking for OEM manufacturing, bulk exports, private labeling, or customized stationery solutions, our export team is ready to assist.
                </p>
                <p className="font-medium text-slate-800">
                  Let's discuss your requirements.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">
                {/* Head Office */}
                <div className="flex flex-col gap-1.5 text-sm col-span-1 sm:col-span-2">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Head Office</span>
                  <span className="text-slate-700 leading-relaxed block max-w-[280px]">
                    C-210, Morya House<br/>
                    Off. New Link Road<br/>
                    Andheri West, Mumbai – 400053
                  </span>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5 text-sm">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</span>
                  <span className="text-slate-700 font-medium">+91 97699 66770</span>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col gap-1.5 text-sm">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp</span>
                  <span className="text-slate-700 font-medium">+91 97699 66770</span>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5 text-sm">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Email</span>
                  <a href="mailto:vedant@paperforce.in" className="text-[#1E3261] font-medium hover:underline">vedant@paperforce.in</a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#map-section" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3261] hover:text-blue-700 transition-colors">
                View Company Locations
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
              </a>
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
      <section id="map-section" className="bg-slate-50 pt-24 pb-24 border-t border-slate-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1c3f] font-serif tracking-tight">Visit Our Locations</h2>
            <p className="text-base text-slate-600">
              Find our Corporate Office, Branch Office and Manufacturing Facility across Maharashtra.
            </p>
          </div>

          <ContactMap />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {/* Corporate Office */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col text-left h-full">
              <h4 className="text-lg font-bold text-[#1E3261] mb-4">Corporate Office</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                C-210, Morya House<br/>
                Andheri West<br/>
                Mumbai
              </p>
            </div>
            
            {/* Branch Office */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col text-left h-full">
              <h4 className="text-lg font-bold text-[#1E3261] mb-4">Branch Office</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                403-B, Venus Tower<br/>
                Veera Desai Road<br/>
                Andheri (W), Mumbai
              </p>
            </div>
            
            {/* Manufacturing Facility */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col text-left h-full">
              <h4 className="text-lg font-bold text-[#1E3261] mb-4">Manufacturing Facility</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plot No. 19–20<br/>
                Dewan & Shah Industrial Estate<br/>
                Palghar Udyog Nagar<br/>
                Palghar
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
