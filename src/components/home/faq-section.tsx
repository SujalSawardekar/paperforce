"use client";
import * as React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AccordionItem } from "@/components/ui/accordion";

// FAQ data per Content Draft §1 and buyer Q&A for B2B importers
const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our MOQ is generally 10,000 pieces per SKU for most notebook types. For certain premium bindings (hard cover Gally bound, double wire), MOQ is 5,000 pieces. We are happy to discuss your specific requirements and volume needs."
  },
  {
    question: "Do you accept private label / OEM orders?",
    answer: "Yes. Paperforce India is a 100% Export Oriented Unit (EOU) and we specialize in private label and OEM manufacturing. We can produce notebooks to your exact specifications — cover design, paper grade, ruling, binding type, and packaging."
  },
  {
    question: "Which countries do you currently export to?",
    answer: "We currently export to the USA, United Kingdom, Saudi Arabia, UAE, Oman, Bahrain, West Africa (Nigeria, Ghana and surrounding markets), and Latin America. All shipments are dispatched via Nhava Sheva (JNPT), India's largest container port."
  },
  {
    question: "What quality standards do you maintain?",
    answer: "Every shipment undergoes a rigorous Acceptable Quality Limit (AQL) inspection before dispatch — covering sheet count, moisture content, ruling alignment, binding strength, and packaging integrity. We follow ANSI/ASQ Z1.4 quality sampling standards."
  },
  {
    question: "How long does production and delivery take?",
    answer: "Standard production lead time is 25–35 working days from approved artwork and confirmed order. Transit time varies by destination (typically 18–28 days by sea). We can provide a tailored production schedule for your order."
  },
  {
    question: "Can I request a sample before placing a bulk order?",
    answer: "Yes. We can arrange physical samples of our standard product range. Custom samples (with your branding or specifications) are available for a nominal fee that is credited toward your first bulk order."
  }
];

export function HomeFaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-[#F5F7FA]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Header */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="eyebrow mb-4">FAQs</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111827] leading-tight mt-4">
                Frequently Asked<br />
                <span className="text-[#1E3261]">Questions</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base text-[#6B7280] leading-relaxed mt-6 max-w-sm">
                Common questions from importers and buyers about sourcing notebooks from Paperforce India.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Accordion */}
          <ScrollReveal direction="up" delay={0.2} className="lg:col-span-8">
            <div className="w-full bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  title={faq.question}
                  content={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}