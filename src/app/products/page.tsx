import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products | Paperforce India LLP",
  description: "High-volume paper stationery manufacturer and exporter — notebooks, exercise books, spiral bound, wire-o bound, case bound, and more.",
};

const comingSoon = [
  {
    icon: <Layers className="w-5 h-5 text-[#1E3261]" />,
    title: "Full Product Catalog",
    description: "Detailed specs for center-pinned, thread-sewn, spiral, wire-o, perfect bound, and case-bound notebooks.",
  },
  {
    icon: <Package className="w-5 h-5 text-[#1E3261]" />,
    title: "Customisation Options",
    description: "Cover materials, ruling styles, paper GSM, print specs, and private label configurations.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#1E3261]" />,
    title: "Product Photography",
    description: "High-resolution imagery of each binding type and product line ready for buyer evaluation.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 sm:pt-36 pb-24">
      <Container className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold uppercase tracking-wider text-[#1E3261] mb-6">
            <Package className="w-3.5 h-3.5 text-[#1E3261]" />
            Our Products
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0b1c3f] tracking-tight mb-6">
            Products & Catalog
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
            We manufacture notebooks in pretty much every format — exercise books, spiral bound, double wire bound,
            hard cover Gally bound, centre-stitched, and glue bound. Our full catalog is being curated for launch.
          </p>

          {/* Under Construction Notice Card */}
          <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 mb-12 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-50 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-[#1E3261] shrink-0">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-serif text-[#0b1c3f]">
                    Section Under Construction
                  </h2>
                  <p className="text-sm text-slate-500">
                    Full product catalog and imagery will be published soon.
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80 shrink-0">
                In Production
              </span>
            </div>

            {/* What's Coming Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-left">
              {comingSoon.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Need product specs or samples right away?
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Our export team can share full product documentation and samples on request.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/contact">
                  <Button variant="default" size="default" className="font-bold">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Product Type Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-left">
            {[
              { label: "Center Pinned", sub: "Exercise Books" },
              { label: "Spiral Bound", sub: "Single & Double" },
              { label: "Wire-O / Wiro", sub: "Double Wire Bound" },
              { label: "Case Bound", sub: "Hard Cover Gally" },
              { label: "Perfect Bound", sub: "Glue Bound" },
              { label: "Thread Sewn", sub: "Centre Stitched" },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200/80">
                <span className="text-lg sm:text-xl font-bold font-serif text-[#0b1c3f] block">{item.label}</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">{item.sub}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ORIGINAL PRODUCTS PAGE — COMMENTED OUT (restore when catalog is ready)
   ─────────────────────────────────────────────────────────────────────────────

import * as React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EditorialCatalog } from "@/components/products/product-catalog";
import { CatalogueDownloadsSection } from "@/components/products/additional-sections";

export default function ProductsPageOriginal() {
  return (
    <main className="flex-1 bg-white font-sans antialiased text-foreground">
      
      {/* 1. Cinematic Hero Section *\/}
      <section className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 paper-noise pointer-events-none z-10 opacity-40 mix-blend-multiply" />
        
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-300/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 opacity-60" />

        <Container className="relative z-20 text-center max-w-4xl mx-auto space-y-6 mt-16">
          <ScrollReveal direction="up">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-[#1E3261] font-serif leading-[1.1]">
              Crafted for Global Brands.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto mt-6">
              High-volume paper stationery as per customized specifications since 1985
            </p>
          </ScrollReveal>
        </Container>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 z-20">
          <span className="text-xs tracking-widest uppercase font-bold text-[#1E3261] mb-2">Explore</span>
          <div className="w-px h-12 bg-[#1E3261] animate-pulse" />
        </div>
      </section>

      {/* 2. Featured & Editorial Collection Showcase *\/}
      <section className="py-24 bg-white relative">
        <Container>
          <EditorialCatalog />
        </Container>
      </section>

      {/* 3. Catalogue Downloads *\/}
      <CatalogueDownloadsSection />
      
    </main>
  );
}
─────────────────────────────────────────────────────────────────────────────*/
