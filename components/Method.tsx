"use client";

import { motion } from "framer-motion";

export default function Method() {
  return (
    <section className="py-24 bg-brand-darkBlue/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-light mb-8">
            <span className="text-brand-orange">STAI PER AFFONDARE </span>SENZA RENDERTENE CONTO!
          </h2>
          <p className="text-lg sm:text-xl text-brand-light/90 max-w-4xl mx-auto">
            Ogni anno nuove società sportive aprono a 5 km da te, rubandoti fette di mercato enormi. Chi davvero ce la fa è strutturato con complessi sistemi di acquisizione clienti, siti web affilati e venditori. <strong className="font-bold">Sa che senza un metodo chiaro e scientifico nel 2026 non si va da nessuna parte.</strong>
          </p>
        </motion.div>

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-orange mb-8 sm:mb-10 text-center">
              METODO TOUR DIGITALE
            </h2>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 text-brand-light/90 text-base sm:text-lg leading-relaxed">
              <div className="space-y-6">
                <p>
                  Hai bisogno di qualcuno che vive di sport e sa che cosa vuol dire gestire un centro sportivo ogni giorno: prove gratuite, corsi per bambini e per adulti, l’agonismo, il rapporto tra allenatore e genitori, la segreteria, i servizi, l’attrezzatura e altre mille variabili che solo chi gestisce un centro sportivo conosce.
                </p>
                <p className="font-bold text-brand-blue text-xl">
                  Affidati a chi ha cambiato la sua vita e il destino della propria società sportiva con il Metodo Tour Digitale…
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  In un anno e mezzo <strong className="font-bold text-brand-orange">abbiamo raddoppiato il fatturato</strong> della nostra società sportiva Mezzaluna, passando da poco meno di 200 iscritti a più di 430 e organizzando eventi con oltre 1.200 persone spalmate su tutta la giornata.
                </p>
              </div>
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
