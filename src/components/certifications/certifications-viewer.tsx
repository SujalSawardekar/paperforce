"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { CertificateModal } from "@/components/certifications/certificate-modal";

interface Certificate {
  num: string;
  name: string;
  desc: string;
  imageUrl: string;
  pdfUrl?: string;
}

const certificates: Certificate[] = [
  {
    num: "01",
    name: "MSMED Registration",
    desc: "A Government of India registration confirming that Paperforce operates as a certified small-to-medium manufacturing enterprise.",
    imageUrl: "/Certificate/udyam_registration.png",
    pdfUrl: "/Certificate/Print _ Udyam Registration Certificate-1.pdf",
  },
  {
    num: "02",
    name: "IEC Certificate",
    desc: "An import-export recognized license issued by the Government authorizing Paperforce India LLP to legally import or export goods.",
    imageUrl: "/Certificate/iec_registration.png",
    pdfUrl: "/Certificate/IEC _ ABJFP7297A.pdf",
  },
  {
    num: "03",
    name: "ISO 9001:2015 Certified",
    desc: "ISO 9001:2015 is the globally recognized standard for quality management systems, confirming that Paperforce follows defined quality processes from design and manufacturing through final dispatch.",
    imageUrl: "/Certificate/iso_9001_2015.png",
    pdfUrl: "/Certificate/ISO 9001 2015 paperforce india llp_.pdf",
  },
  {
    num: "04",
    name: "FIEO Member",
    desc: "Paperforce is a recognized member of India’s official export community, meeting the standards required for cross-border trade credibility.",
    imageUrl: "/Certificate/fieo_registration.png",
    pdfUrl: "/Certificate/FIEO Registration (valid Till 31M27)_unlocked.pdf",
  },
];

export function CertificationsViewer() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isInspectOpen, setIsInspectOpen] = React.useState(false);
  const activeCert = certificates[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-2 pb-12 md:pt-4 md:pb-24 bg-white relative">
      <h1 className="sr-only">Official Compliance &amp; Certifications</h1>
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
            <div className="p-8 rounded-3xl bg-white border border-slate-100 space-y-4 shadow-sm">
              <div className="space-y-2 border-b border-slate-200/60 pb-4">
                <span className="text-[10px] font-bold tracking-widest text-[#1E3261] uppercase block font-sans">
                  Official Certification • {activeCert.num} of 04
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900 leading-snug">
                  {activeCert.name}
                </h3>
              </div>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans">
                {activeCert.desc}
              </p>
            </div>
          </div>

          {/* Right Column: Premium Document Visual Preview (Takes up 6 columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between border border-slate-100 bg-white rounded-[28px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden group order-1 lg:order-2">
            
            {/* Header Control Bar */}
            <div className="flex items-center justify-between border-b border-slate-200/50 pb-4 mb-6 z-10">
              <span className="text-[10px] font-bold font-sans text-slate-500 uppercase tracking-widest">
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

            {/* Document Frame - Click to inspect directly without adding extra button */}
            <div className="flex-1 flex items-center justify-center p-4">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setIsInspectOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsInspectOpen(true);
                  }
                }}
                className="relative bg-white border border-slate-200/80 shadow-[0_12px_45px_rgba(30,50,97,0.06)] rounded-2xl p-4 flex items-center justify-center w-full max-w-[360px] aspect-[1/1.414] overflow-hidden cursor-zoom-in hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
                title={`Click to inspect ${activeCert.name}`}
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
              </div>
            </div>

          </div>

        </div>
      </Container>

      {/* Inspect Certificate Modal */}
      <CertificateModal
        isOpen={isInspectOpen}
        onClose={() => setIsInspectOpen(false)}
        title={activeCert.name}
        subtitle={activeCert.desc}
        imageUrl={activeCert.imageUrl}
        pdfUrl={activeCert.pdfUrl}
      />
    </section>
  );
}
