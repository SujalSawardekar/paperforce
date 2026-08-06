import * as React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EditorialCatalog } from "@/components/products/product-catalog";
import { 
  ProductPhilosophy, 
  ManufacturingProcess, 
  OemPrivateLabelSection, 
  QualityAssuranceSection, 
  CatalogueDownloadsSection
} from "@/components/products/additional-sections";

export default function ProductsPage() {
  return (
    <main className="flex-1 bg-white font-sans antialiased text-foreground">
      
      {/* 1. Cinematic Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center pt-24 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 paper-noise pointer-events-none z-10 opacity-40 mix-blend-multiply" />
        
        {/* Soft abstract lighting/shadows in background to simulate premium paper renders */}
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
              Premium Notebook Manufacturing Since 1985
            </p>
          </ScrollReveal>
        </Container>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 z-20">
          <span className="text-xs tracking-widest uppercase font-bold text-[#1E3261] mb-2">Explore</span>
          <div className="w-px h-12 bg-[#1E3261] animate-pulse" />
        </div>
      </section>

      {/* 2. Product Philosophy */}
      <ProductPhilosophy />

      {/* 3 & 4. Featured & Editorial Collection Showcase */}
      <section className="py-24 bg-white relative">
        <Container>
          <EditorialCatalog />
        </Container>
      </section>

      {/* 5. Manufacturing Process */}
      <ManufacturingProcess />

      {/* 6. OEM & Private Label */}
      <OemPrivateLabelSection />

      {/* 7. Quality Assurance */}
      <QualityAssuranceSection />

      {/* 8. Catalogue Downloads */}
      <CatalogueDownloadsSection />
      
    </main>
  );
}
