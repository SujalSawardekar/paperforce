"use client"
import * as React from "react"
import { MapPin, Building2, Factory } from "lucide-react"

export function ContactMap() {
  const [activeTab, setActiveTab] = React.useState<"corporate" | "manufacturing">("corporate")

  return (
    <div className="w-full mt-12 bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab("corporate")}
          className={`flex-1 py-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${
            activeTab === "corporate" 
              ? "bg-white text-[#1E3261] border-b-2 border-[#1E3261]" 
              : "text-slate-500 hover:text-slate-900 bg-slate-50"
          }`}
        >
          <Building2 size={16} />
          Corporate Office
        </button>
        <button
          onClick={() => setActiveTab("manufacturing")}
          className={`flex-1 py-4 flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${
            activeTab === "manufacturing" 
              ? "bg-white text-[#1E3261] border-b-2 border-[#1E3261]" 
              : "text-slate-500 hover:text-slate-900 bg-slate-50"
          }`}
        >
          <Factory size={16} />
          Manufacturing Facility
        </button>
      </div>

      <div className="p-2 bg-white">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center text-slate-400">
          {/* Fallback interactive map placeholder. For a real map, an iframe embed of Google Maps would be placed here. */}
          <div className="absolute inset-0 paper-noise opacity-30" />
          
          <div className="relative z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 max-w-sm text-left">
            <MapPin className="w-5 h-5 text-[#1E3261] shrink-0 mt-0.5" />
            <div>
              {activeTab === "corporate" ? (
                <>
                  <h4 className="text-sm font-bold text-slate-900">Corporate Office</h4>
                  <p className="text-xs text-slate-600 mt-1">C 210 Morya House, Off New Link Road, Andheri West, Mumbai – 400053</p>
                </>
              ) : (
                <>
                  <h4 className="text-sm font-bold text-slate-900">Manufacturing Facility</h4>
                  <p className="text-xs text-slate-600 mt-1">Palghar, Maharashtra, India (100% EOU)</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
