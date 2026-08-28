"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  type: "product" | "factory";
  src: string;
  bgColor?: string;
  alt: string;
  copyline?: string;
}

const slides: Slide[] = [
  {
    type: "factory",
    src: "/Images by Com/Centere Pinned Notebooks.png",
    alt: "Paperforce Center Pinned Notebooks collection",
  },
  {
    type: "factory",
    src: "/Images by Com/Composition Books.png",
    alt: "Paperforce Composition Books collection",
  },
  {
    type: "factory",
    src: "/Images by Com/Untitled design.jpg",
    alt: "Made to Impress. Built for Your Brand.",
    copyline: "Made to Impress. Built for Your Brand.",
  },
  {
    type: "factory",
    src: "/Images by Com/zn1.jpg",
    alt: "Where Quality Meets Your Brand.",
    copyline: "Where Quality Meets Your Brand.",
  },
  {
    type: "factory",
    src: "/images/hardcover_notebook_hero.jpg",
    alt: "Paperforce high durability hardcover notebooks",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Autoplay with a linear progress circle incrementing every 30ms.
  // Resets to 0% and starts fresh on manual navigation (currentIndex change).
  // Pauses state increment on hover and resumes exactly where it left off.
  useEffect(() => {
    setProgress(0);

    if (isHovered) return;

    const step = 30; // interval step in ms
    const duration = 4500; // slide cycle in ms

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextVal = prev + (step / duration) * 100;
        if (nextVal >= 100) {
          handleNext();
          return 100;
        }
        return nextVal;
      });
    }, step);

    return () => {
      clearInterval(timer);
    };
  }, [isHovered, currentIndex]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-[32px] bg-slate-100 shadow-[0_12px_45px_-12px_rgba(30,50,97,0.12)] border border-[#E5E7EB]/50 group"
      style={{ willChange: "transform" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider height boundaries - taller dimensions */}
      <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px] relative overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {slides[currentIndex].type === "product" ? (
              <div 
                className="relative w-full h-full flex items-center justify-center p-6 sm:p-8 md:p-12 overflow-hidden transition-colors duration-500"
                style={{ backgroundColor: slides[currentIndex].bgColor }}
              >
                {/* Subtle paper grid mesh texture */}
                <div className="absolute inset-0 grid-mesh opacity-25 pointer-events-none" />
                {/* Organic noise texture */}
                <div className="absolute inset-0 paper-noise opacity-15 pointer-events-none" />
                
                {/* Centered contained product */}
                <div className="relative w-full h-full max-w-[85%] max-h-[85%] flex items-center justify-center select-none pointer-events-none">
                  <Image
                    src={slides[currentIndex].src}
                    alt={slides[currentIndex].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    className="object-contain drop-shadow-[0_18px_36px_rgba(30,50,97,0.1)] transition-transform duration-700 hover:scale-[1.01]"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden select-none pointer-events-none bg-slate-950/80">
                <Image
                  src={slides[currentIndex].src}
                  alt={slides[currentIndex].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-contain object-center transition-transform duration-700 p-2 sm:p-4 md:p-6"
                  priority
                />
                {/* Premium gradient overlay for subtle contrast in controls area */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Left Standalone Tagline Badge for Slides 3 & 4 */}
        <AnimatePresence mode="wait">
          {slides[currentIndex].copyline && (
            <motion.div
              key={slides[currentIndex].copyline}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-[#0F172A]/70 backdrop-blur-md border border-white/20 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-2xl pointer-events-none max-w-[calc(100%-140px)] sm:max-w-[calc(100%-180px)]"
            >
              <span className="text-white text-xs sm:text-sm md:text-base font-semibold tracking-wide block truncate drop-shadow-sm">
                {slides[currentIndex].copyline}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Standalone Navigation Controls Pill */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 bg-[#0F172A]/40 backdrop-blur-md border border-white/10 px-2 py-1.5 rounded-full z-20 shadow-lg">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/20 text-white hover:bg-white/30 active:scale-95 transition-all cursor-pointer border border-white/5"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          
          <div className="relative w-11 h-11 flex items-center justify-center">
            {/* Circular Progress SVG wrapper */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-20" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r="19"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="2"
                fill="transparent"
              />
              <circle
                cx="22"
                cy="22"
                r="19"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray="119.38"
                style={{
                  strokeDashoffset: 119.38 - (119.38 * progress) / 100,
                  transition: "stroke-dashoffset 30ms linear",
                }}
              />
            </svg>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white text-[#0F172A] hover:bg-[#F8FAFC] active:scale-95 transition-all cursor-pointer shadow-md border border-white/10 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
