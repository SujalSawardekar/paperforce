"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { motion, AnimatePresence } from "framer-motion"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { geoMercator } from "d3-geo"
import { MapPin, Ship, Clock, Box, ShoppingCart, User, Factory, Package, FileText, Anchor } from "lucide-react"
import { cn } from "@/lib/utils"

const geoUrl = "/features.json"

type Region = {
  id: string
  name: string
  coord: [number, number]
  color: string
  transit: string
  container: string
  moq: string
  products: string
  buyerType: string
  packaging: string
  documentation: string
}

const factoryCoord: [number, number] = [72.76, 19.69] // Palghar
const jnptCoord: [number, number] = [72.95, 18.95] // JNPT

const regions: Region[] = [
  {
    id: "uk",
    name: "United Kingdom",
    coord: [-2.0, 53.5],
    color: "#1E3261", // Deep Navy
    transit: "20–24 Days",
    container: "20ft / 40ft FCL",
    moq: "30,000 Units",
    products: "A4 / A5 Double Wire Bound Notebooks",
    buyerType: "Importers, Wholesalers",
    packaging: "Standard Export Cartons",
    documentation: "Commercial Invoice, Packing List, BL"
  },
  {
    id: "me",
    name: "Middle East",
    coord: [45.0, 25.0], 
    color: "#10B981", // Emerald Green
    transit: "5–8 Days",
    container: "20ft / 40ft FCL",
    moq: "20,000 Units",
    products: "Premium Hardcover Journals",
    buyerType: "Stationery Distributors",
    packaging: "Palletized Cartons, Shrink Wrapped",
    documentation: "Certificate of Origin, Invoice, BL"
  },
  {
    id: "na",
    name: "North America",
    coord: [-95.0, 40.0],
    color: "#3B82F6", // Royal Blue
    transit: "30–35 Days",
    container: "40ft HQ FCL",
    moq: "50,000 Units",
    products: "College Ruled Notebooks, Legal Pads",
    buyerType: "Big Box Retailers, Importers",
    packaging: "Retail Ready Packaging",
    documentation: "ISF Filing, Commercial Invoice, BL"
  },
  {
    id: "wa",
    name: "West Africa",
    coord: [8.0, 10.0],
    color: "#F97316", // Orange
    transit: "25–30 Days",
    container: "20ft FCL",
    moq: "40,000 Units",
    products: "French Ruled Notebooks",
    buyerType: "Wholesale Markets, Govt",
    packaging: "Heavy Duty Corrugated Cartons",
    documentation: "SONCAP, Form M, Invoice, BL"
  },
  {
    id: "la",
    name: "Latin America",
    coord: [-60.0, -15.0],
    color: "#DC2626", // Crimson Red
    transit: "35–45 Days",
    container: "40ft FCL",
    moq: "40,000 Units",
    products: "Spanish Ruled Notebooks",
    buyerType: "Importers, Regional Distributors",
    packaging: "Standard Cartons, Palletized",
    documentation: "Commercial Invoice, BL"
  },
]

