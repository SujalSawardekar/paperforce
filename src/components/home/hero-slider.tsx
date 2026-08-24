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
}

const slides: Slide[] = [
  {
    type: "factory",
    src: "/images/spiral_notebook_hero.jpg",
    alt: "Paperforce premium spiral bound notebook collection",
  },
  {
    type: "factory",
    src: "/images/factory_facility_hero.jpg",
    alt: "Paperforce modern stationery manufacturing facility",
  },
  {
    type: "factory",
    src: "/images/double_wire_hero.jpg",
    alt: "Paperforce professional double wire bound notebooks",
  },
  {
    type: "factory",
    src: "/images/automated_packaging_hero.jpg",
    alt: "Paperforce automated notebook packaging and assembly line",
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
              <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
                <Image
                  src={slides[currentIndex].src}
                  alt={slides[currentIndex].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  className="object-cover transition-transform duration-700"
                  priority
                />
                {/* Premium gradient overlay for subtle contrast in controls area */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5 pointer-events-none" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls Pill */}
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
