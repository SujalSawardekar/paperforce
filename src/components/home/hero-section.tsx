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
    <section className="relative pt-24 md:pt-28 pb-8 md:pb-12 isolate overflow-hidden bg-[#FAFBFD] min-h-[82vh] flex flex-col justify-center">
      {/* Animated Background with Floating Gradients */}
      <HeroBackground isPageReady={isEntranceComplete} />

      <Container className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 w-full my-auto">
        <div className={cn("w-full", !isEntranceComplete && "animate-hero-visual")}>
          <HeroSlider isPageReady={isEntranceComplete} />
        </div>
      </Container>
    </section>
  );
}
