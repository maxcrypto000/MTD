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
            <img src="/logo.png" alt="Metodo Tour Digitale" className="w-20 h-20 sm:w-12 sm:h-12 object-contain" />

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
