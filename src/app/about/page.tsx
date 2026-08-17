import { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutIntro } from "./about-intro";
import { AboutStory } from "./about-story";
import { AboutTimeline } from "./about-timeline";
import { ManufacturingGallery } from "./manufacturing-gallery";
import { AboutInfrastructure } from "./about-infrastructure";
import { AboutCompliance } from "./about-compliance";
import { AboutMissionVision } from "./about-mission-vision";
import { AboutWhyPartner } from "./about-why-partner";
import { CertificationsSection } from "@/components/home/certifications-section";

export const metadata: Metadata = {
  title: "About Us & Infrastructure | Paperforce India LLP",
  description: "Learn about Paperforce India's heritage, state-of-the-art manufacturing infrastructure, and strict quality compliance for global paper stationery export.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutTimeline />
      <ManufacturingGallery />
      <AboutInfrastructure />
      <AboutCompliance />
      <AboutMissionVision />
      <AboutWhyPartner />
      <CertificationsSection />
    </main>
  );
}
