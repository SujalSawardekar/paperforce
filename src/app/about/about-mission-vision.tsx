"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutMissionVision() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative border-y border-slate-100">
      <Container className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Static Sticky Image (Desktop) */}
          <div className="hidden lg:block lg:sticky lg:top-32 h-[500px] w-full rounded-[2rem] overflow-hidden shadow-md border border-slate-200/50 bg-slate-100 relative">
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
          <div className="space-y-24 md:space-y-36">
            
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
            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1E3261] mb-2 block">
                  Our Mission
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-serif text-slate-900 leading-tight">
                  Engineering high-volume, premium paper stationery for global brands.
                </h3>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  We combine manufacturing excellence with seamless logistics and uncompromising quality standards to deliver container loads of perfection.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mt-4">
                  By utilizing automated roll-to-book converting lines, we minimize mechanical tolerances and ensure that every item meets institutional and retail specifications consistently.
                </p>
              </ScrollReveal>
            </div>

            {/* Our Vision */}
            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1E3261] mb-2 block">
                  Our Vision
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-serif text-slate-900 leading-tight">
                  Establishing India as the premier hub for export-ready manufacturing.
                </h3>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                  We are redefining the future of bulk stationery sourcing through raw material stability, rapid automation, and unbroken supply chains.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mt-4">
                  Our goal is to serve as the default partner for global distributors, wholesalers, and retail chains seeking an alternative manufacturing arm in South Asia.
                </p>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}