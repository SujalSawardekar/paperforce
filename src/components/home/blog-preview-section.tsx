"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { blogPosts } from "@/data/blog-data";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogPreviewSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="pt-24 pb-40 bg-white dark:bg-background border-t border-border/30 relative">
      <Container className="max-w-7xl mx-auto space-y-12">
        <SectionHeader
          eyebrow="Insights & Updates"
          title="Sourcing Knowledge Hub"
          action={
            <Link href="/blog">
              <Button variant="outline" className="relative overflow-hidden group rounded-full px-6 font-bold border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 hover:bg-white/50 dark:hover:bg-slate-900/50 text-slate-900 dark:text-white shadow-sm transition-colors duration-300">
                <span className="absolute inset-0 bg-slate-200 dark:bg-slate-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full will-change-transform" />
                <span className="relative z-10 flex items-center group-hover:text-[#0b1c3f] dark:group-hover:text-white transition-colors duration-300">
                  View All Articles
                  <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          }
        />

        <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
              <div className="flex flex-col justify-between h-full p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-500">
                    <span className="text-[#0b1c3f] dark:text-slate-300">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold leading-snug text-slate-900 dark:text-white font-serif group-hover:text-[#0b1c3f] dark:group-hover:text-slate-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6 flex justify-between items-center">
                  <span className="text-[11px] text-slate-500 font-medium">{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0b1c3f] dark:text-white">
                    Read
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </AnimatedGroup>
      </Container>
    </section>
  );
}

