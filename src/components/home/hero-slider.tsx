"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  id: number;
  tagline: string;
  title: string;
  image: string;
  alt: string;
  fitMode?: "cover" | "contain";
}

const slides: HeroSlide[] = [
  {
    id: 1,
    tagline: "CENTER-STITCHED",
    title: "Composition Notebooks",
    image: "/Images by Com/Composition Books.png",
    alt: "Paperforce Center-Stitched Composition Notebooks",
    fitMode: "cover",
  },
  {
    id: 2,
    tagline: "HARDCOVER & RECORD",
    title: "Counter Books",
    image: "/Images of Product/Set_01/Set_01 (4).png",
    alt: "Paperforce Durable Counter Books",
    fitMode: "contain",
  },
  {
    id: 3,
    tagline: "CREATIVE ART & CRAFT",
    title: "Construction Paper & Pads",
    image: "/Images of Product/Set_05/Set_05 (1).png",
    alt: "Paperforce Construction Paper & Pads",
    fitMode: "contain",
  },
  {
    id: 4,
    tagline: "FINE ART & SKETCH",
    title: "Drawing Books & Sketch Pads",
    image: "/Images of Product/Set_04/Set_04 (1).png",
    alt: "Paperforce Fine Art Drawing Books & Sketch Pads",
    fitMode: "contain",
  },
  {
    id: 5,
    tagline: "PRECISION CUT & RULED",
    title: "Index Cards",
    image: "/Images of Product/Set_08/Set_08 (4).png",
    alt: "Paperforce Precision Cut Index Cards",
    fitMode: "contain",
  },
  {
    id: 6,
    tagline: "LEGAL & SHORTHAND",
    title: "Writing Pads & Shorthand Pads",
    image: "/Images of Product/Set_06/Set_06 (1).png",
    alt: "Paperforce Shorthand & Legal Writing Pads",
    fitMode: "contain",
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

  // Reset image loading state whenever slide changes
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleSelectSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

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
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col items-start"
            >
              {/* Tagline Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1E3261] text-xs font-bold tracking-wider uppercase mb-3 border border-blue-100">
                {currentSlide.tagline}
              </span>

              {/* Product Name Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-[#0F172A] leading-[1.15] tracking-tight mb-6 sm:mb-8 max-w-xl">
                {currentSlide.title}
              </h1>

              {/* CTA Buttons */}
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

        {/* Product Image Showcase with White BG & Contain Fit */}
        <div className="order-1 lg:order-2 lg:col-span-7 relative w-full h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full flex items-center justify-center p-2 sm:p-4 select-none"
            >
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center bg-white border border-slate-200/80 shadow-lg group">
                
                {/* Normal Skeleton Loading Pulse Overlay */}
                <AnimatePresence>
                  {isImgLoading && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 z-20 bg-white/90 animate-pulse rounded-2xl sm:rounded-3xl flex items-center justify-center"
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-[#1E3261] animate-spin" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Product Image on Pure White Background */}
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.alt}
                  fill
                  priority
                  onLoad={() => setIsImgLoading(false)}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className={cn(
                    currentSlide.fitMode === "cover"
                      ? "object-cover object-center p-0"
                      : "object-contain object-center p-4 sm:p-6 bg-white",
                    "rounded-2xl sm:rounded-3xl transition-all duration-300",
                    isImgLoading ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
                  )}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Segmented Progress Bar, Tap Controls & Arrow Buttons */}
      <div className="w-full border-t border-[#E2E8F0]/80 pt-5 mt-6 md:mt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Multi-segment Interactive Touch Bars */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-full sm:max-w-2xl">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => handleSelectSlide(index)}
                className="relative flex-1 py-3 group cursor-pointer text-left focus:outline-none"
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                title={slide.title}
              >
                {/* Track line background */}
                <div className="w-full h-1 bg-[#E2E8F0] group-hover:bg-[#CBD5E1] transition-colors rounded-full overflow-hidden relative">
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 bg-[#0F172A] rounded-full transition-all duration-75 ease-linear",
                      index === currentIndex && "bg-[#1E3261]"
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

          {/* Right Controls: Arrow Buttons & Slide Counter */}
          <div className="flex items-center gap-3 shrink-0 select-none">
            {/* Slide Arrows for instant tapping */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#1E3261] hover:bg-[#1E3261] hover:text-white flex items-center justify-center transition-all cursor-pointer text-slate-700 active:scale-95 shadow-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#1E3261] hover:bg-[#1E3261] hover:text-white flex items-center justify-center transition-all cursor-pointer text-slate-700 active:scale-95 shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Counter Text e.g. "02 / 06" */}
            <div className="text-xs sm:text-sm font-sans tracking-[0.18em] text-[#64748B] font-bold pl-2">
              <span className="text-[#1E3261]">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="mx-1 text-[#CBD5E1]">/</span>
              <span>{String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
