"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Uncompromising Scale",
    desc: "Built to handle high-volume export orders. Our factory floors operate seamlessly to fulfill container-load shipments without bottlenecking."
  },
  {
    num: "02",
    title: "Precision Engineering",
    desc: "Automated converting lines ensure zero tolerance for ruling misalignment, binding failure, or moisture damage across every batch."
  },
  {
    num: "03",
    title: "Global Supply Chain",
    desc: "Strategically positioned near India's largest container port, we ensure rapid, cost-effective maritime transit to over five continents."
  }
];

export function WhyChooseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Strict 1:1 scroll mapping (no spring) to ensure animation finishes EXACTLY at the end of the scroll container

  // On mobile (<1024px), we scroll to -66.66% so the 3rd card is visible.
  // On desktop (>=1024px), we scroll to -33.33% to center the 2nd card, keeping ALL 3 cards centered as a group on screen.
  const trackX = useTransform(scrollYProgress, (progress) => {
    if (typeof window === "undefined") return "0%";
    const endPercent = window.innerWidth < 1024 ? -66.6666 : -33.3333;
    return `${progress * endPercent}%`;
  });

  return (
    <section ref={containerRef} className="h-[150vh] relative bg-slate-50  border-y border-border/30">
      <div className="sticky top-0 pt-24 md:pt-32 overflow-hidden flex flex-col justify-start pb-10 sm:pb-20 h-screen">
        
        {/* Clean, Elegant Typography Header */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 mb-12 shrink-0 max-w-5xl mx-auto">
          <div className="relative inline-block mt-4 space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-bold tracking-tight text-[#1E3261] font-serif">
              Why Global Importers <br className="hidden md:block" />
              Choose Us
            </h2>
            <p className="text-lg md:text-xl text-slate-600  max-w-2xl mx-auto leading-relaxed">
              We combine massive production scale with uncompromising quality control to deliver premium stationery products worldwide.
            </p>
            
            {/* Floating Pills - Repositioned to not crowd the text */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1, y: [0, -15, 0] }} 
              transition={{ 
                opacity: { duration: 0.7, delay: 0.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-8 md:top-12 lg:top-16 -left-8 md:-left-16 lg:-left-24 w-[80px] h-[35px] md:w-[150px] md:h-[65px] rounded-[100px] overflow-hidden shadow-2xl border-4 border-white  hidden sm:block z-20"
            >
              <img src="/images/factory_pill.png" alt="Factory" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1, y: [0, -20, 0] }} 
              transition={{ 
                opacity: { duration: 0.7, delay: 0.4 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-16 md:bottom-24 lg:bottom-28 -right-4 md:-right-12 lg:-right-20 w-[90px] h-[40px] md:w-[180px] md:h-[70px] rounded-[100px] overflow-hidden shadow-2xl border-4 border-white  hidden sm:block z-20"
            >
              <img src="/images/shipping_pill.png" alt="Shipping" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Horizontal Scroll Gallery Container */}
        <div 
          className="relative flex-1 w-full flex items-center overflow-visible 
                     [--card-w:85vw] md:[--card-w:45vw] lg:[--card-w:400px] 
                     [--gap:1.5rem] md:[--gap:2rem] lg:[--gap:2.5rem] 
                     pl-[calc(50vw-var(--card-w)/2)]"
        >
          <motion.div 
            style={{ x: trackX, willChange: "transform" }} 
            className="flex flex-nowrap w-max pr-[var(--gap)] gap-[var(--gap)]"
          >
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="w-[var(--card-w)] shrink-0 bg-white/70  backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-slate-200/60  shadow-[0_8px_40px_rgba(11,28,63,0.06)] relative overflow-hidden group transition-all hover:shadow-[0_20px_60px_rgba(11,28,63,0.12)] min-h-[35vh] flex flex-col justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-7xl lg:text-[100px] leading-none font-light text-slate-200  font-serif mb-6 transition-colors duration-500 group-hover:text-amber-500/20 absolute -top-2 right-4 pointer-events-none select-none">
                  {pillar.num}
                </div>
                <h3 className="text-2xl font-bold text-slate-900  font-serif mb-4 relative z-10 pt-6">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600  leading-relaxed relative z-10">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

