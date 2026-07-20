"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden" id="chi-siamo">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Ragazzi che lavorano in ufficio"
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkest/70 via-brand-darkest/60 to-brand-darkest"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-brand-light leading-tight mb-6 sm:mb-8">
            SMETTI DI SOPRAVVIVERE E RIPARTI DAI <span className="text-brand-orange">5 PILASTRI</span> PER RILANCIARE QUALSIASI SOCIETÀ SPORTIVA.
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-brand-light/80 mb-10 sm:mb-12 max-w-3xl mx-auto font-medium">
            Metodo creato da un Imprenditore dello sport che gestisce una società da più di 1 milione di fatturato l’anno.
          </p>

          <motion.a
            href="#candidati"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-primary text-lg px-8 py-4 shadow-[0_0_20px_rgba(255,91,33,0.4)] hover:shadow-[0_0_30px_rgba(255,91,33,0.6)]"
          >
            Candidati qui sotto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
