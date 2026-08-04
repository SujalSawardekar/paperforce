"use client";
import React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const reasons = [
  {
    number: "01",
    title: <>10{"\u200C"}0<span className="font-sans">%</span> FOB Consistency</>,
    desc: "We understand that international shipping requires exact timing. Our manufacturing schedule is strictly aligned with your vessel cut-offs to guarantee on-time delivery.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  },
  {
    number: "02",
    title: "AQL Quality Audits",
    desc: "Every batch is rigorously tested for GSM, brightness, margin alignment, and binding strength before it enters a container.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
  },
  {
    number: "03",
    title: "Custom Private Labeling",
    desc: "From cover design to shrink-wrap packaging, your brand is front and center. We manufacture, you take the credit.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    number: "04",
    title: "Pulp Sourcing Power",
    desc: "Decades of relationships with paper mills mean our raw material supply is never interrupted by spot market fluctuations.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  }
];

export function AboutWhyPartner() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-100">
      <Container className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Header Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-8">
              <ScrollReveal direction="left">
                <span className="text-sm font-bold uppercase tracking-widest text-[#1E3261] mb-4 block">
                  Why Partner With Us
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] text-slate-900">
                  The Paperforce <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3261] to-blue-600">Advantage</span>
                </h2>
                <div className="w-12 h-1 bg-blue-600 mt-8 rounded-full" />
                <p className="text-lg text-slate-600 leading-relaxed mt-8 font-medium">
                  We don't just sell notebooks; we provide a reliable, hands-off manufacturing arm for your global brand.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Premium Feature Blocks */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-min">
              {reasons.map((reason, idx) => (
                <ScrollReveal 
                  key={idx} 
                  direction="up" 
                  delay={0.1 * idx} 
                  className={`bg-slate-50 p-10 lg:p-12 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden ${reason.colSpan} ${reason.rowSpan}`}
                >
                  {/* Subtle Background Number */}
                  <div className="absolute -right-8 -bottom-12 text-[150px] leading-none font-serif font-bold text-slate-200/50 pointer-events-none group-hover:text-blue-100 transition-colors duration-500">
                    {reason.number}
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="text-sm font-serif font-bold text-[#1E3261] mb-12 flex items-center gap-2">
                      <div className="w-8 h-px bg-[#1E3261]" />
                      {reason.number}
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#1E3261] transition-colors duration-300">{reason.title}</h3>
                      <p className="text-base text-slate-600 leading-relaxed font-medium">{reason.desc}</p>
                    </div>
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

