"use client";

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const productCollections = [
  {
    id: "Set_03",
    number: "01",
    title: "Center Pinned Notebooks",
    description: "High-volume notebook formats manufactured for institutional, retail and export requirements.",
    image: "/Images of Product/Set_03/Set_03 (1).png",
    bgColor: "#eef6ee",
    alt: "Paperforce Center Pinned Notebooks"
  },
  {
    id: "Set_10",
    number: "02",
    title: "Composition Notebooks",
    description: "Classic saddle-stitched exercise books for volume-conscious school procurement and public tenders.",
    image: "/Images of Product/Set 10 Composition/Screenshot 2026-08-15 181137.png",
    bgColor: "#f1f0f9",
    alt: "Paperforce Composition Notebooks"
  },
  {
    id: "Set_11",
    number: "03",
    title: "Spiral Bound Notebooks",
    description: "Durable wire-coil binding for a smooth, lay-flat writing experience. Favored by students and professionals.",
    image: "/Images of Product/Set 11 Spiral Bound/Screenshot 2026-08-15 181240.png",
    bgColor: "#f6f1f4",
    alt: "Paperforce Spiral Bound Notebooks"
  },
  {
    id: "Set_02",
    number: "04",
    title: "Double Wire Bound Notebooks",
    description: "Reinforced double-loop wire construction for frequent, heavy corporate and institutional use.",
    image: "/Images of Product/Set_02/Set_02 (2).png",
    bgColor: "#f0f4f8",
    alt: "Paperforce Double Wire Bound Notebooks"
  },
  {
    id: "Set_09",
    number: "05",
    title: "Perfect Bound Notebooks",
    description: "Clean adhesive-bound notebooks and pads offering a clean, lay-flat finish. Perfect for desktop notepad use.",
    image: "/Images of Product/Set_09/Set_09 (1).png",
    bgColor: "#eef6ee",
    alt: "Paperforce Perfect Bound Notebooks"
  },
  {
    id: "Set_07",
    number: "06",
    title: "Casebound Notebooks",
    description: "Premium bound notebooks with rigid protective casing, built for longevity and archive applications.",
    image: "/Images of Product/Set_07/Set_07 (3).png",
    bgColor: "#f1f0f9",
    alt: "Paperforce Casebound Notebooks"
  }
];

function ProductStackCard({ 
  product, 
  idx, 
  totalCards,
  progress,
}: { 
  product: typeof productCollections[0];
  idx: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const isLast = idx === totalCards - 1;
  const segmentEnd = (idx + 1) / totalCards;

  // Cards 0..N-2 scale down smoothly as the section scrolls.
  // The last card (idx === totalCards - 1) doesn't scale.
  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [segmentEnd, 1],
    isLast ? [1, 1] : [1, 0.94]
  );

  return (
    <motion.div
      className={`sticky pt-4 ${isLast ? "mb-12" : "mb-[40vh]"}`}
      style={{
        top: `calc(12vh + ${idx * 18}px)`,
        zIndex: idx + 10,
        scale,
        transformOrigin: "top center",
        willChange: "transform",
      }}
    >
      <div
        className="flex flex-col lg:flex-row rounded-[28px] overflow-hidden border border-slate-100/80 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.12)]"
        style={{ backgroundColor: product.bgColor }}
      >
        {/* Left Column: Text & Content (2/5 width) */}
        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1E3261] mb-3 block">
            {product.number}
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 mb-4 font-serif leading-tight">
            {product.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-6 font-medium">
            {product.description}
          </p>
          <Link href={`/products/${product.id}`} className="inline-flex items-center gap-1 text-xs font-bold text-[#1E3261] group hover:underline">
            Explore Range
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Right Column: Image display matching card background color (3/5 width) */}
        <div 
          className="w-full lg:w-3/5 h-[260px] sm:h-[300px] lg:h-[360px] relative flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: product.bgColor }}
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-contain object-center p-3 sm:p-6"
            priority={idx === 0}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function ProductSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the full section scroll progress for sticky overlapping transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pt-20 md:pt-28 pb-0 bg-white cursor-default border-t border-slate-100">
      <Container className="max-w-[1400px] mx-auto space-y-16 relative" ref={containerRef}>
        
        {/* Section Heading */}
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#0b1c3f] tracking-tight leading-tight">
            Our Products
          </h2>
        </ScrollReveal>

        {/* Overlapping Cards Stack Container */}
        <div className="relative pb-2">
          {productCollections.map((product, idx) => (
            <ProductStackCard
              key={idx}
              product={product}
              idx={idx}
              totalCards={productCollections.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* Final CTA Button */}
        <div className="flex justify-center pt-8 pb-16">
          <Link href="/products">
            <Button variant="outline" size="lg" className="font-bold border-[#1E3261] px-8 py-6 text-base">
              View All Products
            </Button>
          </Link>
        </div>

      </Container>
    </section>
  );
}
