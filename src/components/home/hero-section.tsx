"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: "/Homepage Slider/IMG1.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 1",
  },
  {
    id: 2,
    image: "/Homepage Slider/IMG2.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 2",
  },
  {
    id: 3,
    image: "/Homepage Slider/IMG3.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 3",
  },
  {
    id: 4,
    image: "/Homepage Slider/IMG4.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 4",
  },
  {
    id: 5,
    image: "/Homepage Slider/IMG5.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 5",
  },
  {
    id: 6,
    image: "/Homepage Slider/IMG6.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 6",
  },
  {
    id: 7,
    image: "/Homepage Slider/IMG7.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 7",
  },
  {
    id: 8,
    image: "/Homepage Slider/IMG8.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 8",
  },
  {
    id: 9,
    image: "/Homepage Slider/IMG9.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 9",
  },
  {
    id: 10,
    image: "/Homepage Slider/IMG10.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 10",
  },
  {
    id: 11,
    image: "/Homepage Slider/IMG11.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 11",
  },
  {
    id: 12,
    image: "/Homepage Slider/IMG12.png",
    alt: "Paperforce Notebook Manufacturing & Export Collection 12",
  },
];

export function HeroSection() {
  const [current, setCurrent] = React.useState(0);

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

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-advance slides every 5 seconds continuously (hovering does not pause the slider)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[85vh] min-h-[520px] md:h-[100svh] md:min-h-[640px] max-h-[1150px] overflow-hidden bg-white select-none flex items-center justify-center"
      aria-label="Paperforce Fullscreen Hero Slider"
    >
      {/* ─── 1. FULL-SCREEN IMAGE LAYER (100% OPACITY) ─── */}
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
              priority={current === 0 || current === 1}
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
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[180px] h-11 sm:h-12 text-xs sm:text-sm md:text-base font-bold shadow-md bg-white/90 backdrop-blur-xs hover:bg-white"
          >
            <span>Reach Us</span>
          </Button>
        </Link>
      </div>

      {/* ─── 3. FLOATING SLIDE INDICATOR DOTS AT BOTTOM CENTER ─── */}
      <div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-sm border border-slate-200/80 shadow-sm max-w-[92vw] overflow-x-auto"
        aria-label="Slide indicators"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer shrink-0 ${
              index === current
                ? "w-5 sm:w-7 h-1.5 sm:h-2 bg-[#0B1C3F] shadow-sm"
                : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400"
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
