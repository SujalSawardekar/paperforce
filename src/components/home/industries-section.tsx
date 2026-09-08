"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

const industries = [
  { 
    title: "Importers/Distributors", 
    desc: "OEM and private-label production with your branding, your specs, your MOQ starting at 10,000 units per SKU.", 
    image: "/images/industries/customer_importers.jpg" 
  },
  { 
    title: "Educational establishments", 
    desc: "Bulk procurement supply for school networks and university systems, with consistent GSM and ruling across every reorder.", 
    image: "/images/industries/customer_education.jpg" 
  },
  { 
    title: "Chainstores", 
    desc: "Retail-ready private label — barcoding, custom packaging, and compliance built into every batch.", 
    image: "/images/industries/customer_chainstores.jpg" 
  },
  { 
    title: "Government Tenders", 
    desc: "Tender-grade specs met on paper, GSM, and ruling — with the documentation to back every claim.", 
    image: "/images/industries/customer_government.jpg" 
  }
];

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-slate-100">
      <Container>
        <SectionHeader 
          title="Our Customers" 
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {industries.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="group rounded-3xl bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/10 cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden rounded-t-3xl bg-slate-100">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Fade out bottom of image to blend with card body */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-6 pt-4 bg-white">
                  <h3 className="text-lg font-bold font-serif text-[#0b1c3f] mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}