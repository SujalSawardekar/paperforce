"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowUpRight } from "lucide-react";

interface ProductTeaser {
  name: string;
  description: string;
  imageUrl: string;
  specs: string;
  moq: string;
}

const notebookTeasers: ProductTeaser[] = [
  { 
    name: "Exercise Books", 
    description: "Everyday notebooks for school and office use, produced at export volume. Optimized for cost-effectiveness.",
    imageUrl: "/products/exercise_books.png",
    specs: "54 - 80 GSM / A4, A5, Custom",
    moq: "MOQ 10,000 PCS"
  },
  { 
    name: "Spiral Bound Notebooks", 
    description: "Durable wire-coil binding for a smooth, lay-flat writing experience. Highly favored in college and workspaces.",
    imageUrl: "/products/spiral_notebook.png",
    specs: "60 - 90 GSM / A4, A5, B5, Letter",
    moq: "MOQ 10,000 PCS"
  },
  { 
    name: "Double Wire Bound", 
    description: "Reinforced double-loop wire construction for frequent, heavy business use. Professional appeal.",
    imageUrl: "/products/double_wire_notebook.png",
    specs: "70 - 100 GSM / A4, A5, A6, Custom",
    moq: "MOQ 10,000 PCS"
  },
  { 
    name: "Hard Cover Gally Bound", 
    description: "Premium bound notebooks with a rigid protective casing. Built for longevity and archival use.",
    imageUrl: "/products/hardcover_notebook.png",
    specs: "70 - 100 GSM / A4, A5, Custom",
    moq: "MOQ 10,000 PCS"
  },
  { 
    name: "Centre Stitched", 
    description: "Classic saddle-stitched exercise books for volume-conscious procurement and tenders.",
    imageUrl: "/products/stitched_notebook.png",
    specs: "54 - 70 GSM / A5, B6, Custom",
    moq: "MOQ 20,000 PCS"
  },
  { 
    name: "Glue Bound Notebooks", 
    description: "Adhesive-bound notebooks offering a clean, economical finish. Perfect for note pads.",
    imageUrl: "/products/glue_bound_notebook.png",
    specs: "60 - 80 GSM / A4, A5, B5",
    moq: "MOQ 10,000 PCS"
  }
];

export function ProductSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const totalScrollableDistance = rect.height - window.innerHeight;
            
            if (totalScrollableDistance > 0) {
              const scrolled = -rect.top;
              const progress = Math.max(0, Math.min(1, scrolled / totalScrollableDistance));

              const newIndex = Math.min(
                notebookTeasers.length - 1,
                Math.floor(progress * notebookTeasers.length)
              );

              setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Outer scroll track: 200vh height allows pinned scrolling through the 6 items faster
    <section ref={containerRef} className="relative pt-20 md:pt-32 h-[200vh] bg-white dark:bg-background">
      {/* Pinned Sticky Window: stays fixed at top-24/top-28 while scrolling */}
      <div className="sticky top-24 md:top-28 h-[calc(100vh-6rem)] flex flex-col justify-center overflow-hidden">
        <Container className="space-y-6 md:space-y-8">
          <SectionHeader
            eyebrow="Our Catalog"
            title="Bulk Stationery Specifications"
            description="We manufacture a wide range of notebooks alongside a growing paper packaging vertical - combining structural durability and premium paper grades."
            action={
              <Link href="/products">
                <Button variant="outline" className="relative overflow-hidden group rounded-full px-6 font-bold border-[#0b1c3f] text-[#0b1c3f] dark:border-slate-700 dark:text-white transition-colors duration-300 cursor-pointer hover:bg-transparent">
                  <span className="absolute inset-0 bg-slate-200 dark:bg-slate-800 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full will-change-transform" />
                  <span className="relative z-10 flex items-center group-hover:text-[#0b1c3f] dark:group-hover:text-white transition-colors duration-300">
                    View All Products
                    <ArrowUpRight size={15} className="ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Button>
              </Link>
            }
          />

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Product Image Frame (Cross-fading active item) */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-100 dark:border-slate-800 shadow-lg shrink-0">
              {notebookTeasers.map((teaser, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ease-out will-change-opacity ${
                    activeIndex === idx ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95"
                  }`}
                  style={{ transitionProperty: "opacity, transform" }}
                >
                  <Image
                    src={teaser.imageUrl}
                    alt={teaser.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 42vw, 480px"
                    className="object-cover"
                    priority={idx === 0}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* Right Column: Product Items List */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Your formats
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b1c3f] dark:text-white font-serif pb-2">
                Premium Notebooks
              </h3>

              <div className="flex flex-col">
                {notebookTeasers.map((teaser, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="py-3.5 md:py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center transition-all duration-300 cursor-pointer"
                      style={{ opacity: isActive ? 1 : 0.25 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline">
                        <span className={`font-bold text-base sm:text-lg tracking-wider uppercase transition-all duration-300 ${
                          isActive 
                            ? "text-[#0b1c3f] dark:text-white font-extrabold" 
                            : "text-slate-800 dark:text-slate-200"
                        }`}>
                          {teaser.name}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 sm:ml-2 font-normal">
                          / {teaser.specs}
                        </span>
                      </div>
                      <span className={`font-bold text-xs sm:text-sm transition-colors duration-300 ${
                        isActive ? "text-[#0b1c3f] dark:text-slate-300 font-extrabold" : "text-slate-400"
                      }`}>
                        {teaser.moq}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

