"use client";
import React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Users, Anchor, MapPin, Truck } from "lucide-react";

export function AboutInfrastructure() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50" />
      <Container className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        <SectionHeader 
          eyebrow="Infrastructure Highlights"
          title="Engineered for Volume"
          description=""
        />

        {/* Bento Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Wide (The Palghar Advantage) */}
          <ScrollReveal direction="up" delay={0.1} className="md:col-span-8 relative group overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1E3261] to-[#0f1b38] text-white shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-400/30 transition-colors duration-700" />
            <div className="absolute inset-0 bg-[url('/images/about/about_mfg_warehouse.png')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-700" />
            
            <div className="p-10 md:p-12 h-full flex flex-col justify-between relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                <MapPin className="text-blue-200 w-8 h-8" />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl font-serif font-bold text-white mb-4">The Palghar Advantage</h3>
                <p className="text-base text-blue-100/80 leading-relaxed font-medium">
                  Situated in India's premier manufacturing cluster, our facility benefits from specialized talent, raw material proximity, and direct arterial roads to the Nhava Sheva (JNPT) port.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Square (Skilled Workforce) */}
          <ScrollReveal direction="up" delay={0.2} className="md:col-span-4 relative group overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-50 rounded-full blur-[60px] translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-100 transition-colors duration-500" />
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-500">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Skilled Workforce</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Highly trained operators specializing in automated ruling and precision binding processes.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Square (Export Capacity) */}
          <ScrollReveal direction="up" delay={0.3} className="md:col-span-4 relative group overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-100 transition-colors duration-500" />
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-500">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Export Capacity</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Optimized for B2B bulk orders with rapid turnaround times for full container loads.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Wide (Unbroken Supply Chain) */}
          <ScrollReveal direction="up" delay={0.4} className="md:col-span-8 relative group overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-200 shadow-inner hover:shadow-md transition-all duration-500">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-0" />
            <div className="p-10 md:p-12 h-full flex flex-col justify-between relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Anchor className="text-[#1E3261] w-8 h-8" />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Unbroken Supply Chain</h3>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  Because of our logistics roots, our supply chain is insulated from severe market fluctuations, allowing us to source raw pulp and paper reels reliably and efficiently.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  );
}

