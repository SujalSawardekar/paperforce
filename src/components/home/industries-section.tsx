"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Image from "next/image"

const industries = [
  { 
    title: "Educational Procurement", 
    desc: "Supplying bulk exercise books and spiral notebooks to universities, school districts, and institutional suppliers globally.", 
    image: "/images/capabilities/factory-machinery.png" 
  },
  { 
    title: "Corporate & B2B", 
    desc: "Manufacturing premium hardcover and double-wire notebooks for corporate gifting, office supply chains, and business retailers.", 
    image: "/images/capabilities/quality-inspection.png" 
  },
  { 
    title: "OEM Private Label", 
    desc: "Complete white-label production for international stationery brands. Custom watermarks, foil stamping, and bespoke sizing.", 
    image: "/images/capabilities/warehouse-pallets.png" 
  },
  { 
    title: "Government Tenders", 
    desc: "Meeting strict compliance, GSM, and pricing requirements for large-scale government educational and administrative tenders.", 
    image: "/images/capabilities/shipping-containers.png" 
  }
]

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <SectionHeader 
          eyebrow="Industries We Serve" 
          title="Stationery for Every Sector" 
          description="Meeting the specific structural and design requirements of industries across the globe."
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {industries.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="group rounded-3xl bg-white overflow-hidden transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden rounded-t-3xl bg-slate-100">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                  />
                  {/* Fade out bottom of image to blend with card body */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-6 pt-2 bg-white">
                  <h3 className="text-lg font-bold font-serif text-[#0b1c3f] mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}