"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageUrl: string;
  pdfUrl?: string;
}

export function CertificateModal({
  isOpen,
  onClose,
  title,
  subtitle,
  imageUrl,
  pdfUrl,
}: CertificateModalProps) {
  const [isZoomed, setIsZoomed] = React.useState(false);

  // Close on Escape key press & prevent body scroll when open
  React.useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-slate-100 bg-slate-50/70">
              <div className="pr-4">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#1E3261] block">
                  Document Inspection
                </span>
                <h3 className="text-base sm:text-lg font-bold font-serif text-[#0b1c3f] leading-snug">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {subtitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  title={isZoomed ? "Reset Zoom" : "Zoom In"}
                  aria-label={isZoomed ? "Reset Zoom" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  aria-label="Close certificate inspector"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body */}
            <div
              className={`relative flex-1 overflow-auto bg-slate-100/60 p-4 sm:p-8 flex items-center justify-center min-h-[380px] sm:min-h-[500px] transition-all duration-300 ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              title={isZoomed ? "Click to reset zoom" : "Click to zoom in"}
            >
              <div
                className={`relative bg-white shadow-xl rounded-xl overflow-hidden border border-slate-200/80 transition-all duration-300 ${
                  isZoomed
                    ? "w-full max-w-[860px] aspect-[1/1.414]"
                    : "w-full max-w-[420px] aspect-[1/1.414]"
                }`}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 860px"
                  quality={95}
                  priority
                  className="object-contain p-2 select-none"
                />
              </div>
            </div>

            {/* Footer Notice */}
            <div className="px-5 sm:px-7 py-3 border-t border-slate-100 bg-white flex items-center justify-between text-xs text-slate-500">
              <span>Official verified credential • Paperforce India LLP</span>
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3261] font-semibold hover:underline"
                >
                  Open Original PDF &rarr;
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
