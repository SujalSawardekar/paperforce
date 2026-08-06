"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <>
      {/* 1. Base Image Layer */}
      <div className="absolute inset-0 -z-30">
        <Image 
          src="/images/hero-bg.jpg"
          alt="Paperforce Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Animated Gradient Overlay for readability and motion */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.85, 0.95, 0.85]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.98) 100%)",
          backgroundSize: "200% 200%"
        }}
      />

      {/* 3. Existing Textures (Lines/Mesh and Noise) */}
      <div className="absolute inset-0 paper-noise pointer-events-none -z-10 mix-blend-multiply opacity-30" />
      <div className="absolute inset-0 grid-mesh pointer-events-none -z-10 opacity-70" />
      
      {/* 4. Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] dreamy-glow-navy pointer-events-none -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] dreamy-glow-grey pointer-events-none -z-10 opacity-60" />
    </>
  );
}
