"use client"
import * as React from "react"
import Image from "next/image"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AboutMissionVision() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <Container className="max-w-7xl mx-auto space-y-24">
        
        {/* Mission: Content First, Image Second */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-12">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-sm font-bold uppercase tracking-widest text-[#1E3261] mb-4 block">Our Mission</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-slate-900 leading-[1.1]">
                Engineering high-volume, premium paper stationery for global brands.
              </h3>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                We combine manufacturing excellence with seamless logistics and uncompromising AQL standards to deliver container loads of perfection.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about/about_mfg_workers.png"
                  alt="Our Mission - Teamwork"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Vision: Image First, Content Second */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about/about_mfg_overview.png"
                  alt="Our Vision - Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 pl-0 lg:pl-12">
            <ScrollReveal direction="up" delay={0.2}>
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4 block">Our Vision</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-slate-900 leading-[1.1]">
                Establishing India as the premier hub for export-ready manufacturing.
              </h3>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                We are redefining the future of bulk stationery sourcing through sustainability, rapid automation, and unbroken supply chains.
              </p>
            </ScrollReveal>
          </div>
        </div>

      </Container>
    </section>
  )
}