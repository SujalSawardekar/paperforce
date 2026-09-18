"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { collections, ProductCollection } from "./data";
import { cn } from "@/lib/utils";

// Lightweight fade-in reveal component
function FadeIn({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CollectionCard({ 
  collection, 
  className, 
  imagePriority = false 
}: { 
  collection: ProductCollection, 
  className?: string,
  imagePriority?: boolean 
}) {
  return (
    <Link 
      href={`/products/${collection.id}`}
      className={cn(
        "group cursor-pointer relative overflow-hidden bg-slate-50 border border-slate-200 rounded-2xl flex flex-col transition-all duration-300 hover:shadow-xl hover:border-slate-300",
        className
      )}
    >
      <div className="absolute inset-0 bg-slate-200/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
      
      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pointer-events-none">
        {collection.features?.map((feat, i) => (
          <span key={i} className="bg-white/95 backdrop-blur-sm text-[#1E3261] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm border border-slate-100">
            {feat}
          </span>
        ))}
      </div>

      <div 
        className="flex-1 w-full relative min-h-[260px] shrink-0 overflow-hidden flex items-center justify-center p-6"
        style={{ backgroundColor: collection.bgColor || "#f8fafc" }}
      >
        {collection.coverImage ? (
          <Image
            src={collection.coverImage}
            alt={collection.name}
            fill
            priority={imagePriority}
            className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-6 bg-white/80 backdrop-blur-xs border border-dashed border-slate-300 rounded-xl w-full h-full min-h-[180px]">
            <BookOpen className="w-10 h-10 text-[#1E3261]/50 mb-2" />
            <span className="text-xs font-bold text-[#1E3261]">OEM Specifications Ready</span>
            <span className="text-[11px] text-slate-500 mt-1">Product visuals coming soon</span>
          </div>
        )}
      </div>

      <div className="relative z-20 bg-white p-6 md:p-8 flex flex-col justify-start flex-1 shrink-0 h-auto min-h-min border-t border-slate-100">
        <h3 className="text-2xl font-serif font-bold text-[#1E3261] mb-2">{collection.name}</h3>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
          {collection.description}
        </p>
        <div className="flex items-center text-xs font-bold text-[#1E3261] uppercase tracking-wider group-hover:text-blue-600 transition-colors mt-auto pt-2">
          View Collection <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function EditorialCatalog() {
  // Map all 12 collections into an editorial magazine grid
  const featured = collections[0];
  const mediums = collections.slice(1, 3);
  const wideBanner = collections[3];
  const compactsA = collections.slice(4, 7);
  const showcase = collections[7];
  const finalCard = collections[8];
  const compactsB = collections.slice(9, 12);

  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-12">
      
      {/* 1. Featured Collection (Full Width Landscape) */}
      {featured && (
        <FadeIn>
          <CollectionCard 
            collection={featured} 
            imagePriority 
            className="min-h-[400px] md:min-h-[480px] flex-col md:flex-row" 
          />
        </FadeIn>
      )}

      {/* 2. Two Medium Cards (50/50 Split) */}
      {mediums.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {mediums.map((coll, i) => (
            <FadeIn key={coll.id} delay={i * 100}>
              <CollectionCard collection={coll} className="min-h-[450px] h-full" />
            </FadeIn>
          ))}
        </div>
      )}

      {/* 3. Wide Banner */}
      {wideBanner && (
        <FadeIn>
          <CollectionCard 
            collection={wideBanner} 
            className="min-h-[400px] md:min-h-[460px] flex-col md:flex-row-reverse" 
          />
        </FadeIn>
      )}

      {/* 4. Three Compact Cards (Set 1) */}
      {compactsA.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {compactsA.map((coll, i) => (
            <FadeIn key={coll.id} delay={i * 100}>
              <CollectionCard collection={coll} className="min-h-[450px] h-full" />
            </FadeIn>
          ))}
        </div>
      )}

      {/* 5. Asymmetric Showcase (2/3 and 1/3 split) */}
      {showcase && finalCard && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FadeIn className="md:col-span-2 h-full">
            <CollectionCard collection={showcase} className="min-h-[450px] md:min-h-[520px] h-full" />
          </FadeIn>
          <FadeIn delay={100} className="md:col-span-1 h-full">
            <CollectionCard collection={finalCard} className="min-h-[450px] md:min-h-[520px] h-full" />
          </FadeIn>
        </div>
      )}

      {/* 6. Three Compact Cards (Set 2: Refill, Writing Pads, Drawing & Sketch) */}
      {compactsB.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {compactsB.map((coll, i) => (
            <FadeIn key={coll.id} delay={i * 100}>
              <CollectionCard collection={coll} className="min-h-[450px] h-full" />
            </FadeIn>
          ))}
        </div>
      )}

    </div>
  );
}
