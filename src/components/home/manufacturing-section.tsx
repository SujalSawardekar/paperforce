"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ManufacturingSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Immersive Background Image with Fixed Parallax effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/capabilities/factory-machinery.png" // Fallback to an existing premium image
          alt="Paperforce Manufacturing Facility"
          fill
          className="object-cover object-center scale-105" // Slight scale to avoid edge tearing
          priority
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <Container className="relative z-10 text-center space-y-6 max-w-4xl">
        <ScrollReveal direction="up">
          <span className="inline-block border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-200 mb-4">
            Manufacturing Excellence
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif leading-tight">
            Engineered for Volume.<br />
            Tested for Perfection.
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our state-of-the-art facility in Palghar, Maharashtra, houses high-speed automated converting lines, ensuring every notebook meets international AQL 2.5 standards before leaving the factory floor.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/20 border-t border-white/20 mt-8">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white font-serif">100k+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">Daily Output</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white font-serif">AQL 2.5</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">Standard</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white font-serif">ISO</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">9001:2015</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white font-serif">Zero</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">Compromise</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

