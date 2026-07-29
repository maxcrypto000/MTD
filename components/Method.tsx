"use client";

import { motion } from "framer-motion";

export default function Method() {
  return (
    <section className="py-24 bg-brand-darkBlue/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="card-premium p-6 sm:p-12">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 sm:mb-10 text-center">
              HAI BISOGNO DI QUALCUNO CHE <span className="text-brand-orange">VIVE DI SPORT</span> E SA CHE COSA VUOL DIRE GESTIRE UN CENTRO OGNI GIORNO.
            </h2>

            <div className="space-y-6 text-brand-light/90 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center">
              <p>
                Hai bisogno di qualcuno che è da anni in contatto con prove gratuite, corsi per bambini e per adulti, l’agonismo, il rapporto tra allenatore e genitori, la segreteria, i servizi, l’attrezzatura e altre mille variabili che solo chi gestisce un centro sportivo conosce.
              </p>
              <p className="font-bold text-brand-blue text-xl">
                Affidati a chi ha cambiato la sua vita e il destino della propria società sportiva con il <span className="text-brand-blue">Metodo Tour Digitale.</span>
              </p>
              <p>
                In un anno e mezzo <strong className="font-bold text-brand-orange">abbiamo raddoppiato il fatturato</strong> della nostra società sportiva Mezzaluna, passando da poco meno di 200 iscritti a più di 430 e organizzando eventi con oltre 1.200 persone giornaliere.
              </p>
            </div>

            <div className="mt-12 text-center">
              <motion.a
                href="#candidati"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block btn-primary text-lg px-10 py-5 shadow-[0_0_20px_rgba(255,91,33,0.3)]"
              >
                Candidati qui sotto
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
