"use client";

import * as React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { collections, ProductCollection } from "@/components/products/data";

function ProductStackCard({
  product,
  idx,
  totalCards,
  progress,
}: {
  product: ProductCollection;
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

  const cardNumber = (idx + 1).toString().padStart(2, "0");

  return (
    <motion.div
      className={`sticky pt-4 ${isLast ? "mb-12" : "mb-[35vh]"}`}
      style={{
        top: `calc(10vh + ${Math.min(idx * 16, 200)}px)`,
        zIndex: idx + 10,
        scale,
        transformOrigin: "top center",
        willChange: "transform",
      }}
    >
      <div
        className="flex flex-col lg:flex-row rounded-[28px] overflow-hidden border border-slate-100/80 shadow-[0_8px_40px_-10px_rgba(0,0,0,0.12)]"
        style={{ backgroundColor: product.bgColor || "#f8fafc" }}
      >
        {/* Left Column: Text & Content (2/5 width) */}
        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1E3261] mb-3 block">
            {cardNumber}
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-900 mb-4 font-serif leading-tight">
            {product.name}
          </h3>
          <ul className="space-y-2.5 max-w-sm mb-6">
            {product.bullets?.map((bullet, bIdx) => (
              <li key={bIdx} className="text-sm text-slate-700 flex items-start gap-2.5 font-medium leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3261] mt-1.5 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Link href={`/products/${product.id}`} className="inline-flex items-center gap-1 text-xs font-bold text-[#1E3261] group hover:underline">
            Explore Range
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Right Column: Image display matching card background color (3/5 width) */}
        <div
          className="w-full lg:w-3/5 h-[260px] sm:h-[300px] lg:h-[360px] relative flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: product.bgColor || "#f8fafc" }}
        >
          {product.coverImage ? (
            <Image
              src={product.coverImage}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain object-center p-3 sm:p-6"
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-8 bg-white/70 backdrop-blur-xs rounded-2xl border border-dashed border-slate-300 w-full max-w-md h-[80%]">
              <BookOpen className="w-12 h-12 text-[#1E3261]/60 mb-3" />
              <p className="text-sm font-bold text-[#1E3261] mb-1">Catalogue Specifications Ready</p>
              <p className="text-xs text-slate-500 max-w-xs">Custom OEM sizes and grammages available on order.</p>
            </div>
          )}
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
          {collections.map((product, idx) => (
            <ProductStackCard
              key={product.id}
              product={product}
              idx={idx}
              totalCards={collections.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* Final CTA Button */}
        <div className="flex justify-center pt-8 pb-16">
          <Link href="/products">
            <Button variant="outline" size="lg" className="font-bold border-[#1E3261] px-8 py-6 text-base hover:bg-[#1E3261] hover:text-white transition-colors">
              View All Products
            </Button>
          </Link>
        </div>

      </Container>
    </section>
  );
}
