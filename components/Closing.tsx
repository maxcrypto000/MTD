"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section className="py-24 bg-brand-darkest relative overflow-hidden border-t border-brand-darkBlue/20" id="candidati">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="card-premium p-6 sm:p-16 text-center backdrop-blur-sm z-10"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ transition: "none" }}
            className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ transition: "none" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/30 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"
          />
          <div className="relative z-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-light mb-6 sm:mb-8 leading-tight">
            O OTTIENI CIÒ CHE TI PROMETTIAMO <br />
            <span className="text-brand-orange">O NON CI PAGHI!</span>
          </h2>
          
          <div className="text-lg sm:text-xl text-brand-light/90 space-y-6 mb-12">
            <p>
              Per il primo mese, se passerai la chiamata di selezione con un nostro consulente, accederai <strong>gratuitamente</strong> al Metodo Tour Digitale.
            </p>
            <p>
              Ti basterà registrarti qui sotto per essere contattato.
            </p>
          </div>

          <div className="bg-brand-darkest border border-brand-orange/30 rounded-2xl p-6 sm:p-8 mb-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-lg sm:text-2xl font-bold text-brand-light mb-4">
              SOLO DOPO LA PROVA GRATUITA VALUTERAI TU STESSO SE CONTINUARE PER SOLI:
            </h3>
            <p className="text-4xl sm:text-7xl font-black text-brand-orange mb-4 tracking-tight">
              799 € <span className="text-xl sm:text-3xl text-brand-light/70 font-bold">/ mese + IVA</span>
            </p>
            <div className="inline-block bg-brand-blue/10 text-brand-blue font-bold px-3 py-2 rounded-xl sm:rounded-full text-xs sm:text-base border border-brand-blue/20">
              SENZA CONTRATTI VINCOLANTI E CON LA POSSIBILITÀ DI RECEDERE QUANDO VUOI.
            </div>
          </div>

          {/* Dummy Form for the landing page */}
          <form className="max-w-md mx-auto space-y-4 mb-8 text-left">
             <div>
                <input type="text" placeholder="Nome e Cognome" className="w-full bg-brand-darkest/50 border border-brand-darkBlue/30 rounded-xl px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange transition-colors" required />
             </div>
             <div>
                <input type="email" placeholder="Email" className="w-full bg-brand-darkest/50 border border-brand-darkBlue/30 rounded-xl px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange transition-colors" required />
             </div>
             <div>
                <input type="tel" placeholder="Numero di Telefono" className="w-full bg-brand-darkest/50 border border-brand-darkBlue/30 rounded-xl px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange transition-colors" required />
             </div>
             <div>
                <input type="text" placeholder="Nome Società Sportiva" className="w-full bg-brand-darkest/50 border border-brand-darkBlue/30 rounded-xl px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange transition-colors" required />
             </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full btn-primary text-xl px-8 py-5 shadow-lg mt-4"
            >
              Candidati qui sotto
            </motion.button>
          </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
