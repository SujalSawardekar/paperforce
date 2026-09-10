"use client";

import * as React from "react";
import { Container } from "@/components/common/container";
import { HeroBackground } from "@/components/home/hero-background";
import HeroSlider from "@/components/home/hero-slider";
import { useEntrance } from "@/components/common/entrance-provider";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { isEntranceComplete } = useEntrance();

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-20 isolate overflow-hidden bg-[#FAFBFD] flex flex-col justify-center min-h-[calc(100svh-4rem)] md:min-h-0">
      {/* Animated Background with Floating Gradients */}
      <HeroBackground isPageReady={isEntranceComplete} />

      <Container className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 relative z-10 w-full flex flex-col items-center my-auto">
        {/* Single Art-Directed Hero Slide with Integrated Negative Space & Product Cluster */}
        <div className={cn("w-full", !isEntranceComplete && "animate-hero-visual")}>
          <HeroSlider isPageReady={isEntranceComplete} />
        </div>
      </Container>
    </section>
  );
}
