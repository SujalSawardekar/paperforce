import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Cog, Video, Building2, ArrowRight, ShieldCheck, Cpu, PlayCircle } from "lucide-react";
import { MachineryTable } from "@/components/infrastructure/machinery-table";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure & Machinery | Paperforce India LLP",
  description: "Explore Paperforce India's 30,000 sq. ft. ISO 9001:2015 certified manufacturing facility in Palghar, Maharashtra, featuring automated converting lines and high-speed binding machinery.",
};

const upcomingHighlights = [
  {
    icon: <Cpu className="w-6 h-6 text-[#1E3261]" />,
    title: "High-Speed Converting Lines",
    description: "Automated reel-to-sheet cutting, multi-color high-precision ruling presses, and automated counting.",
  },
  {
    icon: <Cog className="w-6 h-6 text-[#1E3261]" />,
    title: "Comprehensive Machinery Fleet",
    description: "Detailed machinery specifications for center-pinning, thread sewing, spiral, wire-o, perfect binding, and case-making.",
  },
  {
    icon: <Video className="w-6 h-6 text-[#1E3261]" />,
    title: "Video Facility Tours",
    description: "High-definition video walkthroughs of our 30,000 sq. ft. conversion plant, quality labs, and dispatch logistics.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#1E3261]" />,
    title: "Palghar Manufacturing Hub",
    description: "Strategic proximity to Nhava Sheva (JNPT) port for rapid container loading and export fulfillment.",
  },
];

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 sm:pt-36 pb-24">
      <Container className="max-w-5xl mx-auto space-y-16">
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold uppercase tracking-wider text-[#1E3261] mb-6">
            <Cog className="w-3.5 h-3.5 animate-spin text-[#1E3261]" style={{ animationDuration: "8s" }} />
            Facility & Machinery
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0b1c3f] tracking-tight mb-6">
            Infrastructure & Machineries
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
            We are curating an exhaustive showcase of our 30,000 sq. ft. ISO 9001:2015 certified 
            facility in Palghar, Maharashtra — featuring machine specifications, technical capacities, 
            and upcoming video facility tours.
          </p>

          {/* Under Construction Notice Card */}
          <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-12 mb-12 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-50 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-[#1E3261] shrink-0">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold font-serif text-[#0b1c3f]">
                    Section Under Construction
                  </h2>
                  <p className="text-sm text-slate-500">
                    Comprehensive machinery specs and video tours will be published soon.
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80 shrink-0">
                In Production
              </span>
            </div>

            {/* What's Coming Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 text-left">
              {upcomingHighlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Temporary Inquiry Block */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Need an immediate facility audit or plant machinery list?
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Our engineering and export dispatch team can provide detailed documentation on request.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/contact">
                  <Button variant="default" size="default" className="font-bold">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Facility Overview Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-left">
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">30,000</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">Sq. Ft. Plant</span>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">Palghar</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">Maharashtra Hub</span>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">100k+</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">Units Daily Output</span>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80">
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">ISO 9001</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">Certified Plant</span>
            </div>
          </div>
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
