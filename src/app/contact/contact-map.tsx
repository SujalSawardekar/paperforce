"use client"
import * as React from "react"
import { MapPin, Building2, Factory, ExternalLink } from "lucide-react"

export function ContactMap() {
  const [activeTab, setActiveTab] = React.useState<"corporate" | "manufacturing">("corporate")

  return (
    <div className="w-full max-w-5xl mx-auto space-y-16">
      <div className="text-center space-y-4 relative">
        {/* Optional decorative top logo if needed, otherwise just the text */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#0b1c3f]">Our Locations</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Visit us at our registered office in Mumbai or our manufacturing facility in Palghar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mumbai HQ Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-slate-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Registered Office</p>
                <h3 className="text-lg font-bold text-[#0b1c3f]">Mumbai HQ</h3>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              C 210 Morya House, Off New Link Road,<br />
              Andheri West, Mumbai – 400 053<br />
              INDIA
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-50">
            <a href="https://maps.google.com/?q=Morya+House+Andheri+West+Mumbai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold text-[#0b1c3f] hover:underline">
              <MapPin className="w-3 h-3 mr-2" /> View on Maps
            </a>
          </div>
        </div>

        {/* Palghar Facility Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                <Factory className="w-4 h-4 text-slate-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Manufacturing Unit</p>
                <h3 className="text-lg font-bold text-[#0b1c3f]">Palghar Facility</h3>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Palghar Industrial Cluster,<br />
              Palghar, Maharashtra<br />
              INDIA
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-50">
            <a href="https://maps.google.com/?q=Palghar+Maharashtra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold text-[#0b1c3f] hover:underline">
              <MapPin className="w-3 h-3 mr-2" /> View on Maps
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-full p-1.5 shadow-sm border border-slate-100 inline-flex">
            <button
              onClick={() => setActiveTab("corporate")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-colors ${
                activeTab === "corporate" 
                  ? "bg-[#0b1c3f] text-white" 
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Building2 size={14} /> Mumbai Office
            </button>
            <button
              onClick={() => setActiveTab("manufacturing")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-colors ${
                activeTab === "manufacturing" 
                  ? "bg-[#0b1c3f] text-white" 
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <Factory size={14} /> Palghar Factory
            </button>
          </div>
        </div>

        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm">
          {activeTab === "corporate" ? (
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.602758253139!2d72.83151807520638!3d19.12506248208922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90d81b3dd%3A0xc68d4beea3b7eb0a!2sMorya%20House!5e0!3m2!1sen!2sus!4v1715873917457!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          ) : (
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119853.30894056291!2d72.71181829631628!3d19.696614131557348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71cceeb265435%3A0x2db44d081f9a2b53!2sPalghar%2C%20Maharashtra!5e0!3m2!1sen!2sus!4v1715874025345!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          )}

          <div className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-200 shadow-sm max-w-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#1E3261] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {activeTab === "corporate" ? "Mumbai Office" : "Palghar Factory"}
                </p>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                  {activeTab === "corporate" 
                    ? "C 210 Morya House, Off New Link Road, Andheri West, Mumbai – 400 053" 
                    : "Palghar Industrial Cluster, Palghar, Maharashtra, INDIA"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
