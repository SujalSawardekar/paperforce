"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  num: string;
  name: string;
  authority: string;
  desc: string;
  imageUrl: string;
  pdfUrl: string;
  specName: string;
  specValue: string;
}

const certificates: Certificate[] = [
  {
    num: "01",
    name: "ISO 9001:2015 Certification",
    authority: "Quality Management Systems (QMS)",
    desc: "Official certification for quality management systems covering the design, manufacturing, and export of notebooks and paper stationery, ensuring consistent production parameters.",
    imageUrl: "/Certificate/iso_9001_2015.png",
    pdfUrl: "/Certificate/ISO 9001 2015 paperforce india llp_.pdf",
    specName: "Certificate Standard",
    specValue: "ISO 9001:2015 (Quality Standard)"
  },
  {
    num: "02",
    name: "FIEO Registration",
    authority: "Federation of Indian Export Organisations",
    desc: "Registration-cum-Membership Certificate (RCMC) officially recognizing Paperforce India LLP as a registered member exporter with direct integration in government export frameworks.",
    imageUrl: "/Certificate/fieo_registration.png",
    pdfUrl: "/Certificate/FIEO Registration (valid Till 31M27)_unlocked.pdf",
    specName: "Export Authority",
    specValue: "Federation of Indian Export Organisations (Govt. of India)"
  },
  {
    num: "03",
    name: "IEC Registration",
    authority: "Directorate General of Foreign Trade (DGFT)",
    desc: "Authorized Import-Exporter Code (IEC) issued by the Ministry of Commerce & Industry, Government of India, enabling global freight shipment clearances.",
    imageUrl: "/Certificate/iec_registration.png",
    pdfUrl: "/Certificate/IEC _ ABJFP7297A.pdf",
    specName: "DGFT Code",
    specValue: "IEC: ABJFP7297A"
  },
  {
    num: "04",
    name: "Udyam Registration",
    authority: "Ministry of Micro, Small & Medium Enterprises",
    desc: "Official Udyam MSME manufacturing registration certificate issued by the Government of India, verifying industrial factory operations and compliance status.",
    imageUrl: "/Certificate/udyam_registration.png",
    pdfUrl: "/Certificate/Print _ Udyam Registration Certificate-1.pdf",
    specName: "MSME Ministry",
    specValue: "Udyam Registration Certificate"
  }
];

export function CertificationsViewer() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isZoomed, setIsZoomed] = React.useState(false);
  const activeCert = certificates[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-2 pb-12 md:pt-4 md:pb-24 bg-white relative">
      <Container className="max-w-7xl mx-auto space-y-16">
        
        {/* Visual Archive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch mt-8">
          
          {/* Left Column: Index & Document Metadata (Takes up 6 columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#1E3261] block border-b border-slate-100 pb-3">
                Official Document Index
              </span>

              {/* List Selector */}
              <div className="flex flex-col">
                {certificates.map((cert, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="py-4 border-b border-slate-100 flex justify-between items-center text-left transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-center space-x-6">
                        <span className={`text-xs md:text-sm font-semibold tracking-wider font-mono transition-colors duration-300 ${
                          isActive ? "text-[#1E3261] font-bold" : "text-slate-400"
                        }`}>
                          {cert.num}
                        </span>
                        <span className={`text-base md:text-lg font-bold font-serif transition-colors duration-300 ${
                          isActive ? "text-[#1E3261]" : "text-slate-700 group-hover:text-slate-900"
                        }`}>
                          {cert.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1E3261]" />
                        )}
                        <ChevronRight 
                          size={16} 
                          className={`transition-transform duration-300 ${
                            isActive ? "text-[#1E3261] translate-x-0.5" : "text-slate-300 group-hover:text-slate-500"
                          }`} 
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Certificate Details Panel */}
            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-slate-100 space-y-6 shadow-sm">
              <div className="space-y-2 border-b border-slate-200/60 pb-4">
                <span className="text-[10px] font-bold tracking-widest text-[#1E3261] uppercase block">
                  {activeCert.specValue}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900 leading-snug">
                  {activeCert.name}
                </h3>
                <p className="text-xs text-slate-400 font-semibold font-mono mt-1">
                  Authority: {activeCert.authority}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCert.desc}
              </p>

              {/* B2B Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a 
                  href={activeCert.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button variant="default" className="w-full sm:w-auto font-bold px-6 h-10">
                    <Download size={14} className="mr-2" />
                    Download Official PDF
                  </Button>
                </a>
                <Button 
                  onClick={() => setIsZoomed(true)}
                  variant="outline" 
                  className="flex-1 sm:flex-none w-full sm:w-auto font-bold border-slate-300 px-6 h-10"
                >
                  <ZoomIn size={14} className="mr-2" />
                  Inspect Document
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Document Visual Preview (Takes up 6 columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between border border-slate-100 bg-[#FAF9F5] rounded-[28px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden group order-1 lg:order-2">
            
            {/* Header Control Bar */}
            <div className="flex items-center justify-between border-b border-slate-200/50 pb-4 mb-6 z-10">
              <span className="text-[10px] font-semibold font-mono text-slate-500 uppercase tracking-widest">
                Certificate Preview {activeCert.num}/04
              </span>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer shadow-sm transition-colors"
                  aria-label="Previous Certificate"
                >
                  <ChevronLeft size={14} />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer shadow-sm transition-colors"
                  aria-label="Next Certificate"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Document Frame */}
            <div className="flex-1 flex items-center justify-center p-4">
              <div 
                onClick={() => setIsZoomed(true)}
                className="relative bg-white border border-slate-200/80 shadow-[0_12px_45px_rgba(30,50,97,0.06)] rounded-2xl p-4 flex items-center justify-center w-full max-w-[360px] aspect-[1/1.414] overflow-hidden cursor-zoom-in group-hover:shadow-[0_16px_55px_rgba(30,50,97,0.1)] transition-shadow duration-500"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-4"
                  >
                    <Image 
                      src={activeCert.imageUrl}
                      alt={`Paperforce official ${activeCert.name} document preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Visual hover inspect overlay */}
                <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md">
                    <ZoomIn size={18} className="text-[#1E3261]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-note */}
            <div className="text-center text-[10px] text-slate-400 font-semibold uppercase mt-6 pt-4 border-t border-slate-200/50 z-10">
              Click inspect for full-screen view
            </div>

          </div>

        </div>
      </Container>

      {/* Full-screen Lightbox Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex flex-col items-center justify-center p-4 sm:p-6"
            onClick={() => setIsZoomed(false)}
          >
            <div className="absolute top-4 right-4 flex items-center space-x-3 z-[110]">
              <a 
                href={activeCert.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <Download size={20} />
              </a>
              <button 
                onClick={() => setIsZoomed(false)}
                className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl h-[85vh] bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 sm:p-8 flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image 
                  src={activeCert.imageUrl}
                  alt={`Full size view of ${activeCert.name}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
