"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { ShieldCheck, Leaf, Globe } from "lucide-react"

export function AboutCompliance() {
  return (
    <section className="py-20 md:py-32 bg-slate-50  border-t border-slate-200 ">
      <Container className="max-w-6xl mx-auto">
        <SectionHeader 
          eyebrow="Uncompromising Compliance"
          title="International Standards"
          description="We maintain rigorous manufacturing standards to ensure every batch of our paper stationery meets global compliance requirements."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="p-8 rounded-3xl bg-white  border border-slate-100  text-center h-full">
              <div className="w-16 h-16 rounded-full bg-blue-50  text-[#0b1c3f]  flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900  mb-3">AQL 2.5 Certified</h3>
              <p className="text-slate-600  leading-relaxed">
                Our strict Acceptable Quality Limit checks guarantee a minimal defect rate, ensuring peace of mind for bulk importers.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="p-8 rounded-3xl bg-white  border border-slate-100  text-center h-full">
              <div className="w-16 h-16 rounded-full bg-green-50  text-green-600  flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900  mb-3">Ethical Sourcing</h3>
              <p className="text-slate-600  leading-relaxed">
                We prioritize eco-friendly raw materials and work with FSC-certified mills to support sustainable forestry worldwide.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="p-8 rounded-3xl bg-white  border border-slate-100  text-center h-full">
              <div className="w-16 h-16 rounded-full bg-purple-50  text-purple-600  flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900  mb-3">Export Ready</h3>
              <p className="text-slate-600  leading-relaxed">
                Our packaging, palletization, and logistics processes are explicitly designed to meet stringent international customs regulations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}