"use client"
import * as React from "react"
import Image from "next/image"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeader } from "@/components/ui/section-header"

const gallery = [
  {
    title: "Production Floor",
    span: "md:col-span-8 md:row-span-2",
    image: "/images/about/gallery_production_floor.jpg"
  },
  {
    title: "Skilled Workforce",
    span: "md:col-span-4 md:row-span-1",
    image: "/images/about/gallery_skilled_workforce.jpg"
  },
  {
    title: "Automated Packaging",
    span: "md:col-span-4 md:row-span-1",
    image: "/images/about/gallery_automated_packaging.jpg"
  },
  {
    title: "Quality Inspection",
    span: "md:col-span-4 md:row-span-2",
    image: "/images/about/about_mfg_quality.png"
  },
  {
    title: "Logistics Warehouse",
    span: "md:col-span-8 md:row-span-1",
    image: "/images/about/gallery_logistics_warehouse.jpg"
  },
  {
    title: "Export Terminal",
    span: "md:col-span-8 md:row-span-1",
    image: "/images/about/gallery_export_terminal.jpg"
  }
];

export function ManufacturingGallery() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <Container className="max-w-7xl mx-auto space-y-16">
        
        <SectionHeader 
          eyebrow="Inside The Facility"
          title="Where Scale Meets Precision"
          description="Take a look inside our Palghar manufacturing hub, where fully automated converting lines run 24/7."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[250px] gap-4 md:gap-6">
          {gallery.map((item, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="up" 
              delay={0.1 + (idx * 0.1)} 
              className={`relative rounded-[2rem] overflow-hidden group cursor-pointer ${item.span}`}
            >
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Glass Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="text-white font-bold tracking-wide">{item.title}</h4>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </Container>
    </section>
  )
}
