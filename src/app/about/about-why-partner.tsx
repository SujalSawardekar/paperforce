"use client";

import React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const reasons = [
  {
    number: "01",
    title: "100% FOB Consistency",
    desc: "We understand that international shipping requires exact timing. Our manufacturing schedule is strictly aligned with your vessel cut-offs.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  },
  {
    number: "02",
    title: "AQL Quality Audits",
    desc: "Every batch is tested for GSM, brightness, margin alignment, and binding strength before it enters a container.",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
  },
  {
    number: "03",
    title: "Custom Private Labeling",
    desc: "From cover design to poly-wrap packaging, your brand is front and center. We manufacture, you take the credit.",
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
    <section className="py-24 md:py-32 bg-[#f7f8fc]  border-t border-border/40">
      <Container>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Header Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-6">
              <ScrollReveal direction="left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-4 border-l-2 border-primary pl-4">
                  Why Partner
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-foreground">
                  The Paperforce Advantage.
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-6">
                  We don't just sell notebooks; we provide a reliable, hands-off manufacturing arm for your global brand.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Premium Feature Blocks */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
              {reasons.map((reason, idx) => (
                <ScrollReveal 
                  key={idx} 
                  direction="up" 
                  delay={0.1 * idx} 
                  className={`bg-white  p-10 rounded-[32px] border border-slate-100  shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden ${reason.colSpan} ${reason.rowSpan}`}
                >
                  {/* Subtle Background Number */}
                  <div className="absolute -right-4 -bottom-8 text-9xl font-serif font-bold text-slate-50  pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
                    {reason.number}
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="text-sm font-serif font-bold text-primary mb-8">{reason.number}</div>
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
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

