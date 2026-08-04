"use client"
import * as React from "react"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  image: string
  tags?: string[]
}

export function ProductCard({ title, description, image, tags = [] }: ProductCardProps) {
  return (
    <div className="group relative rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">Image placeholder</div>
        )}
      </div>
      <div className="p-6 sm:p-8">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white dark:bg-slate-800 px-2 py-1 rounded-sm border border-slate-200 dark:border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-3 group-hover:text-[#0b1c3f] dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center text-sm font-bold text-[#0b1c3f] dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-300">
          Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}