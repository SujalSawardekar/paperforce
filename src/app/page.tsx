import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CorporateProfileSection } from "@/components/home/corporate-profile-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { SourcingAdvantagesSection } from "@/components/home/sourcing-advantages-section";
import { ManufacturingSection } from "@/components/home/manufacturing-section";
import { ProductSection } from "@/components/home/product-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { BlogPreviewSection } from "@/components/home/blog-preview-section";
import { Cta } from "@/components/common/cta";

function getCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "name": "Paperforce India LLP",
    "description": "B2B OEM Private Label Manufacturer supplying high-volume paper stationery globally.",
    "url": "https://paperforce.in",
  };
}

export default function HomePage() {
  const schema = getCompanySchema();

  return (
    <main className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Script
        id="company-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative pt-28 md:pt-36 pb-32 md:pb-64 isolate flex flex-col items-center">
        <div className="absolute inset-0 paper-noise pointer-events-none opacity-30 -z-10" />
        <div className="absolute inset-0 grid-mesh pointer-events-none opacity-30 -z-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[420px] bg-gradient-to-b from-[#f4f7fb]/90 via-[#f4f7fb]/70 to-transparent dark:from-slate-950/90 dark:via-slate-950/60 dark:to-transparent pointer-events-none -z-10 rounded-full blur-2xl opacity-90" />
  
        <Container className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#0b1c3f] dark:text-slate-200 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>100% Export Oriented Unit</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white font-serif drop-shadow-sm">
              Global Scale. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b1c3f] to-blue-600 dark:from-blue-400 dark:to-blue-200">
                Precision Quality.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              We are an OEM/Private Label manufacturer engineering millions of premium notebooks for the world's most demanding importers and brands.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base font-bold bg-[#0b1c3f] hover:bg-blue-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all">
                Request B2B Quote
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                Explore Infrastructure
              </Button>
            </Link>
          </ScrollReveal>
        </Container>
      </section>

      <CorporateProfileSection />
      <SourcingAdvantagesSection />
      <ProductSection />
      <CertificationsSection />
      <ManufacturingSection />
      <IndustriesSection />
      <WhyChooseSection />
      <BlogPreviewSection />
      <Cta />

    </main>
  );
}
