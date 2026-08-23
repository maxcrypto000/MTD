"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
              HAI GIÀ PROVATO CON METODI DATATI CHE NEL 2026 <span className="text-brand-orange">NON FUNZIONANO PIÙ</span>
            </h3>

            <div className="text-lg sm:text-xl text-brand-light/90 leading-relaxed text-center space-y-4 font-medium">
              <p>
                Non è colpa tua, per anni ti hanno insegnato a credere nel volantinaggio, negli open day e nel passaparola. Poi sono arrivate le agenzie marketing... che ti hanno venduto <strong className="text-brand-orange font-bold">dati difficilmente convertibili in denaro</strong>, come like e visualizzazioni, tra l’altro facilmente manipolabili con bot da due soldi.
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
              <span className="text-brand-orange font-black">TI HANNO ILLUSO</span> DI RISOLLEVARTI CON UNA SOLUZIONE GENERICA!
            </h2>
            <div className="space-y-6 text-brand-light/90 text-lg">
              <p>
                I volantini finiscono nel secchio e gli open day sicuramente <strong className="text-brand-orange font-bold">non riempiranno</strong> grazie al passaparola.
              </p>
              <p className="font-bold text-brand-blue">
                Cosa vuoi che ne sappiano di come si gestisce un centro sportivo?
              </p>
              <p>
                <strong className="font-bold">Non gestiscono aziende di proprietà:</strong> Lavorano costantemente con la qualunque (ristoranti, bar, gelaterie, ecc.) è ovvio che non possano soddisfare ciò di cui hai realmente bisogno.
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
            <Image
              src="/Luca_spiega.jpeg"
              alt="Metodo Tour Digitale spiegazione"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-darkest/80 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
