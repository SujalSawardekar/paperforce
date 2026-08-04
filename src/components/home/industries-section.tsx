"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { GraduationCap, Briefcase, ShoppingBag, Building2 } from "lucide-react"

const industries = [
  { title: "Educational Institutions", desc: "Bulk composition books, graph books, and customized school stationery.", icon: <GraduationCap className="w-6 h-6" /> },
  { title: "Corporate Offices", desc: "Premium executive diaries, planners, and branded leatherette notebooks.", icon: <Briefcase className="w-6 h-6" /> },
  { title: "Retail & E-commerce", desc: "Trendy, aesthetic notebooks designed for direct-to-consumer sales.", icon: <ShoppingBag className="w-6 h-6" /> },
  { title: "Wholesale Distributors", desc: "Standardized product lines manufactured at scale for regional distribution.", icon: <Building2 className="w-6 h-6" /> }
]

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background">
      <Container>
        <SectionHeader 
          eyebrow="Industries We Serve" 
          title="Stationery for Every Sector" 
          description="From wholesale distributors to educational institutions, we manufacture custom and standard notebooks tailored to diverse market requirements."
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {industries.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:bg-[#0b1c3f] dark:hover:bg-slate-800 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 text-[#0b1c3f] dark:text-blue-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}