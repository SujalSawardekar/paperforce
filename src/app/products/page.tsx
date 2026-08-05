import * as React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProductCatalog } from "@/components/products/product-catalog";
import { CustomizationSection, QualityProcessSection, CatalogueDownloadSection } from "@/components/products/additional-sections";

export default function ProductsPage() {
  return (
    <main className="flex-1 bg-white font-sans antialiased text-foreground">
      
      {/* Hero Intro */}
      <section className="pt-32 md:pt-48 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 paper-noise pointer-events-none -z-10 opacity-40 mix-blend-multiply" />
        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <ScrollReveal direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E3261] font-serif">
              Our Manufacturing Portfolio
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Explore our comprehensive range of high-volume paper stationery. From standard exercise books to premium wire-bound journals, meticulously crafted for international export.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Dynamic Catalog Section */}
      <section className="py-20 relative">
        <Container>
          <ProductCatalog />
        </Container>
      </section>

      {/* Additional Manufacturing & Export Info */}
      <CustomizationSection />
      <QualityProcessSection />
      <CatalogueDownloadSection />
      
    </main>
  );
}
