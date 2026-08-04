"use client"
import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ShieldCheck, Target, Leaf, CheckCircle2 } from "lucide-react"

const workflow = [
  { step: "01", title: "Raw Material Audit", desc: "Rigorous moisture and GSM checks before production begins." },
  { step: "02", title: "In-line Inspection", desc: "Continuous monitoring of binding strength and ruling alignment." },
  { step: "03", title: "AQL 2.5 Final Audit", desc: "Strict statistical sampling prior to palletization and container loading." }
];

export function AboutCompliance() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Inspection Image & Badges */}
          <div className="relative">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
                <Image 
                  src="/images/about/about_mfg_quality.png"
                  alt="Quality inspection process"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Floating Badges */}
            <ScrollReveal direction="up" delay={0.3} className="absolute top-12 -left-6 lg:-left-12">
              <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">AQL 2.5</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Certified</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="down" delay={0.4} className="absolute bottom-12 -right-6 lg:-right-12">
              <div className="bg-[#1E3261]/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">FSC Standard</div>
                  <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Ethical Sourcing</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Editorial Content & Animated Progress */}
          <div className="space-y-12">
            
            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest mb-2">
                  <Target size={14} />
                  Uncompromising Compliance
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                  Zero Defect <br />
                  <span className="text-[#1E3261]">Quality Control</span>
                </h3>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  We maintain rigorous manufacturing standards to ensure every batch of our paper stationery meets global compliance requirements, drastically reducing rejection rates for importers.
                </p>
              </ScrollReveal>
            </div>

            {/* Workflow List */}
            <div className="space-y-8 relative">
              {workflow.map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.3 + (idx * 0.1)}>
                  <div className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 font-bold group-hover:bg-[#1E3261] group-hover:text-white group-hover:border-[#1E3261] transition-colors duration-300 shadow-sm z-10">
                        {item.step}
                      </div>
                      {idx !== workflow.length - 1 && (
                        <div className="w-0.5 h-16 bg-slate-100 group-hover:bg-blue-100 transition-colors duration-300 mt-2" />
                      )}
                    </div>
                    <div className="pt-2 pb-6">
                      <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        {item.title}
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h4>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}