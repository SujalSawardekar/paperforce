"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Settings, BarChart2, ShieldCheck, Globe2 } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    tag: "AUTOMATION",
    title: "Automated Precision Manufacturing",
    desc: "Our high-speed converting lines ensure zero tolerance for ruling misalignment, binding failure, or moisture damage across every batch.",
    bgColor: "#eef6ee",
    icon: <Settings size={20} className="text-emerald-700" />,
    image: "/images/capabilities/factory-machinery.png",
    alt: "High-speed modern automated notebook binding machinery",
  },
  {
    tag: "CAPACITY",
    title: "Export-Ready Production Capacity",
    desc: "Built specifically to handle high-volume export orders without bottlenecking. We fulfill entire container-load shipments for global distributors and OEMs.",
    bgColor: "#f1f0f9",
    icon: <BarChart2 size={20} className="text-indigo-700" />,
    image: "/images/capabilities/warehouse-pallets.png",
    alt: "Pallets of export stationery ready for container loading",
  },
  {
    tag: "QUALITY",
    title: "Multi-Stage Defect-Free Quality Audit",
    desc: "Strict ANSI/ASQ Z1.4 quality audit. We perform rigorous moisture checks, sheet counting, and binding strength tests before palletization.",
    bgColor: "#f6f1f4",
    icon: <ShieldCheck size={20} className="text-rose-700" />,
    image: "/images/capabilities/quality-inspection.png",
    alt: "Automated paper quality inspection setup",
  },
  {
    tag: "LOGISTICS",
    title: "Strategic Port & Global Logistics",
    desc: "Positioned directly on the Nhava Sheva (JNPT) export corridor, drastically cutting inland transit times and securing faster maritime dispatch.",
    bgColor: "#f0f4f8",
    icon: <Globe2 size={20} className="text-blue-700" />,
    image: "/images/capabilities/shipping-containers.png",
    alt: "Maritime cargo container port terminal at sunset",
  }
];

// Each card tracks its own scroll progress for GPU-isolated transforms
function StackCard({ 
  cap, 
  idx, 
  totalCards,
  progress,
}: { 
  cap: typeof capabilities[0];
  idx: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  // Cards 0..N-2 scale down smoothly as the section scrolls.
  // The last card (idx === totalCards - 1) doesn't scale.
  const isLast = idx === totalCards - 1;
  const segmentStart = idx / totalCards;
  const segmentEnd = (idx + 1) / totalCards;

  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [segmentEnd, 1],
    isLast ? [1, 1] : [1, 0.94]
  );

  return (
    <motion.div
      className="sticky pt-4 mb-[40vh]"
      style={{
        top: `calc(12vh + ${idx * 18}px)`,
        zIndex: idx + 10,
        scale,
        transformOrigin: "top center",
        willChange: "transform",
      }}
    >
      <div
        className="flex flex-col lg:flex-row rounded-[28px] overflow-hidden border border-slate-100/80 dark:border-slate-800 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.5)]"
        style={{ backgroundColor: cap.bgColor }}
      >
        {/* Left Column */}
        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-4">
            {cap.icon}
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              {cap.tag}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 dark:text-white mb-4 font-serif leading-tight">
            {cap.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
            {cap.desc}
          </p>
        </div>

        {/* Right Column — image only, no overlapping gradient (reduces paint cost) */}
        <div className="w-full lg:w-3/5 h-[240px] sm:h-[280px] lg:h-[340px] relative">
          <Image
            src={cap.image}
            alt={cap.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority={idx === 0}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function SourcingAdvantagesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the full section — cards use this shared progress value
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pt-20 md:pt-28 pb-0 bg-white dark:bg-background cursor-default">
      <Container className="max-w-[1400px] mx-auto space-y-16 relative" ref={containerRef}>

        {/* Section Header */}
        <SectionHeader
          eyebrow="Sourcing Advantages"
          title="Manufacturing Platform for Scale"
          description={
            <div className="max-w-2xl leading-relaxed text-sm sm:text-base">
              Powerful platform designed to{" "}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md font-medium mx-1 text-xs sm:text-sm">
                automate production
                <Settings size={14} className="text-emerald-500" />
              </span>
              {", "}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md font-medium mx-1 text-xs sm:text-sm">
                ensure quality
                <ShieldCheck size={14} className="text-indigo-500" />
              </span>{" "}
              and effortlessly scale your global business.
            </div>
          }
        />

        {/* Sticky Stack */}
        <div className="relative pb-2">
          {capabilities.map((cap, idx) => (
            <StackCard
              key={idx}
              cap={cap}
              idx={idx}
              totalCards={capabilities.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

