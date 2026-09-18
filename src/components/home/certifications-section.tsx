"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { CertificateModal } from "@/components/certifications/certificate-modal"

const certs = [
  { 
    title: "ISO 9001:2015", 
    subtitle: "Certificate of Registration • Paperforce India LLP",
    desc: "Certified Quality Management Systems ensuring consistent manufacturing standards.", 
    imageUrl: "/Certificate/iso_9001_2015.png"
  },
  { 
    title: "FIEO Registration", 
    subtitle: "Federation of Indian Export Organisations",
    desc: "Registered with the Federation of Indian Export Organisations.", 
    imageUrl: "/Certificate/fieo_registration.png"
  },
  { 
    title: "IEC Registration", 
    subtitle: "Directorate General of Foreign Trade",
    desc: "Authorized Importer-Exporter Code for seamless international trade.", 
    imageUrl: "/Certificate/iec_registration.png"
  },
  { 
    title: "Udyam Registration", 
    subtitle: "Ministry of Micro, Small and Medium Enterprises",
    desc: "Officially registered MSME with the Government of India.", 
    imageUrl: "/Certificate/udyam_registration.png"
  }
]

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = React.useState<typeof certs[0] | null>(null);

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
              <button 
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="w-full text-left h-full group rounded-3xl bg-white p-8 transition-all duration-300 border border-slate-100 hover:shadow-lg hover:border-slate-200 flex flex-col items-center text-center justify-center cursor-pointer active:scale-[0.98]"
              >
                <h3 className="text-xl font-bold font-serif text-[#0b1c3f] mb-3 group-hover:text-[#1E3261] transition-colors">{cert.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cert.desc}</p>
                <span className="mt-4 text-xs font-bold text-[#1E3261] opacity-0 group-hover:opacity-100 transition-opacity">
                  Inspect Certificate &rarr;
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {selectedCert && (
        <CertificateModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          subtitle={selectedCert.subtitle}
          imageUrl={selectedCert.imageUrl}
        />
      )}
    </section>
  )
}