"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Franchise", path: "/franchise" },
    { name: "Our Journey", path: "/journey" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#fffbeb]/95 backdrop-blur-sm shadow-sm border-b border-amber-100/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative flex items-center gap-2 group"
            >
              <img
                src="/logo.png"
                alt="Eggoholic Logo"
                className="h-16 md:h-20 w-auto drop-shadow-md hover:scale-105 transition-transform duration-300 relative z-10 object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`nav-link text-secondary font-medium text-sm ${isActive(link.path) ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="btn btn-primary text-sm py-2 px-5">
                Contact Now
              </Link>
            </nav>

            {/* Mobile: hamburger only */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-secondary p-1"
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#fffbeb] shadow-lg z-20 border-t border-amber-100">
            <div className="flex flex-col gap-4 px-5 py-5 text-sm">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left font-medium ${isActive(link.path) ? "text-primary" : "text-secondary"}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
