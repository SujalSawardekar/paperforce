"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function AboutStory() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/10 border-y border-slate-200 dark:border-slate-800">
      <Container className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-serif text-slate-900 dark:text-white">Our Heritage</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Paperforce India's roots run deep in the paper trade. Our founding team leverages three generations of family experience in raw material sourcing and logistics.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We realized that global importers struggled with consistent quality and scale from traditional manufacturers. We set out to change that by building an entirely export-ready infrastructure from day one.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2} className="relative h-[400px] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800">
            {/* We'll just leave this as a dark/light placeholder box for the story image if no image is present */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b1c3f]/10 to-blue-500/10 dark:from-[#0b1c3f]/40 dark:to-blue-900/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-400 font-serif font-bold tracking-widest uppercase">Paperforce Heritage</span>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}