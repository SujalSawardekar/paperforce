"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ArrowRight, MapPin } from "lucide-react";

// Per Content Draft §1 Section 7 — Global Reach Teaser
// "From West Africa to the Middle East, the UK to the Americas — see where Paperforce India currently trades."
const regions = [
  { name: "United States", region: "North America", flag: "🇺🇸" },
  { name: "United Kingdom", region: "Europe", flag: "🇬🇧" },
  { name: "Saudi Arabia · UAE · Oman", region: "Middle East", flag: "🌍" },
  { name: "West Africa", region: "Africa", flag: "🌍" },
  { name: "Mexico · Latin America", region: "Latin America", flag: "🌎" },
];

export function GlobalReachSection() {
  return (
    <section className="py-20 md:py-32 bg-[#1E3261] relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-mesh opacity-10 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="space-y-8">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-slate-300 font-semibold tracking-widest text-xs uppercase bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                Global Reach
              </span>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight">
                Export-Ready.<br />
                <span className="text-slate-300">Delivered Worldwide.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                From West Africa to the Middle East, the UK to the Americas — see where Paperforce India currently trades. Every shipment dispatched via Nhava Sheva (JNPT), India's leading container gateway.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={16} className="text-slate-300 shrink-0" />
                <span>Nhava Sheva (JNPT) · Palghar, Maharashtra, India</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <Link href="/reach-markets">
                <Button variant="outline">
                  See Our Markets
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: Region Cards */}
          <AnimatedGroup className="grid grid-cols-1 gap-3" staggerDelay={0.1}>
            {regions.map((r, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{r.flag}</span>
                  <div>
                    <div className="font-semibold text-white text-sm">{r.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{r.region}</div>
                  </div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-white/5 px-2 py-1 rounded-full border border-white/10">
                  Active
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </div>

        {/* Stats bar */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "5", label: "Global Regions" },
              { num: "10+", label: "Years Exporting" },
              { num: "JNPT", label: "Export Gateway" },
              { num: "AQL", label: "Every Shipment" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white font-serif">{stat.num}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
