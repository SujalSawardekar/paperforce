import React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      <ScrollReveal direction="up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c3f]  font-serif leading-tight">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-lg text-slate-600 ">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}