import * as React from "react";
import { ExportNetworkSection } from "@/components/markets/export-network-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";

export default function ReachMarketsPage() {
  return (
    <main className="flex-1 bg-white pt-16 pb-12 overflow-x-clip">
      {/* 1. Realtime Shipping Map Section (now at the top of the page) */}
      <ExportNetworkSection />

      {/* 2. Why Global Importers Choose Us Section */}
      <WhyChooseSection />
    </main>
  );
}
