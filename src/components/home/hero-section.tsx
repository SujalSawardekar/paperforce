"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero-center-pinned-slide2.png",
    alt: "Paperforce Center Pinned Exercise Books Collection",
  },
  {
    id: 2,
    image: "/images/hero-stationery-clean.png",
    alt: "Paperforce Premium Spiral Bound Notebooks Collection",
  },
];

export function HeroSection() {
  const [current, setCurrent] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Touch swipe support for mobile
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  // Auto-advance slides every 5.5s unless hovered
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[85vh] min-h-[520px] md:h-[100svh] md:min-h-[640px] max-h-[1150px] overflow-hidden bg-white select-none flex items-center justify-center"
      aria-label="Paperforce Fullscreen Hero"
    >
      {/* ─── 1. FULL-SCREEN IMAGE LAYER (100% OPACITY, COVERS FULLSCREEN ON MOBILE) ─── */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-cover md:object-contain object-center pointer-events-none"
              style={{ opacity: 1 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── 2. CTA BUTTONS AT BOTTOM (above dot indicators) ─── */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 w-full max-w-lg px-6 sm:px-8 flex flex-row items-center justify-center gap-2.5 sm:gap-4 pointer-events-auto">
        <Link href="/products" className="flex-1 sm:flex-initial">
          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[180px] h-11 sm:h-12 text-xs sm:text-sm md:text-base font-bold shadow-lg shadow-blue-950/25"
          >
            <span>Our Products &rarr;</span>
          </Button>
        </Link>

        <Link href="/contact" className="flex-1 sm:flex-initial">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[180px] h-11 sm:h-12 text-xs sm:text-sm md:text-base font-bold shadow-md"
          >
            <span>Reach Us</span>
          </Button>
        </Link>
      </div>

      {/* ─── 3. FLOATING SLIDE INDICATOR DOTS AT BOTTOM CENTER ─── */}
      <div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm"
        aria-label="Slide indicators"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === current
                ? "w-7 h-2 bg-[#0B1C3F] shadow-sm"
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* ─── 4. FLOATING PREV / NEXT ARROWS ─── */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-[#0B1C3F] shadow-md hover:shadow-xl items-center justify-center transition-all duration-200 border border-slate-200/80 active:scale-95 cursor-pointer backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/85 hover:bg-white text-[#0B1C3F] shadow-md hover:shadow-xl items-center justify-center transition-all duration-200 border border-slate-200/80 active:scale-95 cursor-pointer backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </section>
  );
}
