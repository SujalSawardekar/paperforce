"use client";

import * as React from "react";
import { Search } from "lucide-react";


interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export function BlogSearch({ onSearch }: BlogSearchProps) {
  return (
    <div className="relative w-full max-w-xl mb-12">
      <div className="relative flex items-center w-full h-14 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm overflow-hidden shadow-sm transition-all focus-within:shadow-md focus-within:border-slate-300 focus-within:bg-white">
        <div className="pl-6 text-slate-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search articles by title, category, or tag..."
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1 h-full bg-transparent border-none focus:ring-0 px-4 text-slate-700 placeholder:text-slate-400 font-medium outline-none"
        />
      </div>
    </div>
  );
}
