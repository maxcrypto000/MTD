"use client";

import { motion } from "framer-motion";

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-light mb-10 leading-tight">
            LAVORI <span className="text-brand-orange">12 ORE AL GIORNO</span> PER UNO STIPENDIO POCO PIÙ ALTO DI QUELLO DI UN TUO DIPENDENTE!
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-brand-light/90 max-w-prose mx-auto mb-12 text-left">
            <p>
              Sei stanco di correre per una società che ti fa lavorare il doppio di un tuo dipendente e non ti dà la possibilità di vivere una vita sopra la media?
            </p>
            <p>
              Basta con soldi a fondo perduto, aiuti dallo Stato, scoperti in banca e chi più ne ha più ne metta. In questo modo non scalerai mai la tua società e non vivrai mai la vita che ti eri promesso.
            </p>
            <p className="font-bold text-brand-orange text-xl sm:text-2xl pt-4">
              Hai bisogno di nuove prove gratuite, nuove iscrizioni e di risollevare il tuo fatturato!
            </p>
          </div>

          <motion.a
            href="#candidati"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-primary text-lg px-8 py-4 shadow-lg"
          >
            Candidati qui sotto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
