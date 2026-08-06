"use client";

import Link from "next/link";
import { BlogCategory } from "@/lib/blog-data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TopicChipsProps {
  categories: BlogCategory[];
  activeCategory?: string;
}

export function TopicChips({ categories, activeCategory }: TopicChipsProps) {
  return (
    <div className="w-full flex flex-wrap gap-3 my-12">
      <Link 
        href="/blog"
        scroll={false}
        className={cn(
          "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border",
          !activeCategory 
            ? "bg-[#1E3261] text-white border-[#1E3261]" 
            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
        )}
      >
        All Topics
      </Link>
      {categories.map((category, idx) => {
        const isActive = activeCategory === category.slug;
        return (
          <Link
            key={category.id}
            href={`/blog?category=${category.slug}`}
            scroll={false}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border",
              isActive 
                ? "bg-[#1E3261] text-white border-[#1E3261]" 
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
