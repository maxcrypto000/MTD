"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-darkest/95 backdrop-blur-sm border-b border-brand-darkBlue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex-shrink-0 flex items-center h-full py-3 sm:py-4">
            <img src="/logo.png?v=2" alt="Metodo Tour Digitale" className="h-full w-auto object-contain" />
          </div>

          <div className="flex items-center">
            <a 
              href="tel:3408139468" 
              className="flex items-center justify-center p-3 sm:p-4 rounded-full bg-brand-orange text-white hover:bg-[#FF8A3D] hover:scale-105 transition-all shadow-lg shadow-brand-orange/20"
              aria-label="Chiama ora"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
