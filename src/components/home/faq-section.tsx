"use client"
import * as React from "react"
import { AccordionItem } from "@/components/ui/accordion"

interface Faq {
  question: string
  answer: string
}

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
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
  )
}