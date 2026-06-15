"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, SearchX } from "lucide-react";
import { originalMenuData, fetchDynamicMenu, MenuCategory, MenuItem } from "@/data/menu";

export default function MenuPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuData, setMenuData] = useState<MenuCategory[]>(originalMenuData);

  useEffect(() => {
    fetchDynamicMenu().then(data => setMenuData(data));
  }, []);

  const categories = [
    { id: "all", label: "All Items" },
    ...menuData.map(cat => ({ id: cat.id, label: cat.label }))
  ];

  const matches: (MenuItem & { catBg: string; catId: string })[] = [];
  menuData.forEach(cat => {
    if (activeCategory === "all" || cat.id === activeCategory) {
      cat.items.forEach(item => {
        if (!searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase())) {
          matches.push({ ...item, catBg: cat.bg, catId: cat.id });
        }
      });
    }
  });

  return (
    <div className="min-h-screen bg-[#FFFBEB] pb-24">
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 sticky top-16 md:top-0 z-20 shadow-md">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <h2 className="font-extrabold font-heading text-lg tracking-wide">Full Menu Catalog</h2>
          </div>
          <span className="text-xs bg-black/20 text-white font-bold px-3 py-1.5 rounded-full font-price shadow-inner backdrop-blur-sm">50+ Dishes</span>
        </div>
      </div>

      <div className="sticky top-[128px] md:top-16 z-10 bg-[#FFFBEB]/95 backdrop-blur-md border-b border-amber-200/50 py-4 shadow-sm">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-amber-500 transition-colors group-focus-within:text-amber-600">
              <Search className="h-5 w-5" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Discover your next favorite egg dish..."
              className="w-full bg-white/80 border-2 border-amber-100 rounded-2xl pl-12 pr-4 py-3.5 text-sm font-medium text-secondary placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/20 transition-all shadow-sm" 
            />
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar mt-4 pb-2">
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`standalone-cat-btn shrink-0 ${activeCategory === cat.id ? 'bg-primary text-secondary text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs' : 'bg-white text-gray-600 text-xs font-semibold px-4 py-2 rounded-xl transition-all hover:bg-amber-100/50'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {matches.length === 0 ? (
            <div className="col-span-full text-center py-16 text-gray-400">
                <SearchX className="h-10 w-10 mx-auto mb-2 opacity-40 text-amber-500" />
                <p className="font-medium text-sm">No dishes match your query</p>
                <p className="text-xs text-gray-500">Try modifying search term or active category</p>
            </div>
          ) : (
            matches.map((item, index) => {
              const imgs = ['IMG_0325.PNG', 'IMG_0326.PNG', 'IMG_0327.PNG', 'IMG_0365.PNG', 'IMG_0367.PNG'];
              const imgUrl = item.imageUrl || `/${imgs[index % imgs.length]}`;
              return (
                <div key={item.name} className="standalone-menu-card group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100/60 flex flex-col cursor-pointer">
                  <div className="h-40 relative overflow-hidden bg-amber-50 flex flex-col items-center justify-center">
                      <Image src={imgUrl} alt={item.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 pointer-events-none"></div>
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1 relative bg-white">
                      <div className="absolute -top-5 right-4 bg-white p-1 rounded-xl shadow-lg border border-amber-50">
                          <span className="bg-amber-100 text-amber-800 font-price text-sm font-extrabold px-3 py-1 rounded-lg block">₹{item.price}</span>
                      </div>
                      <div className="mt-1">
                          <h4 className="font-bold text-secondary text-base leading-tight mb-2 pr-12 group-hover:text-amber-600 transition-colors">{item.name}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed mb-5 line-clamp-2">{item.desc}</p>
                      </div>
                      <a href="tel:+918490063293" className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-amber-500 text-gray-700 hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 border border-gray-100 hover:border-amber-500">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> Add to Order
                      </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
