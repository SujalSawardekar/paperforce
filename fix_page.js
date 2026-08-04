const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!c.includes('import * as React from')) {
const imports = `import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "@/components/home/hero-mockup";
import { CorporateProfileSection } from "@/components/home/corporate-profile-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { SourcingAdvantagesSection } from "@/components/home/sourcing-advantages-section";
import { ManufacturingSection } from "@/components/home/manufacturing-section";
import { ProductSection } from "@/components/home/product-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { GlobalReachSection } from "@/components/home/global-reach-section";
import { FaqSection } from "@/components/home/faq-section";
import { BlogPreviewSection } from "@/components/home/blog-preview-section";
import { SectionHeader } from "@/components/ui/section-header";

function getCompanySchema() {
  return {};
}

export default function HomePage() {
`;

  fs.writeFileSync('src/app/page.tsx', imports + c);
}
