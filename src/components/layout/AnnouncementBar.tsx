"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function AnnouncementBar() {
  const router = useRouter();

  return (
    <div className="bg-secondary text-primary py-2 overflow-hidden border-b border-amber-500/20 text-xs font-semibold select-none flex items-center relative z-40 marquee-container">
      <div className="animate-marquee flex gap-12 items-center">
        <span>🚀 GROW WITH US! FRANCHISE OPPORTUNITIES NOW OPEN ACROSS INDIA. BECOME AN EGGOHOLIC PARTNER TODAY!</span>
        <button
          onClick={() => router.push("/franchise")}
          className="bg-primary hover:bg-amber-400 text-secondary px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-150 transform hover:scale-105 active:scale-95"
        >
          Apply Now
        </button>
        <span>🌟 PROVEN BUSINESS MODEL • 50+ SPECIALTY EGG DISHES • COMPLETE TRAINING & MARKETING ASSISTANCE</span>
        <button
          onClick={() => router.push("/franchise")}
          className="bg-primary hover:bg-amber-400 text-secondary px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-150 transform hover:scale-105 active:scale-95"
        >
          Apply Now
        </button>
        {/* Duplicate for loop */}
        <span>🚀 GROW WITH US! FRANCHISE OPPORTUNITIES NOW OPEN ACROSS INDIA. BECOME AN EGGOHOLIC PARTNER TODAY!</span>
        <button
          onClick={() => router.push("/franchise")}
          className="bg-primary hover:bg-amber-400 text-secondary px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-150 transform hover:scale-105 active:scale-95"
        >
          Apply Now
        </button>
        <span>🌟 PROVEN BUSINESS MODEL • 50+ SPECIALTY EGG DISHES • COMPLETE TRAINING & MARKETING ASSISTANCE</span>
        <button
          onClick={() => router.push("/franchise")}
          className="bg-primary hover:bg-amber-400 text-secondary px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider transition-all duration-150 transform hover:scale-105 active:scale-95"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
