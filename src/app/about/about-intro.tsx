"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AboutIntro() {
  return (
    <section className="py-20 md:py-32 bg-white ">
      <Container className="max-w-4xl mx-auto text-center space-y-8">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0b1c3f]  leading-relaxed">
            "We didn't just want to make notebooks. We wanted to build a dependable manufacturing platform that global brands could trust unconditionally."
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-lg text-slate-600 ">
            Founded with a vision to streamline bulk paper stationery sourcing, Paperforce India combines decades of paper trade heritage with modern, high-speed automated manufacturing.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  )
}