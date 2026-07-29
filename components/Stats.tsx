"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-20 bg-brand-darkest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-light uppercase max-w-5xl mx-auto leading-tight">
            Metodo creato da <span className="text-brand-orange">imprenditori dello sport</span> per imprenditori dello sport.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-premium p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle background glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px] -ml-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px] -mr-20 -mb-20 pointer-events-none" />

          <div className="grid grid-cols-4 gap-1 sm:gap-4 relative z-10 divide-x divide-brand-darkBlue/30">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-start text-center px-1 sm:px-4">
              <span className="text-[8px] sm:text-sm font-bold text-brand-light/60 tracking-tight sm:tracking-widest uppercase mb-1 sm:mb-2 h-6 sm:h-auto flex items-end">
                Oltre
              </span>
              <span className="text-xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-brand-blue to-brand-light bg-clip-text text-transparent mb-1 sm:mb-3">
                430
              </span>
              <span className="text-[9px] sm:text-base text-brand-light/80 font-medium leading-tight">
                abbonati ai nostri corsi
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-start text-center px-1 sm:px-4">
              <span className="text-[8px] sm:text-sm font-bold text-brand-light/60 tracking-tight sm:tracking-widest uppercase mb-1 sm:mb-2 h-6 sm:h-auto flex items-end">
                Una società da oltre
              </span>
              <span className="text-xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-brand-blue to-brand-light bg-clip-text text-transparent mb-1 sm:mb-3">
                1 MLN
              </span>
              <span className="text-[9px] sm:text-base text-brand-light/80 font-medium leading-tight">
                l'anno
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-start text-center px-1 sm:px-4">
              <span className="text-[8px] sm:text-sm font-bold text-brand-light/60 tracking-tight sm:tracking-widest uppercase mb-1 sm:mb-2 h-6 sm:h-auto flex items-end">
                Con oltre
              </span>
              <span className="text-xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-brand-blue to-brand-light bg-clip-text text-transparent mb-1 sm:mb-3">
                30
              </span>
              <span className="text-[9px] sm:text-base text-brand-light/80 font-medium leading-tight">
                dipendenti
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-start text-center px-1 sm:px-4">
              <span className="text-[8px] sm:text-sm font-bold text-brand-light/60 tracking-tight sm:tracking-widest uppercase mb-1 sm:mb-2 h-6 sm:h-auto flex items-end">
                Eventi con oltre
              </span>
              <span className="text-xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-brand-blue to-brand-light bg-clip-text text-transparent mb-1 sm:mb-3">
                1200
              </span>
              <span className="text-[9px] sm:text-base text-brand-light/80 font-medium leading-tight">
                persone giornaliere
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
