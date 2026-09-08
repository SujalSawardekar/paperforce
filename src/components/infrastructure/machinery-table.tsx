"use client";

import * as React from "react";
import { Search, Filter, Wrench, Layers, CheckCircle2 } from "lucide-react";

export interface MachineItem {
  sr: number;
  name: string;
  purpose: string;
  nos: number;
  category: "Binding & Assembly" | "Ruling & Cutting" | "Punching & Spiral" | "Finishing & Pasting" | "Packaging & Logistics" | "Auxiliary & Power";
}

export const machineryData: MachineItem[] = [
  {
    sr: 1,
    name: "Fully Automatic Exercise Book Binding Machine (Nova 91)",
    purpose: "Exercise Book Online",
    nos: 1,
    category: "Binding & Assembly",
  },
  {
    sr: 2,
    name: "Rulling Machine 104 ( 3 printing station)",
    purpose: "Paper Rulling",
    nos: 2,
    category: "Ruling & Cutting",
  },
  {
    sr: 3,
    name: "Rulling Machine 104 ( 2 printing station) + Perforation",
    purpose: "Paper Rulling",
    nos: 1,
    category: "Ruling & Cutting",
  },
  {
    sr: 4,
    name: "UNO Exercise Book Binding Machine",
    purpose: "Exercise Book Binding",
    nos: 1,
    category: "Binding & Assembly",
  },
  {
    sr: 5,
    name: "Joy Binding Machine (Pinning - Folding - Backsquaring)",
    purpose: "Exercise Book Binding",
    nos: 1,
    category: "Binding & Assembly",
  },
  {
    sr: 6,
    name: "Sypa Cutting Machine (132 Size)",
    purpose: "Cutting Mc",
    nos: 2,
    category: "Ruling & Cutting",
  },
  {
    sr: 7,
    name: "Sypa Cutting Machine (115 Size)",
    purpose: "Cutting Mc",
    nos: 2,
    category: "Ruling & Cutting",
  },
  {
    sr: 8,
    name: "Automatic Single head pinning Machine",
    purpose: "Pinning for Thick Books",
    nos: 1,
    category: "Binding & Assembly",
  },
  {
    sr: 9,
    name: "Backsquaring Machin 104",
    purpose: "Back Squaring",
    nos: 2,
    category: "Binding & Assembly",
  },
  {
    sr: 10,
    name: "Automatic Packing Machine",
    purpose: "Automatic Packing",
    nos: 1,
    category: "Packaging & Logistics",
  },
  {
    sr: 11,
    name: "Packing Machine Manual",
    purpose: "Manual Packing",
    nos: 2,
    category: "Packaging & Logistics",
  },
  {
    sr: 12,
    name: "Forklift (Fork)",
    purpose: "Forklift for Pallets & Other",
    nos: 1,
    category: "Packaging & Logistics",
  },
  {
    sr: 13,
    name: "Forklift (Clamp)",
    purpose: "Clamp Lift for Paper Reel",
    nos: 1,
    category: "Packaging & Logistics",
  },
  {
    sr: 14,
    name: "Board to Board Pasting Machine",
    purpose: "Board Pasting",
    nos: 1,
    category: "Finishing & Pasting",
  },
  {
    sr: 15,
    name: "Hydraulic Press Machine (Double)",
    purpose: "Press after Pasting",
    nos: 1,
    category: "Finishing & Pasting",
  },
  {
    sr: 16,
    name: "Center Sewing Machine",
    purpose: "Center Sewing",
    nos: 2,
    category: "Binding & Assembly",
  },
  {
    sr: 17,
    name: "Perfect Binding Machine 6 Clamp",
    purpose: "For Refill Binding",
    nos: 1,
    category: "Binding & Assembly",
  },
  {
    sr: 18,
    name: "Section Sewing Machine",
    purpose: "Register Refill Section Sewing",
    nos: 1,
    category: "Binding & Assembly",
  },
  {
    sr: 19,
    name: "Joint Forming Machine",
    purpose: "Joint Forming of Registers",
    nos: 1,
    category: "Finishing & Pasting",
  },
  {
    sr: 20,
    name: "Hard Press Punching Machine",
    purpose: "Punching for Spiral Product",
    nos: 2,
    category: "Punching & Spiral",
  },
  {
    sr: 21,
    name: "Spiral Forming Machine",
    purpose: "Spiral loop forming & Cutting",
    nos: 2,
    category: "Punching & Spiral",
  },
  {
    sr: 22,
    name: "Wiro Locking Machine",
    purpose: "Wiro Locking",
    nos: 1,
    category: "Punching & Spiral",
  },
  {
    sr: 23,
    name: "Corner Rounding Double Head",
    purpose: "Corner Rounding",
    nos: 2,
    category: "Finishing & Pasting",
  },
  {
    sr: 24,
    name: "Corner Rounding Single Head",
    purpose: "Corner Rounding",
    nos: 2,
    category: "Finishing & Pasting",
  },
  {
    sr: 25,
    name: "Drill Machine",
    purpose: "Drill Punch Machine",
    nos: 2,
    category: "Finishing & Pasting",
  },
  {
    sr: 26,
    name: "Diesel Generator 60 Kva",
    purpose: "Electrical Power Backup",
    nos: 1,
    category: "Auxiliary & Power",
  },
  {
    sr: 27,
    name: "Strapping Machine Fully Automatic",
    purpose: "Box Strapping Machine",
    nos: 2,
    category: "Packaging & Logistics",
  },
  {
    sr: 28,
    name: "Strapping Machine Semi Automatic",
    purpose: "Box Strapping Machine",
    nos: 2,
    category: "Packaging & Logistics",
  },
];

