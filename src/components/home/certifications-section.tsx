"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ShieldCheck, Award, FileCheck, CheckCircle2 } from "lucide-react"

const certs = [
  { title: "ISO 9001:2015", desc: "Certified Quality Management Systems ensuring consistent manufacturing standards.", icon: <Award className="w-8 h-8 text-blue-500" /> },
  { title: "FSC Certified", desc: "Commitment to responsible forestry and sustainable paper sourcing.", icon: <FileCheck className="w-8 h-8 text-green-500" /> },
  { title: "AQL 2.5 Standard", desc: "Rigorous international Acceptable Quality Limit checks prior to shipping.", icon: <ShieldCheck className="w-8 h-8 text-[#0b1c3f] dark:text-blue-400" /> },
  { title: "Export Compliant", desc: "Adherence to global customs, packaging, and palletization regulations.", icon: <CheckCircle2 className="w-8 h-8 text-indigo-500" /> }
]

export function CertificationsSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/10 border-t border-slate-200 dark:border-slate-800">
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
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-3">{cert.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cert.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}