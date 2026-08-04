import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Blog & Insights | Paperforce India LLP",
  description: "Industry insights, manufacturing updates, and stationery trends from Paperforce India LLP.",
};

export default function BlogPage() {
  return (
    <main className="flex-1 py-24 md:py-32 bg-white dark:bg-background min-h-screen">
      <Container className="space-y-12">
        <ScrollReveal direction="up">
          <div className="space-y-6 max-w-3xl text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0b1c3f] dark:text-white font-serif">
              Industry Insights
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Latest news, manufacturing updates, and trends in the global stationery market.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.1}>
          <div className="p-12 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center justify-center min-h-[40vh]">
            <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-4">Coming Soon</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Our editorial team is currently preparing in-depth articles on sustainable paper sourcing and high-volume manufacturing trends. Check back later!
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </main>
  );
}
