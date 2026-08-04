"use client"
import * as React from "react"
import Image from "next/image"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const images = [
  "/images/about/about_mfg_workers.png",
  "/images/about/about_story_rolls.png",
  "/images/about/about_mfg_quality.png",
  "/images/about/about_mfg_packaging.png",
  "/images/about/about_story_binding.png",
  "/images/about/about_mfg_warehouse.png"
];

export function AboutGallery() {
  return (
    <section className="py-24 bg-slate-900">
      <Container className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 block">
              Life at Paperforce
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              A Glimpse Inside
            </h2>
            <p className="text-slate-400 text-lg">
              Every day, our dedicated team works tirelessly to produce millions of notebooks, bringing the Paperforce standard of quality to life.
            </p>
          </ScrollReveal>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 + (idx * 0.1)}>
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid">
                <Image 
                  src={src}
                  alt={`Paperforce Manufacturing Gallery ${idx + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </Container>
    </section>
  )
}
