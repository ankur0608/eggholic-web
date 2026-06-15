"use client";

import { PhoneCall } from "lucide-react";
import { MenuItem } from "@/data/menu";
import Image from "next/image";

interface MenuCardProps {
  item: MenuItem;
  imageUrl: string;
}

export function MenuCard({ item, imageUrl }: MenuCardProps) {
  return (
    <div className="menu-card-new group flex-shrink-0 w-[210px] md:w-[255px] bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-amber-100/40 overflow-hidden flex flex-col cursor-pointer">
      <div className="relative overflow-hidden bg-amber-50" style={{ height: "150px" }}>
        <Image
          src={item.imageUrl || `/${imageUrl}`}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 210px, 255px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <h4 className="text-white font-bold text-sm leading-tight font-heading group-hover:text-amber-300 transition-colors drop-shadow-md pr-2">
            {item.name}
          </h4>
          <span className="bg-amber-500/95 text-white font-price font-bold text-xs px-2.5 py-1 rounded-lg shadow-sm backdrop-blur-sm shrink-0">
            ₹{item.price}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between bg-white relative">
        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
          {item.desc}
        </p>
        <a
          href="tel:+918490063293"
          className="w-full flex items-center justify-center gap-2 bg-amber-50 hover:bg-amber-500 text-amber-700 hover:text-white text-xs font-bold py-2 px-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <PhoneCall className="h-3.5 w-3.5" /> Order Now
        </a>
      </div>
    </div>
  );
}
