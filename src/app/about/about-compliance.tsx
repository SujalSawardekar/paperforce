"use client"
import * as React from "react"
import Image from "next/image"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ShieldCheck, Target, Leaf, CheckCircle2 } from "lucide-react"

const workflow = [
  { 
    step: "01", 
    title: "Inward Material Inspection", 
    desc: "Every raw material — paper, board, spiral, wiro, ink, covers, cartons, and more — is checked against fixed tolerances before it's accepted into stores. Nothing enters production until it clears this gate." 
  },
  { 
    step: "02", 
    title: "Ruling Sheet Approval", 
    desc: "Each paper roll is approved for ruling geometry, registration, and margins before a single sheet is committed to production. A fault here is caught before it can run through an entire roll." 
  },
  { 
    step: "03", 
    title: "Paper Counting & Cover Insertion Check", 
    desc: "Conducted three times a day, this verifies sheet counts and cover-to-paper matching at the exact point books are assembled — catching mismatches while they're still isolated to a small batch." 
  },
  { 
    step: "04", 
    title: "In-Process Production Check", 
    desc: "Every two hours, binding strength, alignment, and finishing are checked across every active machine on the floor — not just at the start and end of a job, but throughout it." 
  },
  { 
    step: "05", 
    title: "Final Inspection", 
    desc: "Once a job reaches 50% carton packing, a statistically sampled inspection — run to ISO 2859-1 / ANSI-ASQ Z1.4 AQL standards — confirms the job is ready for dispatch before it's cleared." 
  }
];

export function AboutCompliance() {
  return (
    <section className="pt-20 pb-44 md:pt-28 md:pb-56 lg:pt-32 lg:pb-64 bg-white relative overflow-hidden">
      <Container className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left: Inspection Image & Badges */}
          <div className="relative lg:sticky lg:top-32">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative aspect-[4/5] max-h-[480px] lg:max-h-[540px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
                <Image 
                  src="/images/about/gallery_quality_inspection.jpg"
                  alt="Quality inspection process"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Floating Badges */}
            <ScrollReveal direction="up" delay={0.3} className="absolute top-6 -left-4 lg:-left-6">
              <div className="bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">ISO 9001</div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Certified</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="down" delay={0.4} className="absolute bottom-6 -right-4 lg:-right-6">
              <div className="bg-[#1E3261]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Ethical Sourcing</div>
                  <div className="text-[10px] font-semibold text-blue-200 uppercase tracking-wider">Certified Paper</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Editorial Content & Animated Progress */}
          <div className="space-y-6 md:space-y-8">
            
            <div className="space-y-4">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1E3261] text-xs font-bold uppercase tracking-widest mb-1">
                  <ShieldCheck size={14} />
                  Quality Assurance Process
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 leading-tight">
                  Quality Assurance <br />
                  <span className="text-[#1E3261]">Process</span>
                </h3>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  Quality at Paperforce isn&apos;t a single checkpoint — it&apos;s five, running from the moment raw material arrives to the moment a container is sealed.
                </p>
              </ScrollReveal>
            </div>

            {/* Workflow List */}
            <div className="space-y-5 relative">
              {workflow.map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.2 + (idx * 0.08)}>
                  <div className="flex gap-4 sm:gap-6 group">
                    <div className="flex flex-col items-center self-stretch">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xs sm:text-sm text-slate-500 font-bold group-hover:bg-[#1E3261] group-hover:text-white group-hover:border-[#1E3261] transition-colors duration-300 shadow-sm z-10 shrink-0">
                        {item.step}
                      </div>
                      {idx !== workflow.length - 1 && (
                        <div className="w-0.5 flex-1 min-h-12 bg-slate-100 group-hover:bg-blue-100 transition-colors duration-300 my-1" />
                      )}
                    </div>
                    <div className="pt-0.5 pb-4">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                        {item.title}
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
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