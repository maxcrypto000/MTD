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
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="bg-brand-darkBlue/10 border border-brand-orange/30 rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-[0_0_30px_rgba(255,91,33,0.05)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50"></div>

            <h3 className="text-2xl sm:text-3xl font-black text-brand-light mb-6 text-center">
              Ci siamo passati <span className="text-brand-orange">prima di te…</span>
            </h3>

            <div className="text-lg sm:text-xl text-brand-light/90 leading-relaxed text-center space-y-4 font-medium">
              <p>
                Ci abbiamo già provato con metodi datati che nel 2026 <strong className="text-brand-blue font-bold">non funzionano più</strong>.
              </p>
              <p>
                Ci siamo affidati per anni al volantinaggio, al passaparola, alle agenzie di marketing e anche agli open day, ma <strong className="text-brand-orange font-bold">niente ha mai davvero fatto la differenza</strong>…
              </p>
            </div>
          </div>
        </motion.div>

        <div className="card-premium p-6 sm:p-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-brand-light mb-8 leading-tight">
              I VOLANTINI FINISCONO NEL SECCHIO E LE AGENZIE DI MARKETING <span className="text-brand-orange font-black">NON POSSONO AIUTARTI!</span>
            </h2>
            <div className="space-y-6 text-brand-light/90 text-lg">
              <p>
                Ti vendono <strong className="font-bold">dati difficilmente convertibili in denaro</strong>, come <em className="italic">like e visualizzazioni</em>, facilmente manipolabili con bot da due soldi.
              </p>
              <p className="font-bold text-brand-blue">
                Cosa vuoi che ne sappiano di come si gestisce un centro sportivo?
              </p>
              <p>
                <strong className="font-bold">Non gestiscono aziende di proprietà:</strong> Vogliono venderti la loro soluzione miracolosa, ma lavorano costantemente con la qualunque (ristoranti, bar, gelaterie, ecc.)<strong className="font-bold"> Non sono specializzate nel tuo settore,</strong> è ovvio che non possano soddisfare ciò di cui hai realmente bisogno.
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
