"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { defaultSpecs } from "@/components/products/data";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CollectionViewProps {
  collection: any;
}

export function CollectionView({ collection }: CollectionViewProps) {
  const [galleryIndex, setGalleryIndex] = React.useState(0);
  const router = useRouter();

  return (
    <div className="w-full bg-white pb-32">
      <Container className="pt-24 md:pt-28">
        {/* Navigation back button */}
        <div className="mb-8">
          <Link 
            href="/products" 
            className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-[#1E3261] transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Collections
          </Link>
        </div>

        {/* 2-Column Grid: Left Side Image Gallery, Right Side Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Multiple product images with a changeable/selectable image gallery */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
              {/* Main Stage */}
              <div className="relative aspect-[4/3] w-full bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <Image 
                  src={collection.images[galleryIndex]} 
                  alt={`${collection.name} Render ${galleryIndex + 1}`} 
                  fill 
                  className="object-contain animate-in fade-in duration-700 p-4" 
                  key={galleryIndex}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
                
                {/* Arrow Navigation on image */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button 
                    onClick={() => setGalleryIndex(prev => prev > 0 ? prev - 1 : collection.images.length - 1)}
                    className="p-2.5 bg-white/95 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm pointer-events-auto"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} className="text-[#1E3261]" />
                  </button>
                  <button 
                    onClick={() => setGalleryIndex(prev => prev < collection.images.length - 1 ? prev + 1 : 0)}
                    className="p-2.5 bg-white/95 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm pointer-events-auto"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} className="text-[#1E3261]" />
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 shadow-sm">
                  {galleryIndex + 1} / {collection.images.length}
                </div>
              </div>
            </ScrollReveal>

            {/* Thumbnail Selectors (Film Strip) */}
            <ScrollReveal delay={0.1}>
              <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
                {collection.images.map((img: string, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => setGalleryIndex(idx)}
                    className={`relative w-24 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      galleryIndex === idx ? "border-[#1E3261] opacity-100 scale-95" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`${collection.name} Thumbnail ${idx + 1}`} fill className="object-cover" sizes="96px" />
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Product technical specifications */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1E3261]">
                {collection.name}
              </h1>
              <div className="w-16 h-1 bg-[#1E3261] mt-4 rounded-full" />
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 pt-4">
              <SpecBlock title="Available Sizes" items={defaultSpecs.sizes} delay={0.1} />
              <SpecBlock title="Paper GSM" items={defaultSpecs.gsm} delay={0.2} />
              <SpecBlock title="Binding & Covers" items={defaultSpecs.covers} delay={0.3} />
              <SpecBlock title="Ruling Formats" items={defaultSpecs.ruling} delay={0.4} />
            </div>
          </div>

        </div>
      </Container>

      {/* Action Block (Ready to source this collection? section) */}
      <Container className="pt-20">
        <div className="bg-[#1E3261] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 paper-noise mix-blend-multiply opacity-20 pointer-events-none" />
          <ScrollReveal>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">Ready to source this collection?</h3>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Download the technical specifications or request a custom quotation based on your required volume and port of destination.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Button 
                size="lg" 
                className="bg-white text-[#1E3261] hover:bg-slate-200 hover:text-[#1E3261] px-8 py-6 text-base font-bold transition-all shadow-xl hover:scale-105"
                onClick={() => router.push(`/contact?interest=${collection.id}`)}
              >
                Request Quotation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-slate-400 hover:bg-white/10 hover:border-white px-8 py-6 text-base font-bold transition-all hover:scale-105"
                onClick={() => window.dispatchEvent(new CustomEvent("open-catalogue-modal"))}
              >
                <Download size={20} className="mr-2" /> Download Catalogue
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}

function SpecBlock({ title, items, delay }: { title: string, items: string[], delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="text-base font-semibold text-[#1E3261] pb-3 border-b border-slate-100 last:border-0">
            {item}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
