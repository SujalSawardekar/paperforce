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
import { GlobalReachSection } from "@/components/home/global-reach-section";
import { HomeFaqSection } from "@/components/home/faq-section";

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

      <section className="relative pt-28 md:pt-36 pb-32 md:pb-64 isolate flex flex-col items-center bg-[#1E3261] text-white">
        <div className="absolute inset-0 paper-noise pointer-events-none opacity-30 -z-10" />
        <div className="absolute inset-0 grid-mesh pointer-events-none opacity-30 -z-10 mix-blend-overlay" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[420px] bg-gradient-to-b from-[#2A4480]/90 via-[#2A4480]/70 to-transparent pointer-events-none -z-10 rounded-full blur-2xl opacity-90" />
  
        <Container className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              100% Export Oriented Unit
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] font-serif">
              Premium Paper
              <br className="hidden md:block" />
              <span className="text-[#60A5FA]">Stationery</span>
              <br className="hidden md:block" />
              Crafted for the World.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3} className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed">
              A decade of hands-on manufacturing and export experience. Three decades of paper logistics heritage. One dependable partner for your bulk notebook sourcing.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base font-bold bg-[#0b1c3f] hover:bg-blue-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all">
                Request B2B Quote
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-slate-300  text-slate-700  rounded-full hover:bg-slate-50 transition-all bg-white/50  backdrop-blur-sm">
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
      {/* 5.3 Global Reach & Logistics */}
      <GlobalReachSection />

      {/* 6. B2B Sourcing FAQ Accordion Section */}
      <HomeFaqSection />

      <BlogPreviewSection />
    </main>
  );
}
