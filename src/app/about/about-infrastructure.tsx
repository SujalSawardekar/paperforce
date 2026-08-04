"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Users, Ship, Anchor, MapPin } from "lucide-react";

export function AboutInfrastructure() {
  return (
    <section className="py-24 md:py-32 bg-[#f7f8fc] dark:bg-slate-900 border-y border-border/40 relative overflow-hidden">
      <Container>
        
        <ScrollReveal direction="up" className="max-w-2xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-4 border-l-2 border-primary pl-4">
            Infrastructure Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Engineered for Volume.
          </h2>
        </ScrollReveal>

        {/* Bento Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* Card 1: Wide */}
          <ScrollReveal direction="up" delay={0.1} className="md:col-span-2 relative group overflow-hidden rounded-[32px] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">The Palghar Advantage</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  Situated in India's premier notebook manufacturing cluster, our facility benefits from specialized talent, raw material proximity, and direct arterial roads to the Nhava Sheva (JNPT) port.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Square */}
          <ScrollReveal direction="up" delay={0.2} className="md:col-span-1 relative group overflow-hidden rounded-[32px] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform duration-500">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Skilled Workforce</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Highly trained operators specializing in automated ruling and precision binding processes.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Square */}
          <ScrollReveal direction="up" delay={0.3} className="md:col-span-1 relative group overflow-hidden rounded-[32px] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform duration-500">
                <Ship className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Export Capacity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Optimized for B2B bulk orders with rapid turnaround times for full container loads.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Wide */}
          <ScrollReveal direction="up" delay={0.4} className="md:col-span-2 relative group overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-[url('/products/WhatsApp Image 2026-07-31 at 18.41.15.jpeg')] opacity-20 bg-cover bg-center group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <Anchor className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">Unbroken Supply Chain</h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                  Because of our logistics roots, our supply chain is insulated from severe market fluctuations, allowing us to source raw pulp and paper reels reliably.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  );
}

