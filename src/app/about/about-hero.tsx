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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <Container className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                <Link href="/" className="hover:text-[#1E3261] transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#1E3261]">About Us</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-slate-900 leading-[1.1]">
                Manufacturing <br className="hidden lg:block" />
                <span className="text-[#1E3261]">Excellence</span> Since 1988
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg text-slate-600 leading-relaxed">
                Discover the legacy, precision engineering, and expansive infrastructure behind Paperforce India. We are the trusted private label partner for global stationery brands.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <Link href="/contact" className="inline-block">
                <Button variant="default" size="lg" className="font-bold">
                  Partner With Us
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Content - Images & Floating Cards */}
          <div className="relative">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50">
                <Image 
                  src="/images/about/about_hero_factory.png" 
                  alt="Paperforce India Manufacturing Facility Exterior"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>

            {/* Floating Badge 1 */}
            <ScrollReveal direction="up" delay={0.4} className="absolute -bottom-6 -left-6 sm:bottom-12 sm:-left-12">
              <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">35+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Years Heritage</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Floating Badge 2 */}
            <ScrollReveal direction="down" delay={0.5} className="absolute -top-6 -right-6 sm:top-12 sm:-right-8">
              <div className="bg-[#1E3261]/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Palghar, India</div>
                  <div className="text-xs text-blue-200">10{"\u200C"}0<span className="font-sans">%</span> Export Oriented</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  )
}
