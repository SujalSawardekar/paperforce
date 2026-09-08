"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, MapPin } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <Container className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 max-w-xl">
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-slate-900 leading-[1.15]">
                Trade Legacy <br className="hidden lg:block" />
                <span className="text-[#1E3261]">Since 1988</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We started in 1988 moving paper between mills. Today we run automated converting lines out of our factory, making the notebooks that end up on shelves in 30+ countries.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <Link href="/contact" className="inline-block">
                <Button variant="default" size="lg" className="font-bold">
                  Reach Us
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Content - Images & Floating Cards */}
          <div className="relative">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative aspect-[4/5] max-h-[500px] lg:max-h-[560px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/80 bg-white flex items-center justify-center p-8 sm:p-12">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src="/logo.png" 
                    alt="Paperforce India Logo"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Floating Badge 1 */}
            <ScrollReveal direction="up" delay={0.4} className="absolute bottom-6 -left-4 sm:bottom-8 sm:-left-8">
              <div className="bg-white/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">35+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Years Heritage</div>
                </div>
              </div>
            </ScrollReveal>
 
            {/* Floating Badge 2 */}
            <ScrollReveal direction="down" delay={0.5} className="absolute top-6 -right-4 sm:top-8 sm:-right-8">
              <a 
                href="https://maps.app.goo.gl/mKkhMrpZoQ1NRL8E9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E3261]/95 hover:bg-[#1E3261] transition-all backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-9 h-9 bg-white/10 text-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    Factory
                    <ArrowRight className="w-3 h-3 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="text-[10px] text-blue-200">100<span className="font-sans font-normal">%</span> Export Oriented</div>
                </div>
              </a>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  )
}