export function ExportNetworkSection() {
  const [activeRegionId, setActiveRegionId] = React.useState<string>(regions[0].id)
  const activeRegion = regions.find((r) => r.id === activeRegionId) || regions[0]
  
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  // Projection settings identical to ComposableMap defaults for accurate manual mapping
  const proj = geoMercator().scale(120).center([0, 20]).translate([400, 300])
  const pFactory = proj(factoryCoord)!
  const pJnpt = proj(jnptCoord)!
  const pDest = proj(activeRegion.coord)!
  
  // Calculate a beautiful quadratic curve from JNPT to Destination
  const midX = (pJnpt[0] + pDest[0]) / 2
  const midY = Math.min(pJnpt[1], pDest[1]) - 100 
  const dDest = `M${pJnpt[0]},${pJnpt[1]} Q${midX},${midY} ${pDest[0]},${pDest[1]}`

  // Ensure unique ID for animation reset
  const animKey = `anim-${activeRegionId}`

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-slate-200">
      <Container>
        <div className="w-full mb-12 text-center border-b border-slate-200 pb-10">
          <div className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50">
            World Export Network
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1E3261]">
            Real-Time Shipping Map
          </h2>
        </div>

        {/* Hero Interactive World Map */}
        <div className="w-full bg-[#f8fafc] border border-slate-200 rounded-3xl overflow-hidden mb-12 shadow-[0_10px_40px_rgba(30,50,97,0.04)] relative">
          
          {/* Map Legend */}
          <div className="absolute top-6 left-6 flex flex-wrap items-center gap-4 bg-white/90 backdrop-blur-md p-3 px-5 rounded-full border border-slate-200 shadow-sm z-10">
             <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
               <Factory size={14} className="text-[#1E3261]" /> Factory
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
               <Anchor size={14} className="text-[#1E3261]" /> Port
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
               <MapPin size={14} className="text-[#1E3261]" /> Destination
             </div>
          </div>

          <div className="w-full relative" style={{ aspectRatio: '800/600', maxHeight: '600px', margin: '0 auto' }}>
            {mounted && (
              <ComposableMap projection="geoMercator" projectionConfig={{ scale: 120, center: [0, 20] }} width={800} height={600} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                
                {/* Clean Map with Thin Boundaries */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#E2E8F0"
                        stroke="#CBD5E1"
                        strokeWidth={0.75}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
              </ComposableMap>
            )}

            {/* Absolute SVG overlay for exact programmatic paths and animations */}
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full pointer-events-none z-10">
              
              {/* Active Route: JNPT to Destination */}
              {/* Static faint dotted line */}
              <path
                id="route-dest"
                d={dDest}
                fill="none"
                stroke={activeRegion.color}
                strokeWidth={2}
                strokeDasharray="4 4"
                opacity="0.2"
              />

              {/* Mask to reveal the dotted line progressively */}
              <mask id="route-mask">
                <motion.path
                  d={dDest}
                  fill="none"
                  stroke="white"
                  strokeWidth={10}
                  animate={{ pathLength: [0, 1, 1] }}
                  transition={{ 
                    duration: 6, 
                    times: [0, 0.833, 1], // 5/6 = 0.833
                    ease: ["easeInOut", "linear"],
                    repeat: Infinity 
                  }}
                />
              </mask>

              {/* The bright dotted line that gets revealed by the mask */}
              <path
                key={`route-dest-${activeRegionId}`}
                d={dDest}
                fill="none"
                stroke={activeRegion.color}
                strokeWidth={2.5}
                strokeDasharray="4 4"
                mask="url(#route-mask)"
              />

              {/* Origin Markers */}
              <g transform={`translate(${pFactory[0]}, ${pFactory[1]})`}>
                <circle r={12} fill="white" stroke="#1E3261" strokeWidth={1.5} filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
                <g transform="translate(-6, -6)">
                  <Factory size={12} color="#1E3261" />
                </g>
              </g>

              <g transform={`translate(${pJnpt[0]}, ${pJnpt[1]})`}>
                <circle r={12} fill="white" stroke="#1E3261" strokeWidth={1.5} filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
                <g transform="translate(-6, -6)">
                  <Anchor size={12} color="#1E3261" />
                </g>
              </g>

              {/* Destination Markers */}
              {regions.map((region) => {
                const isActive = region.id === activeRegionId
                const p = proj(region.coord)!
                
                return (
                  <g key={region.id} transform={`translate(${p[0]}, ${p[1]})`} className={cn("transition-opacity duration-300", isActive ? "opacity-100" : "opacity-40")} style={{ pointerEvents: 'auto', cursor: 'pointer' }} onClick={() => setActiveRegionId(region.id)}>
                    {isActive && (
                      <motion.circle
                        r={20}
                        fill={region.color}
                        // Pulses exactly during the 1 second pause at the end of the 6s loop
                        animate={{ scale: [1, 1, 1.8, 1], opacity: [0, 0, 0.2, 0] }}
                        transition={{ 
                          duration: 6, 
                          times: [0, 0.833, 0.916, 1], 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    <circle r={14} fill="white" stroke={isActive ? region.color : "#1E3261"} strokeWidth={1.5} filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
                    <g transform="translate(-7, -7)">
                      <MapPin size={14} color={isActive ? region.color : "#1E3261"} />
                    </g>
                  </g>
                )
              })}

              {/* Cargo Ship Animation */}
              <AnimatePresence>
                <motion.g 
                  key={`ship-${activeRegionId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* The animateMotion element perfectly traces the path. rotate="auto" steers the ship naturally. */}
                  <animateMotion 
                    dur="6s" 
                    repeatCount="indefinite" 
                    calcMode="spline" 
                    keyPoints="0;1;1" 
                    keyTimes="0;0.833;1" 
                    keySplines="0.42 0 0.58 1; 1 0 1 1" 
                    rotate="auto"
                    key={animKey}
                  >
                    <mpath href="#route-dest" />
                  </animateMotion>

                  {/* Top-Down Cargo Ship SVG facing Right (so rotate="auto" points it forward) */}
                  <motion.g
                    animate={{ y: [0, -2, 0] }} // Gentle floating effect on the waves
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <g transform="translate(-15, -6) scale(0.5)">
                      {/* Ship Hull */}
                      <path d="M 6 24 L 48 24 C 56 24, 60 12, 60 12 C 60 12, 56 0, 48 0 L 6 0 C 2 0, 0 4, 0 12 C 0 20, 2 24, 6 24 Z" fill={activeRegion.color} stroke="white" strokeWidth="1" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
                      
                      {/* Cargo Containers */}
                      <rect x="14" y="3" width="6" height="18" rx="1" fill="white" opacity="0.95" />
                      <rect x="22" y="3" width="6" height="18" rx="1" fill="white" opacity="0.75" />
                      <rect x="30" y="3" width="6" height="18" rx="1" fill="white" opacity="0.95" />
                      <rect x="38" y="3" width="6" height="18" rx="1" fill="white" opacity="0.75" />
                      
                      {/* Bridge (Captain's Cabin) */}
                      <rect x="5" y="2" width="8" height="20" rx="2" fill="white" />
                      <rect x="7" y="4" width="4" height="16" rx="1" fill={activeRegion.color} opacity="0.3" />
                    </g>
                  </motion.g>
                </motion.g>
              </AnimatePresence>

            </svg>
          </div>
        </div>

        {/* Region Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {regions.map((region) => {
            const isActive = region.id === activeRegionId
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegionId(region.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border shadow-sm flex items-center gap-2",
                  isActive 
                    ? "text-white border-transparent" 
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                )}
                style={isActive ? { backgroundColor: region.color } : {}}
              >
                <MapPin size={16} className={isActive ? "text-white" : "text-slate-400"} />
                {region.name}
              </button>
            )
          })}
        </div>

        {/* Bottom Information Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegionId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-slate-50 p-6 rounded-2xl border flex flex-col justify-center shadow-sm" style={{ borderColor: `${activeRegion.color}30` }}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: activeRegion.color }}>
                <Clock size={14} /> Transit Time
              </div>
              <div className="text-xl font-bold text-[#1E3261]">{activeRegion.transit}</div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border flex flex-col justify-center shadow-sm" style={{ borderColor: `${activeRegion.color}30` }}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: activeRegion.color }}>
                <Package size={14} /> MOQ
              </div>
              <div className="text-xl font-bold text-[#1E3261]">{activeRegion.moq}</div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border flex flex-col justify-center shadow-sm" style={{ borderColor: `${activeRegion.color}30` }}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: activeRegion.color }}>
                <Box size={14} /> Container
              </div>
              <div className="text-xl font-bold text-[#1E3261]">{activeRegion.container}</div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border flex flex-col justify-center shadow-sm" style={{ borderColor: `${activeRegion.color}30` }}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: activeRegion.color }}>
                <User size={14} /> Buyer Type
              </div>
              <div className="text-sm font-bold text-[#1E3261]">{activeRegion.buyerType}</div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border flex flex-col justify-center md:col-span-2 shadow-sm" style={{ borderColor: `${activeRegion.color}30` }}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: activeRegion.color }}>
                <ShoppingCart size={14} /> Popular Products
              </div>
              <div className="text-xl font-bold text-[#1E3261]">{activeRegion.products}</div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border flex flex-col justify-center shadow-sm" style={{ borderColor: `${activeRegion.color}30` }}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: activeRegion.color }}>
                <Factory size={14} /> Packaging
              </div>
              <div className="text-sm font-bold text-[#1E3261]">{activeRegion.packaging}</div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border flex flex-col justify-center shadow-sm" style={{ borderColor: `${activeRegion.color}30` }}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: activeRegion.color }}>
                <FileText size={14} /> Documentation
              </div>
              <div className="text-sm font-bold text-[#1E3261]">{activeRegion.documentation}</div>
            </div>
          </motion.div>
        </AnimatePresence>

      </Container>
    </section>
  )
}
