import { Metadata } from "next";
import { AboutHero } from "./about-hero";
import { AboutIntro } from "./about-intro";
import { AboutTimeline } from "./about-timeline";
import { AboutCompliance } from "./about-compliance";
import { AboutMissionVision } from "./about-mission-vision";
import { ManufacturingGallery } from "./manufacturing-gallery";

export const metadata: Metadata = {
  title: "About Us & Corporate Identity | Paperforce India LLP",
  description: "Learn about Paperforce India's trade legacy, corporate mission, vision, and certified compliance practices as a global paper stationery manufacturing partner.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-clip">
      <AboutHero />
      <AboutIntro />
      <AboutTimeline />
      <AboutMissionVision />
      <ManufacturingGallery />
      <AboutCompliance />
    </main>
  );
}
