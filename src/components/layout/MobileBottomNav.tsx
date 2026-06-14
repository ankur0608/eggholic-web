"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, Mail } from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div id="mobile-bottom-nav" className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)] border-t border-amber-100 z-40 h-16 flex items-center px-6">
      <Link
        href="/"
        className={`flex flex-col items-center justify-center flex-1 focus:outline-none focus:ring-0 active:scale-95 transition-all ${isActive("/") ? "text-primary" : "text-gray-400"}`}
      >
        <Home className="h-5 w-5" />
        <span className={`text-[10px] mt-1 ${isActive("/") ? "font-semibold" : "font-medium"}`}>Home</span>
      </Link>
      <Link
        href="/menu"
        className={`flex flex-col items-center justify-center flex-1 focus:outline-none focus:ring-0 active:scale-95 transition-all ${isActive("/menu") ? "text-primary" : "text-gray-400"}`}
      >
        <Grid3X3 className="h-5 w-5" />
        <span className={`text-[10px] mt-1 ${isActive("/menu") ? "font-semibold" : "font-medium"}`}>Menu</span>
      </Link>
      <Link
        href="/contact"
        className={`flex flex-col items-center justify-center flex-1 focus:outline-none focus:ring-0 active:scale-95 transition-all ${isActive("/contact") ? "text-primary" : "text-gray-400"}`}
      >
        <Mail className="h-5 w-5" />
        <span className={`text-[10px] mt-1 ${isActive("/contact") ? "font-semibold" : "font-medium"}`}>Contact</span>
      </Link>
    </div>
  );
}
