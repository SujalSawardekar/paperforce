"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Play, X, ZoomIn } from "lucide-react";

type GalleryItem =
  | {
      type: "image";
      src: string;
      alt: string;
      label: string;
      colSpan: string;
      rowSpan: string;
      poster?: never;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      alt: string;
      label: string;
      colSpan: string;
      rowSpan: string;
    };

const GALLERY_ITEMS: GalleryItem[] = [
  {
    type: "image",
    src: "/images/infra/ariel-factory.png",
    alt: "Aerial view of the Paperforce manufacturing facility in Palghar",
    label: "Aerial View - Palghar Facility",
    colSpan: "md:col-span-7",
    rowSpan: "md:row-span-2",
  },
  {
    type: "image",
    src: "/images/infra/ruling-area.png",
    alt: "Ruling machines processing paper reels in the production hall",
    label: "Ruling Area",
    colSpan: "md:col-span-5",
    rowSpan: "",
  },
  {
    type: "image",
    src: "/images/infra/cutting-area.png",
    alt: "Cutting area with precision paper cutters and skilled operators",
    label: "Cutting Area",
    colSpan: "md:col-span-5",
    rowSpan: "",
  },
  {
    type: "image",
    src: "/images/infra/rolls-stocking.png",
    alt: "Paper rolls stocked in the warehouse ready for dispatch",
    label: "Rolls Stocking Area",
    colSpan: "md:col-span-5",
    rowSpan: "",
  },
  {
    type: "video",
    src: "/images/infra/facility-tour.mp4",
    poster: "/images/infra/cutting-area.png",
    alt: "Facility tour video showcasing the Paperforce manufacturing floor",
    label: "Facility Tour",
    colSpan: "md:col-span-7",
    rowSpan: "",
  },
];

export function FacilityGallery() {
  const [lightbox, setLightbox] = useState<{
    type: "image" | "video";
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      {/* Section Label */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold uppercase tracking-wider text-[#1E3261] mb-2">
          Facility Gallery
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0b1c3f]">
          Inside Our Manufacturing Floor
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          A visual tour of our 30,000 sq. ft. facility - from precision cutting to bulk dispatch.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
        {GALLERY_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className={[item.colSpan, item.rowSpan].filter(Boolean).join(" ")}
            onClick={() =>
              setLightbox({ type: item.type, src: item.src, alt: item.alt })
            }
          >
            <ScrollReveal
              direction="up"
              delay={idx * 0.08}
              className="relative group overflow-hidden rounded-2xl bg-slate-100 shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer h-full w-full"
            >
              {item.type === "image" ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ZoomIn className="w-4 h-4 text-white" />
                    <span className="text-xs font-semibold text-white tracking-wide uppercase">
                      {item.label}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <Image
                    src={item.poster}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                </>
              )}
            </ScrollReveal>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-full object-contain max-h-[85vh]"
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                className="w-full max-h-[85vh] bg-black"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}