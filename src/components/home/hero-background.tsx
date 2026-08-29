"use client";

import { cn } from "@/lib/utils";

export function HeroBackground({ isPageReady }: { isPageReady?: boolean }) {
  return (
    <>
      {/* Base Paper Fallback Color */}
      <div className="absolute inset-0 -z-30 bg-[#FAFBFD]" />
      
      {/* Paper Organic Noise Texture */}
      <div className="absolute inset-0 paper-noise pointer-events-none -z-25 mix-blend-multiply opacity-15" />

      {/* Grid Mesh */}
      <div className="absolute inset-0 grid-mesh opacity-20 pointer-events-none -z-20" />

      {/* Floating Animated Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-gradient-to-br from-indigo-200/35 via-blue-100/25 to-transparent rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse duration-[8000ms]" />
      
      <div className="absolute top-[25%] -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-sky-200/35 via-indigo-100/20 to-transparent rounded-full blur-[90px] pointer-events-none -z-10 dreamy-glow-navy" />
      
      <div className="absolute -bottom-24 right-[15%] w-[500px] h-[500px] bg-gradient-to-t from-slate-200/40 via-blue-100/20 to-transparent rounded-full blur-[80px] pointer-events-none -z-10 dreamy-glow-grey" />

      {/* Subtle white gradient overlay coming upward from the bottom of the hero section */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none -z-10" />
    </>
  );
}
