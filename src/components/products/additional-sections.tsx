"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FileText, Download, ShieldCheck, Factory, Box, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function CustomizationSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1E3261]">Customization & OEM Branding</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                As a dedicated Private Label Manufacturer, we adapt completely to your brand. From specific paper grammage to custom ruling, bindings, and intricate cover finishing.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { icon: PenTool, title: "Custom Artwork & Covers", desc: "Gold foiling, UV coating, soft-touch laminates, and debossing." },
                  { icon: Factory, title: "Flexible Specifications", desc: "Choose your exact sizes, ruling formats, and paper brightness." },
                  { icon: Box, title: "Export Ready Packaging", desc: "Barcoding, shrink-wrapping, and master cartons designed for retail." }
                ].map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-white p-2 rounded-lg shadow-sm text-[#1E3261]">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-500 text-sm">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 flex items-center justify-center p-8">
              <Image src="/Images of Product/Set_07/Set_07 (1).png" alt="OEM Manufacturing" fill className="object-contain" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/50 to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export function QualityProcessSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ShieldCheck size={40} className="text-[#1E3261] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1E3261] mb-4">Export Quality Assurance</h2>
            <p className="text-slate-600">Every container shipped meets strict international standards, ensuring your retail shelves only see perfection.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Raw Material Sourcing", desc: "Premium grade paper sourced from FSC-certified mills." },
            { step: "02", title: "Precision Manufacturing", desc: "Automated web presses and binding lines ensuring consistency at scale." },
            { step: "03", title: "Pre-Shipment Inspection", desc: "Rigorous lot testing before container loading." }
          ].map((item, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#1E3261]/20 transition-colors">
                <span className="text-5xl font-bold font-serif text-slate-200 mb-4 block">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
