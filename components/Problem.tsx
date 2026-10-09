"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Problem() {
  return (
    <section className="py-24 bg-brand-darkBlue/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-light mb-10 leading-tight uppercase">
            VORRESTI AUMENTARE I <span className="text-brand-orange">TUOI CORSISTI??</span>
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-brand-light/90 max-w-prose mx-auto mb-12 text-left">
            <p>
              I metodi che hai già provato non ti hanno fatto vedere aumenti significativi o peggio ancora ti hanno lasciato al punto di partenza?
            </p>
            <div className="relative w-full h-64 sm:h-80 my-8 rounded-2xl overflow-hidden border border-brand-darkBlue/30 shadow-lg">
              <Image 
                src="/Luca_e_aldo.jpeg" 
                alt="Luca in ufficio" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="font-bold text-brand-orange text-xl sm:text-2xl pt-4 text-center">
              Il ragazzetto che ti fa i video per i social, i volantini, il passaparola e i cartelloni pubblicitari nel 2026 non funziona più!
            </p>
          </div>

          <motion.a
            href="#candidati"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-primary text-lg px-8 py-4 shadow-lg"
          >
            CANDIDATI QUI SOTTO!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
