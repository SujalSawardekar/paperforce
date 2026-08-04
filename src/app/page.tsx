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

      <section className="relative pt-28 md:pt-40 pb-20 md:pb-32 isolate overflow-hidden">
        {/* Background textures */}
        <div className="absolute inset-0 paper-noise pointer-events-none -z-10" />
        <div className="absolute inset-0 grid-mesh pointer-events-none -z-10" />
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] dreamy-glow-navy pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] dreamy-glow-grey pointer-events-none -z-10" />

        <Container className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
          {/* Eyebrow */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#E5E7EB] px-4 py-2 rounded-full shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E3261] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E3261]" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#1E3261]">
                B2B OEM Private Label Manufacturer
              </span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up" delay={0.2} className="w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#111827] leading-[1.08] font-serif">
              Premium Paper
              <br className="hidden md:block" />
              <span className="text-[#1E3261]">Stationery</span>
              <br className="hidden md:block" />
              Crafted for the World.
            </h1>
          </ScrollReveal>

          {/* Sub-headline */}
          <ScrollReveal direction="up" delay={0.3} className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-[#6B7280] leading-relaxed">
              A decade of hands-on manufacturing and export experience. Three decades of paper logistics heritage. One dependable partner for your bulk notebook sourcing.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/products">
                <Button size="lg" className="bg-[#1E3261] hover:bg-[#1E3261]/90 text-white border-none">Explore Our Products &rarr;</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-white border-[#E5E7EB] text-[#1E3261] hover:bg-slate-50">Partner with Us</Button>
              </Link>
            </div>
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
