"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { Globe2, Users, ShieldCheck, Factory } from "lucide-react"

const stats = [
  {
    icon: <Globe2 className="w-6 h-6 text-blue-600" />,
    value: "15+",
    label: "Countries Exported",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    value: "10\u200C0+",
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
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <Container className="max-w-6xl mx-auto space-y-20 relative z-10">
        
        {/* Top Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div className="max-w-2xl">
            <SectionHeader 
              eyebrow="Company Introduction" 
              title="Committed to Redefining Manufacturing" 
              description=""
              centered={false}
            />
          </div>
          <div className="lg:pb-12">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                We combine state-of-the-art machinery, skilled expertise, and a customer-centric approach to deliver innovative, sustainable, and export-ready solutions for your brand.
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