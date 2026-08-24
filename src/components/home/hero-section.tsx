"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/home/hero-background";
import HeroSlider from "@/components/home/hero-slider";
import { useEntrance } from "@/components/common/entrance-provider";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { isEntranceComplete } = useEntrance();

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 isolate overflow-hidden bg-[#FAF8F3]">
      {/* Animated Background */}
      <HeroBackground isPageReady={isEntranceComplete} />

      <Container className="max-w-screen-2xl mx-auto flex flex-col items-center space-y-6 md:space-y-8 px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Visual Hero Slider */}
        <div className={cn("w-full", !isEntranceComplete && "animate-hero-visual")}>
          <HeroSlider />
        </div>

        {/* CTAs */}
        <div 
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 pt-2",
            !isEntranceComplete && "animate-hero-cta"
          )}
        >
          <Link href="/products">
            <Button 
              size="lg" 
              variant="default"
              className={cn(
                "min-w-[220px]",
                !isEntranceComplete && "btn-loading-pulse-primary"
              )}
            >
              {!isEntranceComplete && <span className="btn-loading-highlight-sweep" />}
              <span>Explore Our Products &rarr;</span>
            </Button>
          </Link>
          
          <Link href="/contact">
            <Button 
              variant="outline"
              size="lg"
              className={cn(
                "min-w-[220px]",
                !isEntranceComplete && "btn-loading-pulse-secondary"
              )}
            >
              {!isEntranceComplete && <span className="btn-loading-highlight-sweep" />}
              <span>Reach Us</span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
