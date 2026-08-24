import { Metadata } from "next";
import { Container } from "@/components/common/container";

export const metadata: Metadata = {
  title: "Privacy Policy | Paperforce India",
  description: "Learn how Paperforce India collects, protects, and handles your business information in compliance with trade and data regulations.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white pt-32 pb-24">
      <Container className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-[#1E3261]">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Last Updated: August 20, 2026
          </p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#1E3261]">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when requesting B2B quotes, sending catalog enquiries, or communicating via our contact forms. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (name, email address, corporate phone number)</li>
              <li>Company details (business name, registered address, GSTIN/tax identification numbers)</li>
              <li>Sourcing requirements (notebook configurations, volumes, custom branding details)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#1E3261]">2. How We Use Your Information</h2>
            <p>
              Your information is strictly utilized to process procurement inquiries, prepare commercial quotes, manage global shipping logistics through JNPT, and ensure regulatory import-export compliance. We do not sell or lease your business details to third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#1E3261]">3. Data Protection & Security</h2>
            <p>
              We implement industry-standard administrative, physical, and digital safeguards to secure your private corporate specifications and pricing tenders from unauthorized access, loss, or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-serif text-[#1E3261]">4. Contact & Compliance</h2>
            <p>
              If you have any questions regarding data handling or wish to update your business preferences, please reach out to our trade operations team at <a href="mailto:sales@paperforce.in" className="text-blue-600 hover:underline">sales@paperforce.in</a>.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
