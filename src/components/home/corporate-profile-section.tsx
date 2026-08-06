"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { ChevronRight, Clock, ShieldCheck, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    num: "01",
    title: "Paper Trade Heritage",
    desc: "Backed by three generations of family experience in the paper trade, offering unmatched raw pulp sourcing and delivery consistency.",
    icon: <Clock size={20} className="text-slate-400" />
  },
  {
    num: "02",
    title: "Zero Compromise on Quality",
    desc: "Every product is meticulously inspected to international AQL 2.5 quality standards before dispatch, ensuring perfection in ruling, binding, and finishing.",
    icon: <ShieldCheck size={20} className="text-slate-400" />
  },
  {
    num: "03",
    title: "JNPT Logistics Gateway",
    desc: "Efficient global freight coordination through Nhava Sheva (JNPT), India's leading modern container port cluster near Mumbai.",
    icon: <Anchor size={20} className="text-slate-400" />
  }
];

export function CorporateProfileSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });

  // Map scroll progress (0→1) to scaleY (0→1) for the fill line
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-32 bg-white  overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title, CTA & Stats */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            <SectionHeader 
              eyebrow="Corporate Profile"
              title={<>Supplying High-Volume<br className="hidden sm:inline" /><span className="text-[#0b1c3f] "> Stationery Globally</span></>}
              description="At Paperforce India LLP, we manufacture and export paper stationery from our ISO 9001:2015 certified facility in Palghar, Maharashtra. Powered by high-speed automated converting lines, we combine hands-on production experience with the sheer scale that global volume demands."
            />
            
            <ScrollReveal direction="up" delay={0.1} className="mt-8">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="/about" className="inline-block">
                  <Button variant="default" size="lg" className="font-bold group">
                    Read Our Story
                    <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 pt-10 border-t border-slate-100  mt-10">
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-[#0b1c3f] font-serif">10+</span>
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-2">Years Exp.</span>
                </div>
                <div className="w-[1px] bg-slate-200  hidden sm:block" />
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-[#0b1c3f] font-serif">1988</span>
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-2">Trade Legacy</span>
                </div>
                <div className="w-[1px] bg-slate-200  hidden sm:block" />
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-[#0b1c3f] font-serif">100k+</span>
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500 mt-2">Daily Output</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="lg:col-span-7 relative lg:pl-12" ref={timelineRef}>

            {/* Background track (always visible, light grey) */}
            <div className="absolute left-6 lg:left-[4.5rem] top-8 bottom-12 w-0.5 bg-slate-200  z-0" />

            {/* Animated fill line — grows from top as you scroll */}
            <div className="absolute left-6 lg:left-[4.5rem] top-8 bottom-12 w-0.5 z-0 overflow-hidden">
              <motion.div
                className="w-full bg-[#0b1c3f]  origin-top"
                style={{
                  scaleY: lineScaleY,
                  height: "100%",
                  willChange: "transform",
                }}
              />
            </div>
            
            <div className="space-y-6 relative z-10">
              {milestones.map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.15}>
                  <div className="flex items-start gap-6 lg:gap-8 group">
                    
                    {/* Number Node */}
                    <div className="shrink-0 relative flex items-center justify-center pt-8">
                      <div className="w-12 h-12 rounded-full bg-white  border-4 border-white  flex items-center justify-center z-10 shadow-sm shadow-slate-200  ring-1 ring-slate-200  transition-transform group-hover:scale-110">
                        <span className="text-[10px] font-bold text-slate-500 font-serif">
                          {item.num}
                        </span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-slate-50  rounded-3xl p-6 sm:p-8 border border-slate-100  transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-full bg-white  flex items-center justify-center mb-5 shadow-sm border border-slate-100 ">
                        {item.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900  font-serif mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600  leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

