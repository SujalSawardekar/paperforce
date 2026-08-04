"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "1988",
    title: "The Logistics Foundation",
    description: "Started as a small family operation managing complex raw material sourcing and paper logistics across India."
  },
  {
    year: "2014",
    title: "Manufacturing Pivot",
    description: "Invested heavily in our Palghar facility, transitioning from supply chain experts to dedicated notebook manufacturers."
  },
  {
    year: "2019",
    title: "Global Export Expansion",
    description: "Achieved international certifications and began shipping container loads to Africa, the Middle East, and beyond."
  },
  {
    year: "Today",
    title: "A Benchmark in B2B Quality",
    description: "Recognized as a reliable private-label partner with a 100% FOB consistency rate and expanding production capacity."
  }
];

export function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 md:py-32 bg-white  relative overflow-hidden" ref={containerRef}>
      <Container className="max-w-4xl mx-auto">
        
        <ScrollReveal direction="up" className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">A Legacy of Growth</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">From managing complex paper freight to operating a state-of-the-art notebook facility.</p>
        </ScrollReveal>

        <div className="relative">
          {/* Background subtle line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 " />
          
          {/* Animated active line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-1 bg-primary rounded-full origin-top"
            style={{ height: lineHeight, width: "3px" }}
          />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={cn("relative flex items-center", isEven ? "md:justify-start" : "md:justify-end")}>
                  
                  {/* Glowing Dot on Timeline */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10" />

                  {/* Content Card */}
                  <ScrollReveal 
                    direction={isEven ? "right" : "left"} 
                    className={cn(
                      "w-full pl-16 md:pl-0 md:w-[45%]",
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    )}
                  >
                    <div className="bg-slate-50  backdrop-blur-sm border border-slate-100  p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl font-serif font-bold text-slate-300  mb-4">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </ScrollReveal>

                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}

