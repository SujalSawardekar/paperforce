"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const galleryItems = [
  {
    id: "exterior",
    title: "Factory Exterior",
    subtitle: "Palghar, Maharashtra",
    src: "/products/WhatsApp Image 2026-07-31 at 18.41.15.jpeg", // Placeholder
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "production",
    title: "Production Floor",
    subtitle: "High-Volume Lines",
    src: "/products/WhatsApp Image 2026-07-31 at 18.41.15 (1).jpeg", // Placeholder
    span: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    id: "machines",
    title: "Automated Machines",
    subtitle: "Precision Cutting",
    src: "/products/WhatsApp Image 2026-07-31 at 18.41.16.jpeg", // Placeholder
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "printing",
    title: "Printing Process",
    subtitle: "CMYK & Spot Colors",
    src: "/products/WhatsApp Image 2026-07-31 at 18.41.16 (1).jpeg", // Placeholder
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "quality",
    title: "Quality Inspection",
    subtitle: "AQL Standards",
    src: "/products/WhatsApp Image 2026-07-31 at 18.41.17 (1).jpeg", // Placeholder
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: "packaging",
    title: "Packaging",
    subtitle: "Export Ready",
    src: "/products/WhatsApp Image 2026-07-31 at 18.41.16 (2).jpeg", // Placeholder
    span: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    id: "warehouse",
    title: "Warehouse",
    subtitle: "Climate Controlled",
    src: "/products/WhatsApp Image 2026-07-31 at 18.41.17.jpeg", // Placeholder
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: "loading",
    title: "Container Loading",
    subtitle: "FOB Dispatches",
    src: "/products/WhatsApp Image 2026-07-31 at 18.41.18.jpeg", // Placeholder
    span: "col-span-1 md:col-span-2 row-span-1",
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export function ManufacturingGallery() {
  return (
    <div className="w-full">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4 sm:gap-6"
      >
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className={cn(
              "group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900",
              item.span
            )}
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
            
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 z-0"
              sizes="(max-width: 768px) 100vw, 50vw"
              onLoad={(e) => {
                // Remove pulse animation once image loads
                (e.target as HTMLElement).previousElementSibling?.classList.remove('animate-pulse');
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

            {/* Hover Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="inline-block px-3 py-1 mb-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.subtitle}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-serif text-xl sm:text-2xl font-bold leading-none drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
            
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

