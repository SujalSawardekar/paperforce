import { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutStory } from "./about-story";
import { AboutMissionVision } from "./about-mission-vision";
import { AboutInfrastructure } from "./about-infrastructure";
import { AboutCompliance } from "./about-compliance";
import { AboutWhyPartner } from "./about-why-partner";

export const metadata: Metadata = {
  title: "About Us & Infrastructure | Paperforce India LLP",
  description: "Learn about Paperforce India's heritage, state-of-the-art manufacturing infrastructure, and strict quality compliance for global paper stationery export.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutInfrastructure />
      <AboutCompliance />
      <AboutWhyPartner />
    </main>
  );
}
