import { Metadata } from "next";
import { Container } from "@/components/common/container";
import { Cog } from "lucide-react";
import { MachineryTable } from "@/components/infrastructure/machinery-table";
import { FacilityStats } from "@/components/infrastructure/facility-stats";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure & Machinery | Paperforce India LLP",
  description: "Explore Paperforce India's 30,000 sq. ft. ISO 9001:2015 certified manufacturing facility in Palghar, Maharashtra, featuring automated converting lines and high-speed binding machinery.",
};

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 sm:pt-36 pb-24">
      <Container className="max-w-5xl mx-auto space-y-16">
        {/* Header Badge & Title */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold uppercase tracking-wider text-[#1E3261] mb-6">
            <Cog className="w-3.5 h-3.5 animate-spin text-[#1E3261]" style={{ animationDuration: "8s" }} />
            Facility & Machinery
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0b1c3f] tracking-tight mb-6">
            Infrastructure & Machineries
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-12">
            Explore our 30,000 sq. ft. ISO 9001:2015 certified manufacturing facility in Palghar,
            Maharashtra — featuring automated converting lines, high-precision ruling presses, and
            comprehensive binding machinery.
          </p>

          {/* Quick Facility Overview Badges (ISO 9001 card is inspectable on click) */}
          <FacilityStats />
        </div>

        {/* Plant Machinery Fleet Registry Table */}
        <div className="w-full pt-4">
          <div className="mb-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold uppercase tracking-wider text-[#1E3261] mb-2">
              Plant Equipment List
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f]">
              Machine List &amp; Specifications
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Active machinery inventory operating on our manufacturing floor in Palghar, Maharashtra.
            </p>
          </div>

          <MachineryTable />
        </div>
      </Container>
    </main>
  );
}
