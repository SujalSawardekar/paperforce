"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, FileText, Download, Box, LayoutGrid, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { defaultSpecs } from "@/components/products/data";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CollectionViewProps {
  collection: any;
}

export function CollectionView({ collection }: CollectionViewProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("gallery");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : collection.images.length - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev < collection.images.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [collection.images.length, isFullscreen]);

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutGrid },
    { id: "specifications", label: "Specifications", icon: FileText },
    { id: "gallery", label: "Gallery", icon: Box },
    { id: "downloads", label: "Downloads", icon: Download },
  ];

  return (
    <div className="w-full">
      {/* Back Button */}
      <Link href="/products" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-[#1E3261] mb-6 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to All Products
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 flex flex-col relative ${
          isFullscreen ? "fixed inset-0 z-[100] rounded-none border-none h-screen" : "h-[85vh] min-h-[600px] max-h-[1000px]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:px-8 md:py-6 border-b border-border bg-slate-50/80 backdrop-blur-md">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1E3261] font-serif">{collection.name}</h1>
            <p className="text-sm text-slate-500 mt-1">{collection.description}</p>
          </div>
          {isFullscreen && (
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full transition-colors"
            >
              <Maximize2 size={20} className="rotate-180" />
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
          {/* Left Content Area (Gallery) */}
          <div className="h-[50vh] md:h-auto md:flex-1 bg-slate-100 flex flex-col min-h-0 border-r border-border">
            {/* Large Preview */}
            <div className="relative flex-1 group overflow-hidden bg-slate-200 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={collection.images[activeIndex]}
                    alt={`${collection.name} view ${activeIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : collection.images.length - 1))}
                  className="p-3 bg-white/90 hover:bg-white text-[#1E3261] rounded-full shadow-lg backdrop-blur-md transition-transform hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev < collection.images.length - 1 ? prev + 1 : 0))}
                  className="p-3 bg-white/90 hover:bg-white text-[#1E3261] rounded-full shadow-lg backdrop-blur-md transition-transform hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              {!isFullscreen && (
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white text-slate-700 rounded-lg shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Maximize2 size={18} />
                </button>
              )}
            </div>

            {/* Thumbnail Bar */}
            <div className="h-28 bg-white border-t border-border p-4 flex gap-3 overflow-x-auto">
              {collection.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative h-full aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    activeIndex === idx ? "border-[#1E3261] shadow-md ring-2 ring-[#1E3261]/20" : "border-transparent hover:border-slate-300 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Information Sidebar */}
          {!isFullscreen && (
            <div className="flex-1 md:flex-none w-full md:w-[450px] bg-white border-t md:border-t-0 flex flex-col min-h-0">
              {/* Tabs */}
              <div className="flex border-b border-border overflow-x-auto no-scrollbar bg-slate-50">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 text-sm font-semibold transition-colors border-b-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-[#1E3261] text-[#1E3261] bg-white"
                        : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-white"
                    }`}
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {activeTab === "overview" && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#1E3261] mb-2">About this Collection</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        Our {collection.name} range represents the pinnacle of high-volume paper manufacturing. 
                        Designed specifically for international distributors, wholesalers, and large-scale educational procurement.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                        <span className="text-slate-500 text-sm font-semibold">Minimum Order Qty</span>
                        <span className="text-slate-900 font-bold text-sm">{defaultSpecs.moq.split(" ")[0]} {defaultSpecs.moq.split(" ")[1]}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                        <span className="text-slate-500 text-sm font-semibold">OEM / Private Label</span>
                        <span className="text-emerald-600 font-bold text-sm flex items-center gap-1">Available</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 text-sm font-semibold">Total Renders</span>
                        <span className="text-slate-900 font-bold text-sm">{collection.images.length} High-Res Views</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "specifications" && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <SpecSection title="Available Sizes" items={defaultSpecs.sizes} />
                    <SpecSection title="Paper GSM (Inner Pages)" items={defaultSpecs.gsm} />
                    <SpecSection title="Ruling & Formats" items={defaultSpecs.ruling} />
                    <SpecSection title="Cover Options" items={defaultSpecs.covers} />
                  </div>
                )}

                {activeTab === "gallery" && (
                  <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    {collection.images.map((img: string, idx: number) => (
                      <div
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className="relative aspect-square rounded-lg overflow-hidden border border-slate-200 cursor-pointer group"
                      >
                        <Image src={img} alt={`Gallery view ${idx}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "downloads" && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="p-5 border border-slate-200 rounded-xl hover:border-[#1E3261] transition-colors group cursor-pointer bg-white">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                          <FileText size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-[#1E3261] transition-colors">{collection.name} Full Catalogue</h4>
                          <p className="text-sm text-slate-500 mt-1">PDF Document (4.2 MB) • Includes all sizes and bindings.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 border border-slate-200 rounded-xl hover:border-[#1E3261] transition-colors group cursor-pointer bg-white">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                          <FileText size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-[#1E3261] transition-colors">Technical Specification Sheet</h4>
                          <p className="text-sm text-slate-500 mt-1">PDF Document (1.1 MB) • Detailed manufacturing specs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Action */}
              <div className="p-6 bg-slate-50 border-t border-border">
                <Button 
                  size="lg" 
                  className="w-full text-base py-6 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => router.push(`/contact?interest=${collection.id}`)}
                >
                  Request a Quote for {collection.name}
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function SpecSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-md border border-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
