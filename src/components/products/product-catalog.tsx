"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { collections } from "./data";
import { ArrowRight, ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function ProductCatalog() {
  const router = useRouter();
  const [filter, setFilter] = React.useState("All");

  const filters = ["All", "Exercise Books", "Spiral Bound", "Double Wire Bound", "Hard Cover Gally Bound", "Centre Stitched", "Glue Bound", "Packaging", "Premium Notebooks", "Specialty Binding"];

  const filteredCollections = collections.filter((c) => filter === "All" || c.category === filter);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === f 
                ? "bg-[#1E3261] text-white shadow-md" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredCollections.map((collection) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              key={collection.id}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1E3261]/20 transition-all duration-500 flex flex-col"
              onClick={() => router.push(`/products/${collection.id}`)}
            >
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src={collection.coverImage}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
                  <span className="flex items-center gap-1.5 text-sm font-bold backdrop-blur-md bg-white/20 px-3 py-1.5 rounded-full">
                    <ImageIcon size={14} />
                    {collection.images.length} Views
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold font-serif text-[#1E3261] mb-2">{collection.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{collection.description}</p>
                <div className="flex items-center text-[#1E3261] font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  View Collection <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
