"use client"
import * as React from "react"
import { Container } from "@/components/common/container"
import { motion, AnimatePresence } from "framer-motion"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { geoMercator } from "d3-geo"
import { MapPin, ShoppingCart, FileText, Package, Factory, Anchor } from "lucide-react"
import { cn } from "@/lib/utils"

const geoUrl = "/features.json"

type Region = {
  id: string
  name: string
  coord: [number, number]
  color: string
  products: string
  productDesc: string
  productImage: string
  specs: string
  logistics: string
}

const factoryCoord: [number, number] = [72.76, 19.69] // Palghar
const jnptCoord: [number, number] = [72.95, 18.95] // JNPT

const regions: Region[] = [
  {
    id: "uk",
    name: "United Kingdom",
    coord: [-2.0, 53.5],
    color: "#1E3261", // Deep Navy
    products: "A4 / A5 Double-Wire Project Books",
    productDesc: "Features colored subject tabs, micro-perforation, and premium 80 GSM white paper, standard in UK schools and professional workplaces.",
    productImage: "/Images of Product/Set_05/Set_05 (1).png",
    specs: "Sizes: A4, A5\nBinding: Double-Wire Spine\nPaper: 80 GSM High-White\nRuling: 8mm Lined with Margin",
    logistics: "Packing: Shrink-wrapped in 5s\nMin Order: 25,000 Units\nTransit: 20-24 Days to UK Ports"
  },
  {
    id: "me",
    name: "Middle East",
    coord: [45.0, 25.0], 
    color: "#10B981", // Emerald Green
    products: "Leatherette Executive Journals",
    productDesc: "Premium hardcover thread-sewn corporate notebooks, designed with gold gilt-edge sheets and customized cover branding for Gulf markets.",
    productImage: "/Images of Product/Set_08/Set_08 (1).png",
    specs: "Sizes: A5, B6\nBinding: Section Sewn Hardcover\nPaper: 80 GSM Ivory Lined\nCover: Soft Debossed PU",
    logistics: "Packing: Individual Gift Box\nMin Order: 15,000 Units\nTransit: 5-8 Days to Gulf Ports"
  },
  {
    id: "na",
    name: "North America",
    coord: [-95.0, 40.0],
    color: "#3B82F6", // Royal Blue
    products: "Letter Size College Ruled Notebooks",
    productDesc: "Classic school spiral notebooks featuring college ruling, perforated margins, and 3-hole punched spine sheets for standard US binder inserts.",
    productImage: "/Images of Product/Set_01/Set_01 (1).png",
    specs: "Sizes: Letter (8.5\" x 11\")\nBinding: Single Spiral Wire\nPaper: 60 GSM Bright White\nRuling: 9/32\" College Ruled",
    logistics: "Packing: Display Carton Box\nMin Order: 50,000 Units\nTransit: 30-35 Days to US Ports"
  },
  {
    id: "wa",
    name: "West Africa",
    coord: [8.0, 10.0],
    color: "#F97316", // Orange
    products: "Seyi / French Ruled Exercise Books",
    productDesc: "Traditional stapled exercise books tailored with heavy-duty board covers and Seyes double-line grids, popular in Francophone markets.",
    productImage: "/Images of Product/Set_02/Set_02 (1).png",
    specs: "Sizes: 17 x 22 cm, A5\nBinding: Stapled (Saddle Stitch)\nPaper: 60/70 GSM White\nRuling: Seyes / French Grid",
    logistics: "Packing: Heavy-Duty Bundle Pack\nMin Order: 40,000 Units\nTransit: 25-30 Days to WA Ports"
  },
  {
    id: "la",
    name: "Latin America",
    coord: [-60.0, -15.0],
    color: "#DC2626", // Crimson Red
    products: "Cuadernos Cosidos (Stitched School Notebooks)",
    productDesc: "High-volume stitched school journals constructed with glossy plasticized covers to withstand harsh student usage and tropical climates.",
    productImage: "/Images of Product/Set_03/Set_03 (1).png",
    specs: "Sizes: 19 x 24 cm\nBinding: Sewn Spine (Cosido)\nPaper: 60 GSM Lined / Quad\nCover: High-Gloss Poly-Coated",
    logistics: "Packing: Standard Export Carton\nMin Order: 45,000 Units\nTransit: 35-45 Days to LA Ports"
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
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <Container>
        <div className="w-full mb-8 text-center pb-6">
          <div className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50">
            World Export Network
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#1E3261]">
            Real-Time Shipping Map
          </h2>
        </div>

        {/* Hero Interactive World Map */}
        <div className="w-full bg-[#f8fafc] border border-slate-200 rounded-3xl overflow-hidden mb-8 shadow-[0_10px_40px_rgba(30,50,97,0.04)] relative">
          
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
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8">
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
            {/* Card 1 & 2: Popular Product (spans 2 columns on desktop) */}
            <div 
              className="bg-slate-50 p-8 rounded-3xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 lg:col-span-2 shadow-sm relative overflow-hidden group" 
              style={{ borderColor: `${activeRegion.color}30` }}
            >
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: activeRegion.color }}>
                  <ShoppingCart size={14} /> Most Popular Product
                </div>
                <div className="text-xl font-bold text-[#1E3261] mb-2">{activeRegion.products}</div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">{activeRegion.productDesc}</p>
              </div>
              <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-white border border-slate-200 shrink-0 self-center p-1 shadow-inner z-10">
                <img 
                  src={activeRegion.productImage} 
                  alt={activeRegion.products} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>

            {/* Card 3: Key Specifications (spans 1 column) */}
            <div 
              className="bg-slate-50 p-8 rounded-3xl border flex flex-col justify-start shadow-sm" 
              style={{ borderColor: `${activeRegion.color}30` }}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: activeRegion.color }}>
                <FileText size={14} /> Key Specifications
              </div>
              <div className="text-sm font-semibold text-[#1E3261] leading-relaxed whitespace-pre-line">
                {activeRegion.specs}
              </div>
            </div>

            {/* Card 4: Packaging & Volume (spans 1 column) */}
            <div 
              className="bg-slate-50 p-8 rounded-3xl border flex flex-col justify-start shadow-sm" 
              style={{ borderColor: `${activeRegion.color}30` }}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: activeRegion.color }}>
                <Package size={14} /> Sourcing & Logistics
              </div>
              <div className="text-sm font-semibold text-[#1E3261] leading-relaxed whitespace-pre-line">
                {activeRegion.logistics}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
