"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "/images/hero-center-pinned-slide2.png",
    alt: "Paperforce Center Pinned Exercise Books - Commercial & Regional Export Range",
  },
  {
    id: 2,
    image: "/Spiral Bound Sample 3.jpg",
    alt: "Paperforce Spiral Bound Notebook Range - Premium Collection",
  },
];

interface HeroSliderProps {
  isPageReady?: boolean;
}

export default function HeroSlider({ isPageReady = true }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-advance slides every 5.5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Visual Hero Slide Card - Clean White without shadows */}
      <div className="relative w-full overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[36px] bg-white border border-slate-200/70 group">
        
        {/* Full-width responsive slide container matching 2.67:1 ratio of reference composition */}
        <div className="relative w-full aspect-[2400/900] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.alt}
                fill
                priority={currentIndex === 0}
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-contain object-center pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous Slide Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer opacity-70 hover:opacity-100 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Slide Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer opacity-70 hover:opacity-100 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicator Dots (2 Slides) */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-xs border border-slate-200/80 shadow-2xs">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all cursor-pointer",
                idx === currentIndex
                  ? "w-6 bg-[#1E3261]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      </div>

      {/* CTA Buttons - Original Button Styling Restored */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
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
    </div>
  );
}





