"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Clock, Timer, Utensils, ShoppingBag, ChevronLeft, ChevronRight, BookOpen, ChevronDown, Phone, FileText } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { originalMenuData, fetchDynamicMenu, MenuCategory } from "@/data/menu";
import { MenuCard } from "@/components/ui/MenuCard";

export default function Home() {
  useIntersectionObserver();
  const router = useRouter();

  const [menuData, setMenuData] = useState<MenuCategory[]>(originalMenuData);
  
  useEffect(() => {
    fetchDynamicMenu().then(data => setMenuData(data));
  }, []);

  // Tabbed Slider State
  const [activeTab, setActiveTab] = useState(menuData[0]?.id || "starters");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (num: number) => {
    setOpenFaq(openFaq === num ? null : num);
  };

  const handleSlide = (dir: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: dir * 420, behavior: "smooth" });
    }
  };

  const activeCategoryData = menuData.find(cat => cat.id === activeTab);
  const filteredItems = activeCategoryData?.items.filter(item => 
    !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <main id="main-view" className="block">
      {/* ─── HERO ─── */}
      <section id="home" className="relative py-12 md:py-24 bg-background overflow-hidden">
        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,#FDE68A 0%,transparent 70%)", opacity: 0.5 }}></div>
        <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,#F59E0B55 0%,transparent 70%)" }}></div>
        <div className="absolute inset-0 dots-bg opacity-40 pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="reveal text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Clock className="h-3.5 w-3.5" /> Open 5:00 PM – 12:00 AM, Every Day
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight font-heading">
                Better Eggs.<br /><span className="text-primary">Better Taste.</span>
              </h1>
              <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-md mx-auto md:mx-0">
                Bilimora's favorite egg destination. From classic bhurji to signature specials, every dish is made fresh and served hot.
              </p>
              <div className="mt-3 flex items-center gap-2 justify-center md:justify-start text-sm text-gray-500">
                <Timer className="h-4 w-4 text-amber-500" />
                Orders ready in 10–15 minutes
              </div>
              <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <button onClick={() => {
                  const el = document.getElementById("menu");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }} className="btn btn-primary shadow-md">
                  <Utensils className="h-4 w-4" /> View Food Menu
                </button>
                <button onClick={() => router.push("/franchise")} className="btn btn-secondary">
                  Apply for Franchise
                </button>
              </div>
              {/* Trust strip */}
              <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-amber-800">R</div>
                  <div className="w-7 h-7 rounded-full bg-amber-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-amber-900">K</div>
                  <div className="w-7 h-7 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-amber-700">P</div>
                </div>
                <p className="text-xs text-gray-500"><span className="font-semibold text-secondary">3,000+</span> happy customers in Bilimora</p>
              </div>
            </div>

            {/* Hero image */}
            <div className="reveal flex justify-center mt-4 md:mt-0">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <Image 
                    src="/hero section.png" 
                    alt="Eggoholic Hero Image" 
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CUSTOMER FAVORITES ─── */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center reveal mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">Customer Favorites</h2>
            <p className="mt-1.5 text-gray-500 text-sm">Must-try dishes loved by our regulars</p>
          </div>
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 md:pb-0 no-scrollbar snap-x px-2">
            {menuData[0]?.items.slice(0, 5).map((item, i) => (
               <MenuCard key={item.name} item={item} imageUrl={['IMG_0325.PNG', 'IMG_0326.PNG', 'IMG_0327.PNG', 'IMG_0365.PNG', 'IMG_0367.PNG'][i]} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TABBED SLIDER MENU ─── */}
      <section id="menu" className="py-12 md:py-20 bg-background scroll-mt-16 border-t border-amber-100/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <div className="text-center reveal">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">Our Signature Delicacies</h2>
            <p className="mt-1.5 text-gray-500 text-sm">Swipe or use arrows to discover our authentic egg creations</p>
          </div>
        </div>

        <div className="sticky top-16 z-20 bg-[#FFFBEB]/95 backdrop-blur shadow-sm border-b border-amber-100 py-3 mb-6">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="relative mb-3">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 border border-amber-100 rounded-xl bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Search bhurji, gotala, makhani, sizzler..." 
              />
            </div>
            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 reveal mt-4 relative z-10 px-4 md:px-0" style={{ transitionDelay: "100ms" }}>
              {menuData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`tab-btn shrink-0 ${activeTab === cat.id ? "bg-primary text-secondary px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all duration-300" : "bg-white text-gray-500 hover:bg-amber-100/50 hover:text-amber-700 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm border border-amber-100/50"}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative">
             <button className="slider-arrow hidden md:flex" style={{ left: "-18px" }} onClick={() => handleSlide(-1)}>
               <ChevronLeft className="h-4 w-4" />
             </button>
             <div className="menu-slider-track overflow-x-auto no-scrollbar" ref={sliderRef}>
               <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto no-scrollbar py-6 scroll-smooth px-4 md:px-0 snap-x"
              >
                {menuData.map((cat) => (
                  <div key={cat.id} className={activeTab === cat.id ? "flex gap-6 contents-wrapper" : "hidden"}>
                    {cat.items.filter(item => 
                      !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map((item, index) => {
                      const imgs = ['IMG_0325.PNG', 'IMG_0326.PNG', 'IMG_0327.PNG', 'IMG_0365.PNG', 'IMG_0367.PNG'];
                      const imgUrl = imgs[index % imgs.length];
                      return <MenuCard key={item.name} item={item} imageUrl={imgUrl} />
                    })}
                  </div>
                ))}
              </div>
             </div>
             <button className="slider-arrow hidden md:flex" style={{ right: "-18px" }} onClick={() => handleSlide(1)}>
               <ChevronRight className="h-4 w-4" />
             </button>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="py-16 bg-white border-t border-amber-100/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                Our Story
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Our Signature Creations</h2>
              <p className="text-gray-600 leading-relaxed mb-3">Eggoholic started with one simple idea: to celebrate the humble egg in all its glory. From classic Indian preparations to experimental fusion dishes, we built a menu of 50+ egg creations that keep guests coming back every evening.</p>
              <div className="grid grid-cols-3 gap-3 mb-7 mt-6">
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-extrabold text-primary font-price">50+</p>
                  <p className="text-xs text-gray-500 mt-1">Egg Dishes</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-extrabold text-primary font-price">4.8★</p>
                  <p className="text-xs text-gray-500 mt-1">Avg Rating</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-extrabold text-primary font-price">7hrs</p>
                  <p className="text-xs text-gray-500 mt-1">Daily Service</p>
                </div>
              </div>
              <button onClick={() => router.push("/journey")} className="btn btn-secondary gap-2 w-full sm:w-auto shadow-xs">
                <BookOpen className="h-4 w-4" /> Explore Our Full Journey
              </button>
            </div>
            <div className="reveal grid grid-cols-2 gap-4">
              <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-sm">
                <Image src="/signature1.png" alt="Signature 1" fill sizes="50vw" className="object-cover" />
              </div>
              <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-sm mt-6">
                <Image src="/signature2.png" alt="Signature 2" fill sizes="50vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY TEASER ─── */}
      <section className="py-16 bg-[#FFFBEB] border-t border-amber-100/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1C1E] font-heading tracking-tight">A Peek Inside Our Kitchen & Spaces</h2>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
             {/* Griddle Prep */}
             <div className="snap-center shrink-0 w-[280px] md:w-[320px] rounded-[24px] shadow-sm bg-white border border-amber-100/50 flex flex-col">
                <div className="w-full bg-amber-50/50 p-4 h-[220px]">
                   <img src="/billimora.png" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="p-5 text-center mt-auto border-t border-amber-100/30">
                   <p className="text-lg font-bold">The Griddle Prep</p>
                </div>
             </div>
             {/* Dine in Vibes */}
             <div className="snap-center shrink-0 w-[280px] md:w-[320px] rounded-[24px] shadow-sm bg-white border border-amber-100/50 flex flex-col">
                <div className="w-full bg-amber-50/50 p-4 h-[220px]">
                   <img src="/dinning space.png" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="p-5 text-center mt-auto border-t border-amber-100/30">
                   <p className="text-lg font-bold">Dine in Vibes</p>
                </div>
             </div>
             {/* Mamna Gravy */}
             <div className="snap-center shrink-0 w-[280px] md:w-[320px] rounded-[24px] shadow-sm bg-white border border-amber-100/50 flex flex-col">
                <div className="w-full bg-amber-50/50 p-4 h-[220px]">
                   <img src="/Egg Mamna Gravy.png" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="p-5 text-center mt-auto border-t border-amber-100/30">
                   <p className="text-lg font-bold">Specialty Egg Gravy</p>
                </div>
             </div>
          </div>
          <div className="mt-8 text-center reveal">
             <button onClick={() => router.push("/journey")} className="btn btn-secondary px-8 py-3 rounded-xl">View All Gallery</button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-[#fffbeb] border-t border-amber-100/50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary font-heading">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
             {[
               { q: "What are your daily operational timings?", a: "We serve hot, freshly made egg delicacies daily from 5:00 PM to 12:00 AM (Midnight) across Bilimora." },
               { q: "How can I apply for a franchise opportunity?", a: "Franchise opportunities are open across India. Simply fill out the Franchise Inquiry form on our dedicated Franchise page, or call our team directly at +91 84900 63293." },
               { q: "Can I order food directly from this website?", a: "This is our digital catalog website showcasing our extensive 50+ egg creations. For delivery or takeaway, call us at +91 84900 63293." }
             ].map((faq, i) => (
               <div key={i} className="bg-white rounded-2xl border border-amber-200/60 shadow-xs overflow-hidden">
                 <button onClick={() => toggleFaq(i)} className="w-full flex justify-between items-center p-5 text-left font-bold text-secondary text-sm sm:text-base hover:bg-amber-50/50 transition-colors">
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                 </button>
                 <div className={`faq-content ${openFaq === i ? "open" : ""}`}>
                    <div className="p-5 pt-0 border-t border-amber-100/40 text-xs sm:text-sm text-gray-600 leading-relaxed bg-amber-50/20">
                      {faq.a}
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA STRIP ─── */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 reveal">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary">Want to bring Eggoholic to your city?</h3>
              <p className="text-gray-600 text-sm mt-1.5 font-medium">Join India's fastest-growing premium egg restaurant franchise today.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0 w-full sm:w-auto">
              <a href="tel:+918490063293" className="btn btn-secondary justify-center flex-1 sm:flex-initial shadow-sm">
                <Phone className="h-4 w-4" /> Call Our Franchise Team
              </a>
              <button onClick={() => router.push("/franchise")} className="btn btn-primary flex-1 sm:flex-initial">
                <FileText className="h-4 w-4" /> Franchise Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
