"use client";

import * as React from "react";
import { CertificateModal } from "@/components/certifications/certificate-modal";

export function FacilityStats() {
  const [isCertOpen, setIsCertOpen] = React.useState(false);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-left">
        <div className="p-5 bg-white rounded-2xl border border-slate-200/80">
          <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">
            30,000
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
            Sq. Ft. Plant
          </span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200/80">
          <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">
            Palghar
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
            Maharashtra Hub
          </span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200/80">
          <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block">
            100k+
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
            Units Daily Output
          </span>
        </div>

        {/* Clickable ISO 9001 card for inspecting certificate directly - without adding any button */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsCertOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsCertOpen(true);
            }
          }}
          className="p-5 bg-white rounded-2xl border border-slate-200/80 cursor-pointer hover:border-[#1E3261]/50 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          title="Click to inspect ISO 9001:2015 Certificate"
        >
          <span className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f] block group-hover:text-[#1E3261] transition-colors">
            ISO 9001
          </span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mt-1">
            Certified Plant
          </span>
        </div>
      </div>

      <CertificateModal
        isOpen={isCertOpen}
        onClose={() => setIsCertOpen(false)}
        title="ISO 9001:2015 Quality Management System"
        subtitle="Certificate of Registration • Paperforce India LLP"
        imageUrl="/Certificate/iso_9001_2015.png"
        pdfUrl="/Certificate/ISO 9001 2015 paperforce india llp_.pdf"
      />
    </>
  );
}
