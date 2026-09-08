"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Globe2, Users, ShieldCheck, Factory } from "lucide-react"

const stats = [
  {
    icon: <Globe2 className="w-6 h-6 text-blue-600" />,
    value: "30+",
    label: "Countries",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    value: "10‌0+",
    label: "Skilled Workforce",
    bgColor: "bg-indigo-50"
  },
  {
    icon: <Factory className="w-6 h-6 text-emerald-600" />,
    value: "250+",
    label: "FCLs Annually",
    bgColor: "bg-emerald-50"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
    value: <>100<span className="font-sans font-normal">%</span></>,
    label: "Export Oriented",
    bgColor: "bg-rose-50"
  }
];

export function AboutIntro() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <Container className="max-w-6xl mx-auto space-y-10 md:space-y-12 relative z-10">

        {/* Top Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="max-w-2xl space-y-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="inline-block text-base sm:text-xl md:text-xl font-bold text-[#0b1c3f] bg-blue-50 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-blue-100 shadow-xs">
                About Paperforce India LLP
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                Committed to Excellence
              </h2>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                Paperforce brings together more than three decades of trade excellence, nearly two decades of manufacturing excellence, and — more importantly — ethical business practices carried through three generations. That heritage now runs through a 30,000 sq. ft., ISO 9001:2015-certified facility, where high-speed automated converting lines are backed by machining skills built the old way — on the floor, batch after batch, long before automation entered the picture. It&apos;s this combination of inherited trade instinct and modern manufacturing discipline that lets Paperforce deliver at the scale and consistency global buyers expect, without losing the accountability a family business built its name on.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Floating Stats Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={0.3 + (idx * 0.1)}
            >
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${stat.bgColor}`}>
                  {stat.icon}
                </div>
                <h4 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{stat.value}</h4>
                <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </Container>
    </section>
  )
}