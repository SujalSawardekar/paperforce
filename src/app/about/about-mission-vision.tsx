"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Target, Lightbulb } from "lucide-react"

export function AboutMissionVision() {
  return (
    <section className="py-20 md:py-32 bg-white ">
      <Container className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <ScrollReveal direction="up" delay={0.1}>
            <div className="p-8 rounded-3xl bg-slate-50  border border-slate-100  h-full">
              <div className="w-12 h-12 rounded-xl bg-white  flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-6 h-6 text-[#0b1c3f] " />
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-900  mb-4">Our Mission</h3>
              <p className="text-slate-600  leading-relaxed">
                To engineer high-volume, premium paper stationery products for global brands, combining manufacturing excellence with seamless logistics and uncompromising AQL standards.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="p-8 rounded-3xl bg-slate-50  border border-slate-100  h-full">
              <div className="w-12 h-12 rounded-xl bg-white  flex items-center justify-center mb-6 shadow-sm">
                <Lightbulb className="w-6 h-6 text-[#0b1c3f] " />
              </div>
              <h3 className="text-2xl font-bold font-serif text-slate-900  mb-4">Our Vision</h3>
              <p className="text-slate-600  leading-relaxed">
                To redefine the future of bulk stationery sourcing by establishing India as the premier hub for sustainable, innovative, and export-ready paper manufacturing.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </section>
  )
}