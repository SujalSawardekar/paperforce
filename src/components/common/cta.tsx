"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b1c3f] ">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none" />
      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
            Ready to Optimize Your <span className="text-blue-400">Paper Supply Chain?</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner with Paperforce India for unparalleled manufacturing scale, strict AQL 2.5 quality assurance, and seamless global export logistics.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3} className="pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#0b1c3f] hover:bg-slate-100 px-8 py-6 text-base font-bold w-full sm:w-auto">
                Request a B2B Quote
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-base font-bold w-full sm:w-auto">
                Explore Products <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}