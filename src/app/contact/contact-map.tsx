"use client"
import * as React from "react"
import { MapPin, Building2, Factory } from "lucide-react"

export function ContactMap() {
  const [activeTab, setActiveTab] = React.useState<"corporate" | "branch" | "manufacturing">("corporate")

  return (
    <div className="w-full bg-slate-50 border border-slate-100 rounded-[32px] overflow-hidden shadow-sm">
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab("corporate")}
          className={`flex-1 py-5 flex items-center justify-center gap-2 text-sm font-semibold transition-colors rounded-tl-[32px] ${
            activeTab === "corporate" 
              ? "bg-white text-[#1E3261] border-b-2 border-[#1E3261]" 
              : "text-slate-500 hover:text-slate-900 bg-slate-50"
          }`}
        >
          <Building2 size={16} />
          Corporate Office
        </button>
        <button
          onClick={() => setActiveTab("branch")}
          className={`flex-1 py-5 flex items-center justify-center gap-2 text-sm font-semibold transition-colors ${
            activeTab === "branch" 
              ? "bg-white text-[#1E3261] border-b-2 border-[#1E3261]" 
              : "text-slate-500 hover:text-slate-900 bg-slate-50"
          }`}
        >
          <MapPin size={16} />
          Branch Office
        </button>
        <button
          onClick={() => setActiveTab("manufacturing")}
          className={`flex-1 py-5 flex items-center justify-center gap-2 text-sm font-semibold transition-colors rounded-tr-[32px] ${
            activeTab === "manufacturing" 
              ? "bg-white text-[#1E3261] border-b-2 border-[#1E3261]" 
              : "text-slate-500 hover:text-slate-900 bg-slate-50"
          }`}
        >
          <Factory size={16} />
          Manufacturing Facility
        </button>
      </div>

      <div className="p-2 bg-white rounded-b-[32px]">
        <div className="relative w-full h-[400px] rounded-[24px] overflow-hidden bg-slate-100 flex items-center justify-center text-slate-400">
          
          {activeTab === "corporate" && (
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.602758253139!2d72.83151807520638!3d19.12506248208922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90d81b3dd%3A0xc68d4beea3b7eb0a!2sMorya%20House!5e0!3m2!1sen!2sus!4v1715873917457!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          )}
          {activeTab === "branch" && (
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4049.2330908461436!2d72.83483121098597!3d19.1309806501691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7f6fc8720b1%3A0x45dccb905af2adae!2sPaperforce%20India%20LLP!5e1!3m2!1sen!2sus!4v1787736091544!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          )}
          {activeTab === "manufacturing" && (
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119853.30894056291!2d72.71181829631628!3d19.696614131557348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71cceeb265435%3A0x2db44d081f9a2b53!2sPalghar%2C%20Maharashtra!5e0!3m2!1sen!2sus!4v1715874025345!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
          )}



        </div>
      </div>
    </div>
  )
}
