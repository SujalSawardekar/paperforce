"use client";
import * as React from "react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle2, Factory } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E3261" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>
      
      {/* Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/50 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Panel: Content & Trust */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Background Decorative Icon */}
              <div className="absolute -top-10 -left-10 opacity-[0.05] pointer-events-none">
                <Factory size={240} />
              </div>

              <ScrollReveal direction="up">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mt-4">
                  FAQ
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mt-6">
                  Clear, transparent answers to the most common questions from our global importing and distribution partners.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.1}>
                <div className="flex flex-col gap-3 py-6 border-y border-slate-200">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    Average Response &lt; 24 Hours
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    98% Buyer Satisfaction
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    10&zwnj;0+ Global Importers Served
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <Link href="/contact" className="inline-block mt-4">
                  <Button variant="default" size="lg" className="font-bold group">
                    Talk to Export Team
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Panel: Accordion */}
          <div className="lg:col-span-7">
            <div className="w-full bg-white/70 backdrop-blur-xl rounded-[32px] border border-white/50 shadow-2xl shadow-slate-200/50 p-6 sm:p-8">
              
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  
                  return (
                    <ScrollReveal key={index} direction="up" delay={index * 0.08}>
                      <div 
                        className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                          isOpen 
                            ? "bg-slate-50 border-[#1E3261]/20 shadow-md" 
                            : "bg-white border-slate-100 hover:border-[#1E3261]/40 hover:-translate-y-1 hover:shadow-lg"
                        }`}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        {/* Active Left Accent Line */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#1E3261] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} />

                        <div className="px-6 py-5 sm:px-8 sm:py-6 flex gap-4 sm:gap-6 items-start relative z-10">
                          {/* Faded Number */}
                          <div className={`font-serif text-3xl sm:text-4xl font-bold transition-colors duration-300 select-none pt-1 ${isOpen ? "text-[#1E3261]/20" : "text-slate-200 group-hover:text-[#1E3261]/10"}`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className={`text-base sm:text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? "text-[#1E3261]" : "text-slate-900 group-hover:text-[#1E3261]"}`}>
                              {faq.question}
                            </h3>
                            
                            {/* Animated Progress Indicator */}
                            <div className="h-px w-full bg-slate-200 mt-4 relative overflow-hidden">
                              <motion.div 
                                className="absolute left-0 top-0 bottom-0 bg-[#1E3261]"
                                initial={{ width: "0%" }}
                                animate={{ width: isOpen ? "100%" : "0%" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                              />
                            </div>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                >
                                  <p className="pt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                                    {faq.answer}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Circular Expand Icon */}
                          <div className={`absolute right-6 top-6 sm:right-8 w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isOpen 
                              ? "border-[#1E3261] bg-[#1E3261] text-white rotate-45" 
                              : "border-slate-200 text-slate-400 group-hover:border-[#1E3261] group-hover:text-[#1E3261]"
                          }`}>
                            <Plus size={16} strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Bottom CTA Block */}
              <ScrollReveal direction="up" delay={faqs.length * 0.08 + 0.1}>
                <div className="mt-8 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Still have questions?</h4>
                    <p className="text-sm text-slate-500 mt-1">Talk directly with our export specialists.</p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button variant="default" className="w-full sm:w-auto group font-bold">
                        Schedule a Call
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}