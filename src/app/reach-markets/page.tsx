import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlobalReachSection } from "@/components/home/global-reach-section";

export default function ReachMarketsPage() {
  return (
    <main className="flex-1 bg-white">
      <div className="py-24 md:py-32 relative overflow-hidden">
        <Container className="space-y-20 relative z-10">
          
          <ScrollReveal direction="up">
            <div className="space-y-6 max-w-3xl text-left">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <span>Reach & Markets</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0b1c3f] font-serif">
                Global Export Capabilities
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Strategically located in Palghar, Maharashtra, with direct access to JNPT port for seamless worldwide distribution.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
               <h2 className="text-2xl font-bold font-serif text-[#0b1c3f] mb-4">Exporting to 30+ Countries</h2>
               <p className="text-slate-600 leading-relaxed mb-6">
                 Paperforce India is a 1<span>0</span>0<span className="font-sans">%</span> Export Oriented Unit (EOU). We specialize in high-volume container shipments to North America, Europe, the Middle East, and Africa.
               </p>
               <ul className="space-y-3 text-slate-700">
                 <li className="flex items-center">
                   <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                   Full Container Load (FCL) shipments via Nhava Sheva (JNPT)
                 </li>
                 <li className="flex items-center">
                   <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                   Custom palletization meeting ISPM 15 standards
                 </li>
                 <li className="flex items-center">
                   <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                   End-to-end customs clearance and documentation support
                 </li>
               </ul>
            </div>
          </ScrollReveal>

        </Container>
      </div>

      <GlobalReachSection />
    </main>
  );
}
