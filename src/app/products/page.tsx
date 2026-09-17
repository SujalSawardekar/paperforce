import * as React from "react";
import { Metadata } from "next";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EditorialCatalog } from "@/components/products/product-catalog";
import { CatalogueDownloadsSection } from "@/components/products/additional-sections";

export const metadata: Metadata = {
  title: "Products & Catalog | Paperforce India LLP",
  description:
    "High-volume paper stationery manufacturer and exporter — explore our full product collections including spiral notebooks, composition books, hard bound, and more.",
};

export default function ProductsPage() {
  return (
    <main className="flex-1 bg-white font-sans antialiased text-foreground">
      {/* 1. Cinematic Hero Section */}
      <section className="min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 paper-noise pointer-events-none z-10 opacity-40 mix-blend-multiply" />

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-200/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-300/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 opacity-60" />

        <Container className="relative z-20 text-center max-w-4xl mx-auto space-y-6">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold uppercase tracking-wider text-[#1E3261] mb-4">
              Export Quality Stationery
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#1E3261] font-serif leading-[1.1]">
              Crafted for Global Brands.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mt-4">
              High-volume paper stationery manufactured to custom international specifications since 1985.
            </p>
          </ScrollReveal>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 z-20">
          <span className="text-[10px] tracking-widest uppercase font-bold text-[#1E3261] mb-2">Explore</span>
          <div className="w-px h-8 bg-[#1E3261] animate-pulse" />
        </div>
      </section>

      {/* 2. Featured & Editorial Collection Showcase */}
      <section className="py-16 md:py-24 bg-white relative">
        <Container>
          <EditorialCatalog />
        </Container>
      </section>

      {/* 3. Catalogue Downloads */}
      <CatalogueDownloadsSection />
    </main>
  );
}
