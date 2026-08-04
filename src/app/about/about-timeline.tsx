"use client"
import * as React from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Container } from "@/components/common/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Calendar, TrendingUp, Factory, Globe } from "lucide-react"

const timeline = [
  {
    year: "1988",
    title: "Origins in Paper Trade",
    description: "The founding team established a strong foothold in the domestic paper trade, building crucial relationships with paper mills across India.",
    icon: <Calendar className="w-5 h-5" />,
    color: "bg-blue-600"
  },
  {
    year: "2010",
    title: "Manufacturing Vertical Begins",
    description: "Transitioning from trade to production, we launched our first manual converting units to meet local wholesale demand.",
    icon: <Factory className="w-5 h-5" />,
    color: "bg-[#1E3261]"
  },
  {
    year: "2018",
    title: "High-Speed Automation",
    description: "Installed state-of-the-art automated binding and cutting machinery, multiplying capacity to handle container-load export orders.",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "bg-emerald-600"
  },
  {
    year: "Today",
    title: "Global Export Partner",
    description: "Shipping premium paper stationery across 15+ countries, serving international retail chains, OEMs, and major global distributors.",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-indigo-600"
  }
];

export function AboutTimeline() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 bg-white relative">
      <Container className="max-w-4xl mx-auto space-y-16">
        
        <SectionHeader 
          eyebrow="Heritage Timeline"
          title="Decades of Evolution"
          description="From domestic paper trade to a global manufacturing powerhouse."
        />

        <div ref={containerRef} className="relative pt-10">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-400 to-[#1E3261] origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center justify-between md:justify-normal group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Center Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 transition-colors duration-500 group-hover:border-blue-100 shadow-sm">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${item.color} shadow-md`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <ScrollReveal direction={isEven ? "left" : "right"} delay={0.2}>
                      <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-lg transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/30">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-900 mb-4 shadow-sm">
                          {item.year}
                        </span>
                        <h4 className="text-2xl font-bold font-serif text-slate-900 mb-3">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>
                  
                  {/* Empty Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                  
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  )
}
