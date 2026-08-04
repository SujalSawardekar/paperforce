"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"

const certs = [
  { 
    title: "ISO 9001:2015", 
    desc: "Certified Quality Management Systems ensuring consistent manufacturing standards.", 
    image: "/images/capabilities/factory-machinery.png" 
  },
  { 
    title: "FSC Certified", 
    desc: "Commitment to responsible forestry and sustainable paper sourcing.", 
    image: "/images/capabilities/warehouse-pallets.png" 
  },
  { 
    title: "AQL 2.5 Standard", 
    desc: "Rigorous international Acceptable Quality Limit checks prior to shipping.", 
    image: "/images/capabilities/quality-inspection.png" 
  },
  { 
    title: "Export Compliant", 
    desc: "Adherence to global customs, packaging, and palletization regulations.", 
    image: "/images/capabilities/shipping-containers.png" 
  }
]

export function CertificationsSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200">
      <Container>
        <SectionHeader 
          eyebrow="Compliance & Quality" 
          title="Uncompromising Standards" 
          description="We maintain rigorous international certifications and quality benchmarks to ensure every notebook meets your exact specifications."
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {certs.map((cert, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="group rounded-3xl bg-white p-8 transition-all duration-300 border border-slate-100 hover:shadow-lg hover:border-slate-200 flex flex-col h-full items-center text-center justify-center">
                <h3 className="text-xl font-bold font-serif text-[#0b1c3f] mb-3">{cert.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cert.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}