"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  { id: 1, image: "/Homepage Slider/IMG1.png", alt: "Paperforce Notebook Collection Slide 1" },
  { id: 2, image: "/Homepage Slider/IMG2.png", alt: "Paperforce Notebook Collection Slide 2" },
  { id: 3, image: "/Homepage Slider/IMG3.png", alt: "Paperforce Notebook Collection Slide 3" },
  { id: 4, image: "/Homepage Slider/IMG4.png", alt: "Paperforce Notebook Collection Slide 4" },
  { id: 5, image: "/Homepage Slider/IMG5.png", alt: "Paperforce Notebook Collection Slide 5" },
  { id: 6, image: "/Homepage Slider/IMG6.png", alt: "Paperforce Notebook Collection Slide 6" },
  { id: 7, image: "/Homepage Slider/IMG7.png", alt: "Paperforce Notebook Collection Slide 7" },
  { id: 8, image: "/Homepage Slider/IMG8.png", alt: "Paperforce Notebook Collection Slide 8" },
  { id: 9, image: "/Homepage Slider/IMG9.png", alt: "Paperforce Notebook Collection Slide 9" },
  { id: 10, image: "/Homepage Slider/IMG10.png", alt: "Paperforce Notebook Collection Slide 10" },
  { id: 11, image: "/Homepage Slider/IMG11.png", alt: "Paperforce Notebook Collection Slide 11" },
  { id: 12, image: "/Homepage Slider/IMG12.png", alt: "Paperforce Notebook Collection Slide 12" },
];

interface HeroSliderProps {
  isPageReady?: boolean;
}

export default function HeroSlider({ isPageReady = true }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-advance slides every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

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
      {/* Visual Hero Slide Card */}
      <div className="relative w-full overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[36px] bg-white border border-slate-200/70 group shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        
        <div className="relative w-full aspect-[16/11] sm:aspect-[2/1] md:aspect-[2400/900] min-h-[210px] sm:min-h-[280px] md:min-h-0 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-0"
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.alt}
                fill
                priority={currentIndex === 0 || currentIndex === 1}
                sizes="(max-width: 768px) 100vw, 1536px"
                className="object-contain object-center pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous Slide Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer opacity-80 hover:opacity-100 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Next Slide Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer opacity-80 hover:opacity-100 active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicator Dots (12 Slides) */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/85 backdrop-blur-xs border border-slate-200/80 shadow-2xs max-w-[90vw] overflow-x-auto">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-1.5 sm:h-2 rounded-full transition-all cursor-pointer shrink-0",
                idx === currentIndex
                  ? "w-5 sm:w-6 bg-[#1E3261]"
                  : "w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-row items-center justify-center gap-3 mt-6 sm:mt-10 w-full max-w-sm sm:max-w-none sm:w-auto">
        <Link href="/products" className="flex-1 sm:flex-initial sm:w-auto">
          <Button 
            size="lg" 
            variant="default"
            className={cn(
              "w-full sm:w-auto min-w-0 sm:min-w-[210px] h-11 sm:h-12 text-sm sm:text-base font-semibold",
              !isPageReady && "btn-loading-pulse-primary"
            )}
          >
            {!isPageReady && <span className="btn-loading-highlight-sweep" />}
            <span>Our Products &rarr;</span>
          </Button>
        </Link>

        <Link href="/contact" className="flex-1 sm:flex-initial sm:w-auto">
          <Button 
            variant="outline"
            size="lg"
            className={cn(
              "w-full sm:w-auto min-w-0 sm:min-w-[210px] h-11 sm:h-12 text-sm sm:text-base font-semibold",
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
