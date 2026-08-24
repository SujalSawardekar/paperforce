"use client";

import { cn } from "@/lib/utils";

export function HeroBackground({ isPageReady }: { isPageReady?: boolean }) {
  return (
    <>
      {/* Base Paper Fallback Color */}
      <div className="absolute inset-0 -z-30 bg-[#FAF8F3]" />
      
      {/* Paper Organic Noise Texture */}
      <div className="absolute inset-0 paper-noise pointer-events-none -z-25 mix-blend-multiply opacity-20" />

      {/* Main User-provided Background Image (Paperforce BG - Optimized WebP) */}
      <div
        className={cn(
          "absolute inset-0 -z-20 pointer-events-none bg-center bg-cover bg-no-repeat opacity-0",
          !isPageReady ? "animate-hero-bg" : "opacity-[0.28]"
        )}
        style={{
          backgroundImage: "url('/images/paperforce-bg.webp')",
        }}
      />

      {/* Subtle white gradient overlay coming upward from the bottom of the hero section */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none -z-15" />

      {/* Soft Accent Ambient Glows to blend edges */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] dreamy-glow-navy pointer-events-none -z-10 opacity-25 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] dreamy-glow-grey pointer-events-none -z-10 opacity-25 mix-blend-multiply" />
    </>
  );
}
