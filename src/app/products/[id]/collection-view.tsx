"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, FileText, Download, PenTool, Factory, Box } from "lucide-react";
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
      
      {/* 1. Cinematic Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-slate-100">
        <Image 
          src={collection.coverImage} 
          alt={collection.name} 
          fill 
          priority
          className="object-cover" 
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        
        {/* Navigation back button */}
        <div className="absolute top-8 left-4 md:left-8 z-10">
          <Link href="/products" className="inline-flex items-center text-sm font-bold text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
            <ArrowLeft size={16} className="mr-2" /> All Collections
          </Link>
        </div>

        {/* Hero Title */}
        <div className="absolute bottom-12 left-4 md:left-12 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight">
              {collection.name}
            </h1>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. Collection Overview */}
      <Container className="pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1E3261]">
              Engineered for Volume. <br className="hidden md:block" />
              Crafted for Retail.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {collection.description} Every product in this set is manufactured with rigorous export-grade quality control, ready to be deployed across global distribution channels.
            </p>
          </ScrollReveal>
        </div>
      </Container>

      {/* 3. Horizontal Product Gallery */}
      <div className="bg-slate-50 py-24">
        <Container>
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold font-serif text-[#1E3261]">Detailed Renders</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setGalleryIndex(prev => prev > 0 ? prev - 1 : collection.images.length - 1)}
                  className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <ChevronLeft size={20} className="text-[#1E3261]" />
                </button>
                <button 
                  onClick={() => setGalleryIndex(prev => prev < collection.images.length - 1 ? prev + 1 : 0)}
                  className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <ChevronRight size={20} className="text-[#1E3261]" />
                </button>
              </div>
            </div>
            
            {/* Main Stage */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6">
               <Image 
                  src={collection.images[galleryIndex]} 
                  alt={`Render ${galleryIndex + 1}`} 
                  fill 
                  className="object-contain animate-in fade-in duration-700" 
                  key={galleryIndex}
               />
               <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold text-slate-500 shadow-sm">
                 {galleryIndex + 1} / {collection.images.length}
               </div>
            </div>

            {/* Film Strip */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
              {collection.images.map((img: string, idx: number) => (
                <button 
                  key={idx} 
                  onClick={() => setGalleryIndex(idx)}
                  className={`relative w-40 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    galleryIndex === idx ? "border-[#1E3261] opacity-100" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" sizes="160px" />
                </button>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </div>

      {/* 4. Specifications */}
      <Container className="py-24">
        <ScrollReveal>
          <h3 className="text-3xl font-bold font-serif text-[#1E3261] mb-12 border-b border-slate-200 pb-4">Technical Specifications</h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          <SpecBlock title="Available Sizes" items={defaultSpecs.sizes} delay={0} />
          <SpecBlock title="Paper GSM" items={defaultSpecs.gsm} delay={0.1} />
          <SpecBlock title="Binding & Covers" items={defaultSpecs.covers} delay={0.2} />
          <SpecBlock title="Ruling Formats" items={defaultSpecs.ruling} delay={0.3} />
        </div>
      </Container>

      {/* 5. OEM & Packaging Split */}
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal delay={0}>
            <div className="bg-slate-50 p-10 rounded-2xl h-full border border-slate-100">
              <PenTool size={32} className="text-[#1E3261] mb-6" />
              <h4 className="text-2xl font-bold font-serif text-[#1E3261] mb-4">OEM & Private Label</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                We manufacture this collection completely under your brand. Cover designs, watermarks, internal branding, and custom packaging are fully adaptable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><Factory size={16} className="text-blue-600" /> Custom GSM & Paper Tone</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><Factory size={16} className="text-blue-600" /> Advanced Cover Finishes (Foil, UV)</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-slate-50 p-10 rounded-2xl h-full border border-slate-100">
              <Box size={32} className="text-[#1E3261] mb-6" />
              <h4 className="text-2xl font-bold font-serif text-[#1E3261] mb-4">Export Ready Packaging</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                Palletized and packed for maximum container capacity. We ensure zero transit damage and retail-ready unboxing for your distributors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-700 font-medium"><Factory size={16} className="text-blue-600" /> Shrink-wrapped in 5/10 sets</li>
                <li className="flex items-center gap-3 text-slate-700 font-medium"><Factory size={16} className="text-blue-600" /> Barcoded Master Cartons</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* 6. Action Block (Downloads & Quote) */}
      <Container className="py-24">
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
                onClick={() => window.open("/PaperForce%20Catalogue.pdf", "_blank")}
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
      <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="text-lg font-medium text-[#1E3261] pb-4 border-b border-slate-100 last:border-0">
            {item}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