const categories = [
  "All",
  "Binding & Assembly",
  "Ruling & Cutting",
  "Punching & Spiral",
  "Finishing & Pasting",
  "Packaging & Logistics",
  "Auxiliary & Power",
] as const;

export function MachineryTable() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredMachines = React.useMemo(() => {
    return machineryData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sr.toString().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const totalUnits = React.useMemo(() => {
    return filteredMachines.reduce((acc, curr) => acc + curr.nos, 0);
  }, [filteredMachines]);

  return (
    <div className="w-full space-y-6">
      {/* Control Bar: Search & Filter Chips */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by machine name, purpose, or serial..."
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3261]/20 focus:border-[#1E3261] transition-all shadow-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md px-1.5 py-0.5"
            >
              Clear
            </button>
          )}
        </div>

        {/* Count Summary Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200/80 px-4 py-2.5 rounded-xl shadow-sm self-start md:self-auto">
          <Layers className="w-4 h-4 text-[#1E3261]" />
          <span>Showing:</span>
          <span className="font-bold text-[#1E3261]">{filteredMachines.length} Machine Types</span>
          <span className="text-slate-300">•</span>
          <span className="font-bold text-[#1E3261]">{totalUnits} Installed Units</span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count =
            cat === "All"
              ? machineryData.length
              : machineryData.filter((m) => m.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#1E3261] text-white shadow-sm font-semibold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {cat} <span className={`ml-1 text-[11px] ${isActive ? "text-blue-200" : "text-slate-400"}`}>({count})</span>
            </button>
          );
        })}
      </div>

      {/* Main Table Container */}
      <div className="w-full bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-bold uppercase tracking-wider text-[#1E3261]">
                <th className="py-4 px-4 sm:px-6 w-16 text-center">Sr. No.</th>
                <th className="py-4 px-4 sm:px-6">Machine Name</th>
                <th className="py-4 px-4 sm:px-6">Purpose / Operation</th>
                <th className="py-4 px-4 sm:px-6 w-28 text-center">Nos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredMachines.length > 0 ? (
                filteredMachines.map((machine) => (
                  <tr
                    key={machine.sr}
                    className="hover:bg-blue-50/30 transition-colors duration-150 group"
                  >
                    {/* Serial Number */}
                    <td className="py-4 px-4 sm:px-6 text-center font-mono text-xs font-semibold text-slate-400 group-hover:text-[#1E3261]">
                      {machine.sr.toString().padStart(2, "0")}
                    </td>

                    {/* Machine Name */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-semibold text-slate-900 group-hover:text-[#1E3261] transition-colors">
                        {machine.name}
                      </div>
                      <div className="text-[11px] text-slate-400 md:hidden mt-0.5">
                        {machine.category}
                      </div>
                    </td>

                    {/* Purpose */}
                    <td className="py-4 px-4 sm:px-6">
                      <span className="inline-flex items-center gap-1.5 text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        {machine.purpose}
                      </span>
                    </td>

                    {/* Quantity (Nos) */}
                    <td className="py-4 px-4 sm:px-6 text-center">
                      <span className="inline-flex items-center justify-center min-w-[2.25rem] px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1E3261] border border-blue-100 group-hover:bg-[#1E3261] group-hover:text-white transition-colors">
                        {machine.nos}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-500">
                    <Wrench className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                    <p className="font-semibold text-slate-700">No machinery found</p>
                    <p className="text-xs text-slate-400 mt-1">
                      No machines match &ldquo;{searchTerm}&rdquo; in this category.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                      }}
                      className="mt-3 text-xs font-bold text-[#1E3261] hover:underline"
                    >
                      Reset filters
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info bar */}
        <div className="bg-slate-50/60 border-t border-slate-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>
            Industrial Fleet Registry • Palghar Manufacturing Unit, Maharashtra
          </span>
          <span className="font-semibold text-slate-700">
            Total Plant Count: 28 Machine Types • 41 Operational Units
          </span>
        </div>
      </div>
    </div>
  );
}
