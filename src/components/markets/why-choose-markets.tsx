"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Settings, BarChart2, ShieldCheck, Globe2 } from "lucide-react";

const pillars = [
  {
    title: "Uncompromising Scale & OEM Capacity",
    desc: "Built specifically to handle high-volume export orders. Our factory floor operates seamlessly to fulfill container-load shipments without bottlenecking, offering extensive private-label options for global brands.",
    icon: <BarChart2 size={24} className="text-[#1E3261]" />
  },
  {
    title: "Precision Industrial Manufacturing",
    desc: "Automated converting lines ensure zero tolerance for ruling misalignment, binding failure, or moisture damage. Every notebook batch meets high international standards for institutional and retail distribution.",
    icon: <Settings size={24} className="text-[#1E3261]" />
  },
  {
    title: "Strategic Export Logistics",
    desc: "Positioned directly on the Nhava Sheva (JNPT) export corridor near Mumbai, drastically cutting inland transit times and securing faster, cost-effective maritime dispatch to over five continents.",
    icon: <Globe2 size={24} className="text-[#1E3261]" />
  },
  {
    title: "Rigorous Quality Standards & Compliance",
    desc: "Operating under strict ISO 9001:2015 processes, we implement multi-stage quality checks (ANSI/ASQ Z1.4) to verify paper consistency, cover finishing, and package sealing prior to palletization.",
    icon: <ShieldCheck size={24} className="text-[#1E3261]" />
  }
];

export function WhyChooseMarketsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/50">
      <Container className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" className="space-y-4 text-left mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#1E3261] tracking-tight">
            Why Global Importers Choose Us
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
            We combine high-volume production capabilities, strict quality assurance protocols, and a prime logistical gateway to deliver dependable stationery sourcing worldwide.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="flex gap-4 p-6 sm:p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-md hover:border-slate-200">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-serif text-[#111827] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
