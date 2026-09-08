"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { ChevronRight, Truck, Factory, Package, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "1988",
    title: "Trans Trade — Logistics",
    desc: "The family's roots in the paper trade began with Trans Trade, a logistics business built from the ground up, forming lasting relationships with paper mills and stationers across India.",
    icon: <Truck size={20} className="text-[#1E3261]" />
  },
  {
    year: "2008",
    title: "Trans Industries — Manufacturing",
    desc: "The family expanded into manufacturing with Trans Industries, producing copper wire and building hands-on production and factory-floor experience.",
    icon: <Factory size={20} className="text-[#1E3261]" />
  },
  {
    year: "2012",
    title: "Western India Packagings — Packaging Manufacturing",
    desc: "Western India Packagings was established, manufacturing packaging solutions for companies across India and deepening the family's roots in industrial production.",
    icon: <Package size={20} className="text-[#1E3261]" />
  },
  {
    year: "2014",
    title: "Entry into Global Export Markets",
    desc: "The family's manufacturing experience extended into exports, supplying paper stationery to buyers across the Middle East, Europe, Africa, and beyond.",
    icon: <Globe size={20} className="text-[#1E3261]" />
  },
  {
    year: "2026",
    title: "Paperforce India LLP",
    desc: "Paperforce was established with its own manufacturing facility — a 30,000 sq. ft. ISO 9001:2015 certified factory in Palghar, Maharashtra — exporting to 30+ countries worldwide.",
    icon: <Building2 size={20} className="text-[#1E3261]" />
  }
];

export function CorporateProfileSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });

  // Map scroll progress (0→1) to scaleY (0→1) for the fill line
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-32 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title, CTA & Stats */}
          <div className="lg:col-span-5 flex flex-col pt-2 lg:sticky lg:top-28">
            <SectionHeader 
              eyebrow="About Us"
              title={<>Paper. Precision.<br className="hidden sm:inline" /><span className="text-[#0b1c3f]"> Scale</span></>}
              description="At Paperforce India LLP, we manufacture and export paper stationery straight from our 30,000 sq. ft. ISO 9001:2015 certified facility in Palghar, Maharashtra. We make notebooks in pretty much every format buyers ask for — exercise books, spiral bound, double wire bound, hard cover Gally bound, centre-stitched, and glue bound. Backed by manufacturing and export experience in paper stationery dating back to 2014, our converting lines are high-speed and fully automated — but what really drives us is that hands-on production experience, paired with the kind of scale that global orders actually demand."
            />
            
            <ScrollReveal direction="up" delay={0.1} className="mt-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="/about" className="inline-block">
                  <Button variant="default" size="lg" className="font-bold group">
                    Read Our Story
                    <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 pt-10 border-t border-slate-100 mt-10">
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-[#0b1c3f] font-serif">10+</span>
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-2">Years Exp.</span>
                </div>
                <div className="w-[1px] bg-slate-200 hidden sm:block" />
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-[#0b1c3f] font-serif">1988</span>
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-2">Trade Legacy</span>
                </div>
                <div className="w-[1px] bg-slate-200 hidden sm:block" />
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-[#0b1c3f] font-serif">100k+</span>
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-2">Daily Output</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-7 relative lg:pl-6" ref={timelineRef}>
            
            {/* Header: Our Heritage */}
            <div className="mb-10 pl-2 lg:pl-0">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0b1c3f] tracking-tight mb-2">
                Our Heritage
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                From paper trade logistics to global stationery manufacturing.
              </p>
            </div>

            {/* Timeline wrapper */}
            <div className="relative">
              {/* Background track (always visible, light grey) */}
              <div className="absolute left-7 top-6 bottom-10 w-0.5 bg-slate-200 z-0" />

              {/* Animated fill line — grows from top as you scroll */}
              <div className="absolute left-7 top-6 bottom-10 w-0.5 z-0 overflow-hidden">
                <motion.div
                  className="w-full bg-[#0b1c3f] origin-top"
                  style={{
                    scaleY: lineScaleY,
                    height: "100%",
                    willChange: "transform",
                  }}
                />
              </div>
              
              <div className="space-y-6 relative z-10">
                {milestones.map((item, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                    <div className="flex items-start gap-4 sm:gap-6 group">
                      
                      {/* Year Bubble Node */}
                      <div className="shrink-0 relative flex items-center justify-center pt-6">
                        <div className="w-14 h-14 rounded-full bg-white border-4 border-white flex items-center justify-center z-10 shadow-sm shadow-slate-200 ring-1 ring-slate-200/80 transition-transform group-hover:scale-105">
                          <span className="text-xs font-bold text-[#0b1c3f] font-mono tracking-tight">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
                        <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm border border-slate-100">
                          {item.icon}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-[#0b1c3f] font-serif mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
