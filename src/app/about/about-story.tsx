"use client"
import * as React from "react"
import Image from "next/image"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { Shield, Sparkles } from "lucide-react"

export function AboutStory() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <Container className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Overlapping Image Collage */}
          <div className="relative h-[600px] w-full hidden md:block">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl" />
            
            <ScrollReveal direction="right" delay={0.1} className="absolute top-0 left-0 w-2/3 h-[70%] z-10">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/images/about/about_story_rolls.png"
                  alt="Raw paper rolls"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="absolute bottom-0 right-0 w-[65%] h-[60%] z-20">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/images/about/about_story_binding.png"
                  alt="Automated binding machine"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Floating Glass Badge */}
            <ScrollReveal direction="left" delay={0.3} className="absolute top-[60%] -left-6 z-30">
              <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white flex items-center gap-4">
                <div className="bg-[#1E3261] text-white p-2 rounded-full">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Premium Grade</h4>
                  <p className="text-xs text-slate-500 font-semibold">100% Virgin Pulp</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Editorial Content */}
          <div className="space-y-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles size={14} />
                Our Story
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-tight mb-6">
                From Trade to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3261] to-blue-600">Manufacturing Mastery</span>
              </h3>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Paperforce India's roots run deep in the paper trade. Leveraging three generations of family experience in raw material sourcing, we recognized a critical gap in the global supply chain.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.3}>
                <div className="pl-6 border-l-2 border-blue-200">
                  <p className="text-slate-600 leading-relaxed">
                    Importers struggled with inconsistent quality and delayed timelines from traditional manufacturers. We set out to change that by building a fully automated, export-ready infrastructure from the ground up, dedicated exclusively to high-volume B2B sourcing.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}