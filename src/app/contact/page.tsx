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
              
              <div className="space-y-4 text-base text-slate-600 leading-relaxed pt-2">
                <p>
                  Paperforce India LLP supplies premium paper products to distributors, importers, wholesalers, retailers, and OEM brands across global markets.
                </p>
                <p>
                  Whether you're looking for product catalogs, pricing, private labeling, or container-based exports, our team is ready to assist you.
                </p>
                <p className="font-medium text-slate-800">
                  Have a project in mind? We'd love to hear from you.
                </p>
              </div>
            </div>

            {/* Compact Contact Information */}
            <div className="space-y-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                <div className="flex items-start gap-3 text-sm col-span-1 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Corporate Office</span>
                    <span className="text-slate-700 font-medium">C-210, Morya House, Off. New Link Road, Andheri West, Mumbai – 400053</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</span>
                    <span className="text-slate-700 font-medium">+91 97699 66770</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <MessageSquare className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">WhatsApp</span>
                    <span className="text-slate-700 font-medium">+91 97699 66770</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</span>
                    <a href="mailto:vedant@paperforce.in" className="text-[#1E3261] font-medium hover:underline">vedant@paperforce.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Globe className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Website</span>
                    <a href="https://www.paperforce.in" className="text-[#1E3261] font-medium hover:underline">www.paperforce.in</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Company Locations Cards */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company Locations</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                  <h4 className="text-sm font-bold text-[#1E3261] mb-1">Corporate Office</h4>
                  <p className="text-xs text-slate-500">Mumbai, Maharashtra</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                  <h4 className="text-sm font-bold text-[#1E3261] mb-1">Branch Office</h4>
                  <p className="text-xs text-slate-500">Andheri (W), Mumbai</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                  <h4 className="text-sm font-bold text-[#1E3261] mb-1">Manufacturing Facility</h4>
                  <p className="text-xs text-slate-500">Palghar, Maharashtra</p>
                </div>
              </div>
              
              <div className="pt-2">
                <a href="#map-section" className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E3261] hover:text-blue-700 transition-colors">
                  <MapPin size={14} />
                  View on Google Maps
                </a>
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
      <section id="map-section" className="bg-slate-50 pt-24 pb-16 border-t border-slate-100">
        <Container>
          <ContactMap />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {/* Corporate Office */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <MapPin className="w-6 h-6 text-[#1E3261] mb-4" />
              <h4 className="text-lg font-bold text-[#1E3261] mb-3">Corporate Office</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                C-210, Morya House<br/>
                Off. New Link Road<br/>
                Andheri West<br/>
                Mumbai – 400053
              </p>
            </div>
            
            {/* Branch Office */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <MapPin className="w-6 h-6 text-[#1E3261] mb-4" />
              <h4 className="text-lg font-bold text-[#1E3261] mb-3">Branch Office</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                403-B, Venus Tower<br/>
                Veera Desai Road<br/>
                Andheri (W)<br/>
                Mumbai – 400053
              </p>
            </div>
            
            {/* Manufacturing Facility */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <MapPin className="w-6 h-6 text-[#1E3261] mb-4" />
              <h4 className="text-lg font-bold text-[#1E3261] mb-3">Manufacturing Facility</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plot No. 19–20<br/>
                Dewan & Shah Industrial Estate<br/>
                Palghar Udyog Nagar<br/>
                Palghar – 401404
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
