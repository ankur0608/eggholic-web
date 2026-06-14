"use client";

import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer-sec" className="bg-secondary text-white py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img
              src="/logo.png"
              alt="Eggoholic Logo"
              className="h-16 w-auto mb-6 brightness-0 invert opacity-90 drop-shadow-md"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              From a humble stall to Bilimora's most loved egg destination. 50+ unique creations served hot every evening.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/eggoholic.india" target="_blank" className="social-icon-btn flex items-center justify-center">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com/eggoholic.india" target="_blank" className="social-icon-btn flex items-center justify-center">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://wa.me/918490063293" target="_blank" className="social-icon-btn flex items-center justify-center">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/menu" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Food Menu</Link></li>
              <li><Link href="/franchise" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Franchise Program</Link></li>
              <li><Link href="/journey" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Our Story</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 font-heading">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>Nandarkha, Bilimora,<br />Gujarat 396321</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+918490063293" className="hover:text-primary transition-colors">+91 84900 63293</a>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <span>5:00 PM – 12:00 AM<br />Open Every Day</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-xs text-gray-500">© 2024 Eggoholic. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4 justify-center">
            <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
