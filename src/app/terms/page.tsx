import { Metadata } from "next";
import { Container } from "@/components/common/container";

export const metadata: Metadata = {
  title: "Terms & Conditions | Paperforce India",
  description: "Review Paperforce India's official terms of service, manufacturing lead times, freight agreements, and business-to-business sourcing guidelines.",
};

export default function TermsConditionsPage() {
  return (
    <main className="flex-1 bg-white pt-32 pb-24">
      <Container className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1E3261]">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 text-sm">
            Last Updated: August 20, 2026
          </p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#1E3261]">1. B2B Sourcing Agreements</h2>
            <p>
              All orders accepted by Paperforce India LLP are subject to manufacturing capacities and material accessibility. Quotations provided through our portal remain valid for a standard duration of 30 days unless specified otherwise in the official proforma invoice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#1E3261]">2. Lead Times & Deliveries</h2>
            <p>
              Standard notebook production cycles span 25 to 35 working days from the date of final layout/artwork sign-off and receipt of deposit. Maritime shipping transit times vary by destination port via Nhava Sheva (JNPT) port gateway in Mumbai.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#1E3261]">3. Quality Standards & Auditing</h2>
            <p>
              Every production run follows verified ISO 9001 quality audits. Commercial batches are sample-inspected at multiple checkpoints (moisture, binding integrity, and ruling precision) prior to container stuffing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#1E3261]">4. Jurisdiction & Governance</h2>
            <p>
              These trade and manufacturing conditions are governed by and construed in accordance with the laws of India. Any disputes arising from B2B sourcing agreements shall be resolved exclusively in courts of competent jurisdiction in Maharashtra, India.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
