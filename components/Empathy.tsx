"use client";

import { motion } from "framer-motion";

export default function Empathy() {
  return (
    <section className="py-24 bg-brand-darkest border-y border-brand-darkBlue/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-brand-orange mb-4">Ci siamo passati prima di te…</h3>
          <p className="text-lg sm:text-xl text-brand-light/80 max-w-3xl mx-auto italic">
            "Ci hai già provato con metodi datati che nel 2026 non funzionano più. Hai sperato nel volantinaggio, nel passaparola, nelle agenzie di marketing e anche negli open day, ma niente ha mai davvero fatto la differenza…"
          </p>
        </motion.div>

        <div className="card-premium p-6 sm:p-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-brand-light mb-8 leading-tight">
              I VOLANTINI FINISCONO NEL SECCHIO E LE AGENZIE DI MARKETING <span className="text-brand-orange">NON POSSONO AIUTARTI!</span>
            </h2>
            <div className="space-y-6 text-brand-light/90 text-lg">
              <p>
                Ti vendono dati difficilmente convertibili in denaro, come like e visualizzazioni, facilmente manipolabili con bot da due soldi.
              </p>
              <p className="font-bold text-brand-blue">
                Cosa vuoi che ne sappiano di come si gestisce un centro sportivo?
              </p>
              <p>
                Non gestiscono aziende di proprietà… Vogliono venderti la loro soluzione miracolosa, ma lavorano costantemente con la qualunque: ristoranti, bar, gelaterie. Non sono specializzate nel tuo settore, è ovvio che non possano soddisfare ciò di cui hai realmente bisogno.
              </p>
              <p>
                Non sanno che una società sportiva media fattura 200/300 mila euro l’anno e che non può permettersi abbonamenti mensili da 2 mila euro, più altro budget per investimenti pubblicitari.
              </p>
            </div>

            <div className="mt-10">
              <motion.a
                href="#candidati"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block btn-primary text-lg px-8 py-4 shadow-lg"
              >
                Candidati qui sotto
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-96 rounded-2xl overflow-hidden border border-brand-darkBlue/30 shadow-[0_0_40px_rgba(31,110,139,0.2)]"
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Data and Marketing"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-darkest/80 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
