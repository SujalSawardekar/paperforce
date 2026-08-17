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
    image: "/images/capabilities/factory-machinery.png",
    link: "/Certificate/ISO 9001 2015 paperforce india llp_.pdf"
  },
  { 
    title: "FIEO Registration", 
    desc: "Registered with the Federation of Indian Export Organisations.", 
    image: "/images/capabilities/warehouse-pallets.png",
    link: "/Certificate/FIEO Registration (valid Till 31M27)_unlocked.pdf"
  },
  { 
    title: "IEC Registration", 
    desc: "Authorized Importer-Exporter Code for seamless international trade.", 
    image: "/images/capabilities/quality-inspection.png",
    link: "/Certificate/IEC _ ABJFP7297A.pdf"
  },
  { 
    title: "Udyam Registration", 
    desc: "Officially registered MSME with the Government of India.", 
    image: "/images/capabilities/shipping-containers.png",
    link: "/Certificate/Print _ Udyam Registration Certificate-1.pdf"
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
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="group rounded-3xl bg-white p-8 transition-all duration-300 border border-slate-100 hover:shadow-lg hover:border-slate-200 flex flex-col h-full items-center text-center justify-center cursor-pointer">
                  <h3 className="text-xl font-bold font-serif text-[#0b1c3f] mb-3">{cert.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cert.desc}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}