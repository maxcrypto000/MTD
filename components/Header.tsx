"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-darkest/95 backdrop-blur-sm border-b border-brand-darkBlue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-darkBlue rounded flex items-center justify-center font-bold text-brand-orange text-xs text-center border border-brand-orange/20 overflow-hidden">
               <span className="text-[8px] sm:text-[10px]">LOGO MTD</span>
            </div>
            <span className="ml-3 font-bold text-lg sm:text-xl tracking-tight text-brand-light">Metodo Tour Digitale</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#chi-siamo" className="text-brand-light hover:text-brand-orange transition-colors text-sm font-semibold tracking-wide">
              CHI SIAMO
            </Link>
            <Link href="#cosa-facciamo" className="text-brand-light hover:text-brand-orange transition-colors text-sm font-semibold tracking-wide">
              COSA FACCIAMO
            </Link>
            <Link href="#contattaci" className="text-brand-light hover:text-brand-orange transition-colors text-sm font-semibold tracking-wide">
              CONTATTACI
            </Link>
          </nav>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-brand-light hover:text-brand-orange p-2 focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-brand-darkBlue/30 bg-brand-darkest"
          >
            <nav className="flex flex-col px-4 py-6 space-y-4">
              <Link href="#chi-siamo" onClick={toggleMenu} className="text-brand-light hover:text-brand-orange text-base font-semibold tracking-wide">
                CHI SIAMO
              </Link>
              <Link href="#cosa-facciamo" onClick={toggleMenu} className="text-brand-light hover:text-brand-orange text-base font-semibold tracking-wide">
                COSA FACCIAMO
              </Link>
              <Link href="#contattaci" onClick={toggleMenu} className="text-brand-light hover:text-brand-orange text-base font-semibold tracking-wide">
                CONTATTACI
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
