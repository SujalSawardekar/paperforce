"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50 ">
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-50/50 to-transparent  pointer-events-none" />
      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="inline-flex items-center space-x-2 bg-white/80  border border-slate-200/80  px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#0b1c3f]  shadow-sm backdrop-blur-md">
            <span>Our Journey & Heritage</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-slate-900  leading-tight">
            Crafting Stationery for the <span className="text-[#0b1c3f] ">Global Market</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-base sm:text-xl text-slate-600  max-w-2xl mx-auto leading-relaxed">
            Discover the legacy, the manufacturing excellence, and the vision behind Paperforce India LLP.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  )
}
