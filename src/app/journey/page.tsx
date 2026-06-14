"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function JourneyPage() {
  useIntersectionObserver();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-[#fffbeb]/95 backdrop-blur sticky top-16 md:top-0 z-20 border-b border-amber-100 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center gap-3">
          <h2 className="font-bold text-secondary">Our Journey</h2>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Since 2024</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary font-heading mb-4">A Legacy Built on Flavor</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              What started as a small stall in Bilimora has evolved into a premier destination for egg lovers. We didn't just want to serve food; we wanted to elevate the humble egg into an experience. From sourcing farm-fresh ingredients to perfecting our signature masalas over years, our journey is fueled by passion, hard work, and the love of our customers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 reveal">
            <img src="/signature1.png" alt="Early Days" className="w-full h-48 object-cover rounded-3xl shadow-sm border border-amber-100" />
            <img src="/signature2.png" alt="Growth" className="w-full h-48 object-cover rounded-3xl shadow-sm border border-amber-100 mt-6" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto py-12 relative">
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-amber-200 to-transparent -translate-x-1/2 rounded-full"></div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-12 reveal">
            <div className="hidden md:block w-5/12"></div>
            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-[0_0_0_4px_rgba(245,158,11,0.2)] -translate-x-1/2 z-10 transition-transform group-hover:scale-150"></div>
            <div className="w-full pl-12 md:pl-0 md:w-5/12">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                <span className="text-primary font-price font-bold text-lg block mb-1">2024</span>
                <h4 className="font-bold text-secondary text-lg mb-2">The Humble Beginning</h4>
                <p className="text-sm text-gray-500">Started as a small food stall serving classic bhurji and gotala to night-time crowds.</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-12 reveal">
            <div className="hidden md:block w-5/12"></div>
            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-[0_0_0_4px_rgba(245,158,11,0.2)] -translate-x-1/2 z-10 transition-transform group-hover:scale-150"></div>
            <div className="w-full pl-12 md:pl-0 md:w-5/12">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                <span className="text-primary font-price font-bold text-lg block mb-1">2025</span>
                <h4 className="font-bold text-secondary text-lg mb-2">Menu Expansion</h4>
                <p className="text-sm text-gray-500">Introduced our signature specials like Egg Mamna and Kashmiri Kofta, reaching 50+ dishes.</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-12 reveal">
            <div className="hidden md:block w-5/12"></div>
            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-[0_0_0_4px_rgba(245,158,11,0.2)] -translate-x-1/2 z-10 transition-transform group-hover:scale-150"></div>
            <div className="w-full pl-12 md:pl-0 md:w-5/12">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                <span className="text-primary font-price font-bold text-lg block mb-1">2026</span>
                <h4 className="font-bold text-secondary text-lg mb-2">Franchise Operations</h4>
                <p className="text-sm text-gray-500">Opening up PAN India to share our premium egg dining experience with the entire country.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
