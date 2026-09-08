import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Cog, Video, Building2, ArrowRight, ShieldCheck, Cpu, Layers } from "lucide-react";
import { MachineryTable } from "@/components/infrastructure/machinery-table";

export const metadata: Metadata = {
  title: "Manufacturing Infrastructure & Machinery Fleet | Paperforce India LLP",
  description: "Explore Paperforce India's 30,000 sq. ft. ISO 9001:2015 certified manufacturing facility in Palghar, Maharashtra, featuring an active fleet of 41 specialized production, converting, and binding machines.",
};

const facilityHighlights = [
  {
    icon: <Cpu className="w-5 h-5 text-[#1E3261]" />,
    title: "High-Speed Converting Lines",
    description: "Automated reel-to-sheet conversion, multi-color high-precision ruling presses (with perforation), and automated counting.",
  },
  {
    icon: <Cog className="w-5 h-5 text-[#1E3261]" />,
    title: "Complete Binding Spectrum",
    description: "Equipped for center-pinning, thread sewing, spiral & wire-o forming, perfect binding, and hard press punching.",
  },
  {
    icon: <Layers className="w-5 h-5 text-[#1E3261]" />,
    title: "Automated Finishing & Packing",
    description: "In-line back-squaring, corner rounding, automatic carton packing, strapping lines, and heavy-duty hydraulic press operations.",
  },
  {
    icon: <Building2 className="w-5 h-5 text-[#1E3261]" />,
    title: "Palghar Hub Logistics Proximity",
    description: "Strategic location near Nhava Sheva (JNPT) port for rapid container stuffing, customs clearance, and global ocean freight dispatch.",
  },
];

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 sm:pt-36 pb-24">
      <Container className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold uppercase tracking-wider text-[#1E3261] mb-6">
            <Cog className="w-3.5 h-3.5 animate-spin text-[#1E3261]" style={{ animationDuration: "12s" }} />
            Plant &amp; Machinery Fleet
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0b1c3f] tracking-tight mb-5">
            Infrastructure &amp; Machineries
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A comprehensive look at our 30,000 sq. ft. ISO 9001:2015 certified manufacturing 
            facility in Palghar, Maharashtra — featuring 41 operational machines engineered for 
            precision ruling, binding, finishing, and high-volume export fulfillment.
          </p>
        </div>

        {/* Quick Facility Overview Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#1E3261]/30 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">30,000</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">Sq. Ft. Plant</span>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#1E3261]/30 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">28 / 41</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">Types / Installed Units</span>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#1E3261]/30 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">100k+</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">Daily Output Units</span>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#1E3261]/30 transition-colors">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">ISO 9001</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">Certified Facility</span>
          </div>
        </div>

        {/* Machine List Table */}
        <div className="pt-2">
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0b1c3f]">
              Plant Machinery Fleet Registry
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Complete inventory of specialized production machinery operating on our manufacturing floor.
            </p>
          </div>
          <MachineryTable />
        </div>

        {/* Manufacturing Capabilities Grid */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 block mb-2">
              Engineering Advantages
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f]">
              Integrated Factory Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {facilityHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1 font-serif">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plant Inquiry / Audit CTA */}
        <div className="bg-gradient-to-br from-[#1E3261] to-[#0f1b38] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Technical Factory Audits Welcome
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Require Custom Tooling or Machine Specs?
              </h3>
              <p className="text-sm text-blue-100/80 leading-relaxed">
                We accommodate buyer-specified rulings, specialized perforation, custom sizes, 
                and private label tooling. Connect directly with our plant operations team.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link href="/contact">
                <Button className="bg-white text-[#1E3261] hover:bg-blue-50 font-bold px-6 h-11 text-sm shadow-md cursor-pointer">
                  Request Plant Audit / Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
