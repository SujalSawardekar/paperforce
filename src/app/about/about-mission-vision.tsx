"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutMissionVision() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 relative border-y border-slate-100">
      <Container className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Static Sticky Image (Desktop) */}
          <div className="hidden lg:block lg:sticky lg:top-24 h-[360px] md:h-[400px] w-full rounded-[2rem] overflow-hidden shadow-md border border-slate-200/50 bg-slate-100 relative">
            <Image 
              src="/images/about/about_mfg_overview_new.jpg"
              alt="Paperforce India state-of-the-art production floor infrastructure"
              fill
              sizes="40vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Editorial Sequential Content */}
          <div className="space-y-10 md:space-y-12">
            
            {/* Mobile Image: Only visible on mobile/tablet as standard flow block */}
            <div className="lg:hidden relative w-full aspect-square sm:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-md border border-slate-200/50 bg-slate-100 mb-8">
              <Image 
                src="/images/about/about_mfg_overview_new.jpg"
                alt="Paperforce India state-of-the-art production floor infrastructure"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Our Mission */}
            <div className="space-y-4">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1E3261] mb-2 block">
                  Our Mission
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-serif text-slate-900 leading-tight">
                  Trade. Trust. Scale.
                </h3>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  To manufacture with the discipline of three generations and the scale of modern automation — delivering paper stationery global brands can trust, batch after batch, without compromise.
                </p>
              </ScrollReveal>
            </div>

            {/* Our Vision */}
            <div className="space-y-4">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1E3261] mb-2 block">
                  Our Vision
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-serif text-slate-900 leading-tight">
                  Legacy. Built Forward.
                </h3>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  To become the manufacturing name global brands turn to first — not because we&apos;re the newest, but because three generations in, we&apos;ve never cut a corner.
                </p>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}