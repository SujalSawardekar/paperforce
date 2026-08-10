"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MapPin } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

const geoUrl = "/features.json";

const exportMarkets = [
  { name: "Afghanistan", coordinates: [67.7, 33.9] as [number, number] },
  { name: "UAE", coordinates: [53.8, 23.4] as [number, number] },
  { name: "Oman", coordinates: [55.9, 21.5] as [number, number] },
  { name: "Saudi Arabia", coordinates: [45.0, 23.8] as [number, number] },
  { name: "Iraq", coordinates: [43.6, 33.2] as [number, number] },
  { name: "Israel", coordinates: [34.8, 31.0] as [number, number] },
  { name: "Tanzania", coordinates: [34.8, -6.3] as [number, number] },
  { name: "Madagascar", coordinates: [46.8, -18.7] as [number, number] },
  { name: "Mozambique", coordinates: [35.5, -18.6] as [number, number] },
  { name: "Kenya", coordinates: [37.9, -0.0] as [number, number] },
  { name: "Ethiopia", coordinates: [40.4, 9.1] as [number, number] },
  { name: "Somalia", coordinates: [46.1, 5.1] as [number, number] },
  { name: "Democratic Republic of Congo", coordinates: [23.6, -4.0] as [number, number] },
  { name: "Mali", coordinates: [-3.9, 17.5] as [number, number] },
  { name: "Burkina Faso", coordinates: [-1.5, 12.2] as [number, number] },
  { name: "Liberia", coordinates: [-9.4, 6.4] as [number, number] },
  { name: "Senegal", coordinates: [-14.4, 14.4] as [number, number] },
  { name: "Italy", coordinates: [12.5, 41.8] as [number, number] },
  { name: "United Kingdom", coordinates: [-3.4, 55.3] as [number, number] },
  { name: "United States", coordinates: [-95.7, 37.0] as [number, number] },
  { name: "Canada", coordinates: [-106.3, 56.1] as [number, number] },
  { name: "Mexico", coordinates: [-102.5, 23.6] as [number, number] },
  { name: "Dominican Republic", coordinates: [-70.1, 18.7] as [number, number] },
  { name: "Guatemala", coordinates: [-90.2, 15.7] as [number, number] },
  { name: "Honduras", coordinates: [-86.2, 15.1] as [number, number] },
  { name: "Nicaragua", coordinates: [-85.2, 12.8] as [number, number] },
  { name: "Haiti", coordinates: [-72.2, 18.9] as [number, number] },
  { name: "Mauritius", coordinates: [57.5, -20.3] as [number, number] },
  { name: "Sudan", coordinates: [30.2, 12.8] as [number, number] },
  { name: "France", coordinates: [2.2, 46.2] as [number, number] },
];

const origin: [number, number] = [72.76, 19.69]; // Palghar, India roughly

export function GlobalReachSection() {
  const [hoveredMarket, setHoveredMarket] = React.useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#0B1221] relative overflow-hidden border-t border-white/5">
      {/* Very subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Primary Area (40%) */}
          <div className="lg:col-span-5 space-y-10 text-white z-20">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold font-serif leading-[1.05] tracking-tight">
                Made in India.<br />
                <span className="text-[#93C5FD]">Shipped Worldwide.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-slate-300 font-sans leading-relaxed max-w-md">
                Paperforce India seamlessly supplies high-volume premium paper stationery to international brands, retailers, and distributors across the globe.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-8 py-8 border-y border-white/10 my-8">
                <div>
                  <div className="text-5xl font-serif font-bold text-white">30</div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 mt-3">Countries Served</div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-white/10" />
                <div className="block sm:hidden w-16 h-px bg-white/10" />
                <div>
                  <div className="text-5xl font-serif font-bold text-white">5</div>
                  <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 mt-3">Continents</div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <Link href="/reach-markets">
                <Button variant="outline" size="lg">
                  Explore Our Global Markets
                </Button>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right / Visual Area (60%) */}
          <div className="lg:col-span-7 relative w-full lg:min-h-[500px] flex items-center justify-center lg:ml-8 z-10">
            <ScrollReveal direction="up" delay={0.3} className="w-full h-full relative">
              <ComposableMap 
                projection="geoMercator" 
                projectionConfig={{ scale: 120, center: [10, 20] }}
                width={800}
                height={500}
                style={{ width: "100%", height: "auto", userSelect: "none" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography 
                        key={geo.rsmKey} 
                        geography={geo} 
                        fill="#1E2A45" 
                        stroke="#0B1221"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "#273659" },
                          pressed: { outline: "none" }
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Export Market Markers */}
                {exportMarkets.map((market, i) => (
                  <Marker 
                    key={`marker-${i}`} 
                    coordinates={market.coordinates}
                    onMouseEnter={() => setHoveredMarket(market.name)}
                    onMouseLeave={() => setHoveredMarket(null)}
                    style={{
                      default: { cursor: "pointer", outline: "none" },
                      hover: { cursor: "pointer", outline: "none" },
                      pressed: { cursor: "pointer", outline: "none" }
                    }}
                  >
                    <circle 
                      r={hoveredMarket === market.name ? 4 : 2.5} 
                      fill="#93C5FD" 
                      opacity={hoveredMarket === market.name ? 1 : 0.8} 
                      className="transition-all duration-300"
                    />
                    {hoveredMarket === market.name && (
                      <text
                        textAnchor="middle"
                        y={-8}
                        style={{ fontFamily: "system-ui", fill: "#ffffff", fontSize: "11px", fontWeight: 500, pointerEvents: "none" }}
                      >
                        {market.name}
                      </text>
                    )}
                  </Marker>
                ))}

                {/* Origin Marker (India) */}
                <Marker coordinates={origin}>
                  <circle r={4} fill="#60A5FA" className="animate-pulse" />
                  <text
                    textAnchor="middle"
                    y={16}
                    style={{ fontFamily: "system-ui", fill: "#93C5FD", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em" }}
                  >
                    MANUFACTURING HUB
                  </text>
                  <text
                    textAnchor="middle"
                    y={28}
                    style={{ fontFamily: "system-ui", fill: "#CBD5E1", fontSize: "10px" }}
                  >
                    Palghar, India
                  </text>
                </Marker>

              </ComposableMap>
            </ScrollReveal>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
