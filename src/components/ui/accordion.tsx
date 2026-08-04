"use client"
import * as React from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

export function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-slate-200  last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 text-left text-sm sm:text-base font-semibold text-slate-900  transition-colors hover:text-[#0b1c3f]"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-1 text-sm text-slate-600  leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}