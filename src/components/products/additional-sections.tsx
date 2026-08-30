"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FileText, Download, ShieldCheck, Factory, Box, PenTool, CheckCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductPhilosophy() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3261] leading-tight">
              Craftsmanship Engineered for Global Export.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                At Paperforce India, we don't just manufacture notebooks—we engineer high-volume paper stationery as per customized specifications for international markets. Our state-of-the-art facility is built to handle high-volume OEM production without ever compromising on precision.
              </p>
              <p>
                From sourcing FSC-certified raw materials to rigorous AQL inspections, every phase of our manufacturing process is designed to meet the exacting standards of global distributors, wholesalers, and premium retail brands.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export function ManufacturingProcess() {
  const steps = [
    { num: "01", title: "Order Finalization", desc: "" },
    { num: "02", title: "Designing & Pre-Press", desc: "" },
    { num: "03", title: "Procurement", desc: "" },
    { num: "04", title: "Manufacturing", desc: "governed by ISO 9001: 2015 Standards" },
    { num: "05", title: "Packing & Quality Assurance", desc: "" },
    { num: "06", title: "Container Stuffing & Dispatch", desc: "" }
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-200 overflow-hidden">
      <Container>
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#1E3261] mb-8">The Order Flow</h2>
        </ScrollReveal>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-300 -translate-y-1/2" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative">
                <div className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow relative z-10 h-full flex flex-col items-center justify-center">
                  <span className="text-[#1E3261] font-bold text-xs mb-1 opacity-50 block">Step {step.num}</span>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">{step.title}</h4>
                  {step.desc && <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{step.desc}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function OemPrivateLabelSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] max-h-[320px] rounded-2xl overflow-hidden bg-slate-100 p-6 flex items-center justify-center">
              <Image 
                src="/Images of Product/Set_07/Set_07 (1).png" 
                alt="OEM Manufacturing" 
                fill 
                className="object-contain hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </ScrollReveal>
          
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#1E3261]">OEM & Private Label</h2>
              <p className="text-base text-slate-600 mt-2 leading-relaxed">
                Your brand, our manufacturing expertise. We offer complete customization capabilities to ensure the final product perfectly aligns with your brand identity.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: PenTool, title: "Custom Covers", desc: "Foil stamping, UV, debossing" },
                { icon: Factory, title: "Paper Grammage", desc: "54 GSM to 80+ GSM options" },
                { icon: Box, title: "Retail Packaging", desc: "Custom shrink-wrap & barcodes" },
                { icon: CheckCircle, title: "Brand Identity", desc: "Watermarks & custom endpapers" }
              ].map((feat, i) => (
                <ScrollReveal key={i} delay={0.1 * i} className="flex gap-3 items-start">
                  <div className="text-[#1E3261] bg-slate-50 p-2.5 rounded-lg shrink-0">
                    <feat.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{feat.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{feat.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function QualityAssuranceSection() {
  return (
    <section className="py-12 md:py-16 bg-[#1E3261] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <ScrollReveal>
              <ShieldCheck size={40} className="text-blue-300 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif">Export Quality Assurance</h2>
              <p className="text-base text-slate-300 mt-2 leading-relaxed">
                We understand that in international trade, consistency is paramount. Our factory operates under stringent quality control protocols to guarantee that every single container shipped meets global retail standards.
              </p>
            </ScrollReveal>
            
            <ul className="space-y-3">
              {[
                "AQL Pre-Shipment Inspection",
                "ISO Certified Manufacturing Standards",
                "Rigorous Raw Material Testing",
                "Moisture & Bind Strength Checks"
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.1 * i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-blue-400" />
                  <span className="font-medium text-sm text-slate-200">{item}</span>
                </ScrollReveal>
              ))}
            </ul>
          </div>
          
          <ScrollReveal>
            <div className="relative aspect-[4/3] max-h-[320px] rounded-2xl overflow-hidden bg-slate-800 p-6 flex items-center justify-center">
               <Image src="/images/precision_at_scale.png" alt="Quality Assurance" fill className="object-cover opacity-60 mix-blend-luminosity" />
               <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply pointer-events-none" />
               <div className="absolute inset-0 paper-noise opacity-30 pointer-events-none" />
               <div className="relative z-10 p-6 text-center">
                  <span className="text-white font-serif italic text-xl drop-shadow-md">Precision at Scale</span>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export function CatalogueDownloadsSection() {
  const docs = [
    { title: "Product Catalogue", desc: "Complete 2026 Collection", file: "/PaperForce%20Catalogue.pdf" },
    { title: "Technical Specifications", desc: "Detailed GSM & Bindings", file: "/PaperForce%20Catalogue.pdf" },
    { title: "Export Packaging Guide", desc: "Pallet & Container Specs", file: "/PaperForce%20Catalogue.pdf" }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#1E3261] mb-3">Official Documentation</h2>
            <p className="text-slate-600 text-base">Download our comprehensive guides to review product matrixes, technical details, and logistical requirements.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {docs.map((doc, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div 
                className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => window.dispatchEvent(new CustomEvent("open-catalogue-modal"))}
              >
                <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center text-[#1E3261] mb-4 group-hover:bg-[#1E3261] group-hover:text-white transition-colors">
                  <FileText size={18} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">{doc.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{doc.desc}</p>
                <div className="flex items-center text-xs font-bold text-[#1E3261] uppercase tracking-wider">
                  Download PDF <Download size={14} className="ml-2 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}


