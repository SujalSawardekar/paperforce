"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  id: number;
  tagline: string;
  title: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    tagline: "CENTER-STITCHED",
    title: "Composition Books",
    image: "/Images by Com/Composition Books.png",
    alt: "Paperforce Center-Stitched Composition Books",
  },
  {
    id: 2,
    tagline: "CENTER-PINNED",
    title: "Center Pinned Notebooks",
    image: "/Images by Com/Centere Pinned Notebooks.png",
    alt: "Paperforce Centere Pinned Notebooks",
  },
  {
    id: 3,
    tagline: "HARDCOVER SERIES",
    title: "Hardcover Notebooks",
    image: "/images/hardcover_notebook_hero.jpg",
    alt: "Paperforce High Durability Hardcover Notebooks",
  },
  {
    id: 4,
    tagline: "SPIRAL BOUND",
    title: "Spiral Notebooks",
    image: "/products/spiral_notebook.png",
    alt: "Paperforce Spiral Notebooks Collection",
  },
  {
    id: 5,
    tagline: "EXERCISE BOOKS",
    title: "Exercise Notebooks",
    image: "/Images by Com/zn1.jpg",
    alt: "Paperforce Custom Branded Notebooks",
  },
  {
    id: 6,
    tagline: "DOUBLE WIRE",
    title: "Double Wire Notebooks",
    image: "/products/double_wire_notebook.png",
    alt: "Paperforce Double-Wire Notebooks",
  },
];

interface HeroSliderProps {
  isPageReady?: boolean;
}

export default function HeroSlider({ isPageReady = true }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isImgLoading, setIsImgLoading] = useState(true);

  // Trigger image loading skeleton reset on slide change
  useEffect(() => {
    setIsImgLoading(true);
  }, [currentIndex]);

  useEffect(() => {
    setProgress(0);
    if (isHovered) return;

    const step = 30; // interval step in ms
    const duration = 5000; // 5s per slide

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextVal = prev + (step / duration) * 100;
        if (nextVal >= 100) {
          setCurrentIndex((prevIdx) => (prevIdx + 1) % slides.length);
          return 0;
        }
        return nextVal;
      });
    }, step);

    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="w-full flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top 2-Column Grid: Image top on mobile (order-1), Text below on mobile (order-2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[360px] sm:min-h-[420px] md:min-h-[460px]">
        {/* Product Info & CTAs (Left on desktop, Bottom on mobile) */}
        <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center z-10 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-start"
            >
              {/* Product Name Title - Bigger Font */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-serif font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6 sm:mb-8 max-w-xl">
                {currentSlide.title}
              </h1>

              {/* CTA Buttons - Original Button Styling Restored */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link href="/products" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="default"
                    className={cn(
                      "w-full sm:w-auto min-w-[180px] sm:min-w-[210px]",
                      !isPageReady && "btn-loading-pulse-primary"
                    )}
                  >
                    {!isPageReady && <span className="btn-loading-highlight-sweep" />}
                    <span>Explore Our Products &rarr;</span>
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    variant="outline"
                    size="lg"
                    className={cn(
                      "w-full sm:w-auto min-w-[180px] sm:min-w-[210px]",
                      !isPageReady && "btn-loading-pulse-secondary"
                    )}
                  >
                    {!isPageReady && <span className="btn-loading-highlight-sweep" />}
                    <span>Reach Us</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Product Image Showcase (Right on desktop, Top on mobile) */}
        <div className="order-1 lg:order-2 lg:col-span-7 relative w-full h-[260px] sm:h-[360px] md:h-[440px] lg:h-[480px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.97, x: 15 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.97, x: -15 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full flex items-center justify-center p-2 sm:p-4 select-none pointer-events-none"
            >
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center bg-slate-100/90 border border-slate-200/50 shadow-sm">
                {/* Shimmer Loading Skeleton Overlay */}
                <AnimatePresence>
                  {isImgLoading && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 z-20 bg-slate-200/80 backdrop-blur-[2px] overflow-hidden flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
                      <div className="w-8 h-8 rounded-full border-2 border-[#1E3261]/20 border-t-[#1E3261] animate-spin z-30" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <Image
                  src={currentSlide.image}
                  alt={currentSlide.alt}
                  fill
                  priority
                  onLoad={() => setIsImgLoading(false)}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={cn(
                    "object-cover object-center rounded-2xl sm:rounded-3xl transition-all duration-500",
                    isImgLoading ? "scale-[1.03] filter blur-sm opacity-50" : "scale-100 filter blur-0 opacity-100"
                  )}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Segmented Progress Bar & Slide Counter with Laser Progress Glow */}
      <div className="w-full border-t border-[#E2E8F0]/80 pt-6 mt-6 md:mt-10">
        <div className="flex items-center justify-between gap-4">
          {/* Multi-segment Progress Line */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-full sm:max-w-2xl">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setProgress(0);
                }}
                className="relative flex-1 h-8 flex items-center group cursor-pointer"
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              >
                {/* Track line background */}
                <div className="w-full h-[3px] bg-[#E2E8F0] group-hover:bg-[#CBD5E1] transition-colors rounded-full overflow-hidden relative">
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 bg-[#0F172A] rounded-full transition-all duration-75 ease-linear",
                      index === currentIndex && "bg-gradient-to-r from-[#1E3261] via-[#0F172A] to-blue-600 shadow-[0_0_8px_rgba(30,50,97,0.6)]"
                    )}
                    style={{
                      width:
                        index < currentIndex
                          ? "100%"
                          : index === currentIndex
                          ? `${progress}%`
                          : "0%",
                    }}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Counter Text e.g. "02 / 06" */}
          <div className="text-xs sm:text-sm font-sans tracking-[0.18em] text-[#64748B] font-medium shrink-0 pl-4 select-none">
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="mx-1 text-[#CBD5E1]">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
