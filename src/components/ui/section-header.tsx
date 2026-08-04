import { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, action, centered = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col space-y-4 ${centered ? "text-center items-center" : ""} ${className}`}>
      {eyebrow && (
        <ScrollReveal direction="up" delay={0.1}>
          <span className="text-[#0b1c3f]  font-bold tracking-wider text-xs uppercase bg-blue-50  px-3 py-1 rounded-full border border-blue-100 ">
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      
      <ScrollReveal direction="up" delay={0.2}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900  leading-tight">
          {title}
        </h2>
      </ScrollReveal>

      {description && (
        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-slate-600  max-w-2xl text-base sm:text-lg leading-relaxed">
            {description}
          </div>
        </ScrollReveal>
      )}

      {action && (
        <ScrollReveal direction="up" delay={0.4} className="pt-4">
          {action}
        </ScrollReveal>
      )}
    </div>
  );
}
