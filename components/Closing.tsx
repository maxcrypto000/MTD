"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function Closing() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Errore nella risposta del server');
      }
    } catch (error) {
      console.error("Errore nell'invio del form:", error);
      setStatus('error');
    }
  };

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
              OTTIENI CIÒ CHE TI PROMETTIAMO <br />
              <span className="text-brand-orange">O NON CI PAGHI!</span>
            </h2>

            <div className="text-lg sm:text-xl text-brand-light/90 space-y-6 mb-12">
              <p>
                Per il primo mese, se passerai la chiamata di selezione con un nostro consulente, accederai <strong>senza rischi a un periodo di prova</strong> al Metodo Tour Digitale.
              </p>
              <p>
                Ti basterà registrarti qui sotto per essere contattato.
              </p>
            </div>

            <div className="bg-brand-darkest border border-brand-orange/30 rounded-2xl p-6 sm:p-8 mb-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-lg sm:text-2xl font-bold text-brand-light mb-4">
                SOLO DOPO LA PROVA VALUTERAI TU STESSO SE FIRMARE PER SOLI:
              </h3>
              <p className="text-4xl sm:text-7xl font-black text-brand-orange mb-4 tracking-tight">
                899 € <span className="text-xl sm:text-3xl text-brand-light/70 font-bold">/ mese</span>
              </p>
              <div className="inline-block bg-brand-blue/10 text-brand-blue font-bold px-3 py-2 rounded-xl sm:rounded-full text-xs sm:text-base border border-brand-blue/20">
                SENZA CONTRATTI VINCOLANTI E CON LA POSSIBILITÀ DI RECEDERE QUANDO VUOI.
              </div>
            </div>

            {status === 'success' ? (
              <div className="max-w-md mx-auto bg-green-500/10 border border-green-500/30 rounded-2xl p-8 mb-8 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Candidatura inviata!</h3>
                <p className="text-brand-light/90">Ti contatteremo al più presto per la chiamata di selezione.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mb-8 text-left">
                {/* HONEYPOT: Campo invisibile per ingannare i bot. Se un bot lo compila, la richiesta viene bloccata dal server. */}
                <div aria-hidden="true" className="hidden absolute opacity-0 pointer-events-none">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                
                <div>
                  <input type="text" name="nome" placeholder="Nome e Cognome" className="w-full bg-brand-darkest/50 border border-brand-darkBlue/30 rounded-xl px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange transition-colors" required disabled={status === 'loading'} />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" className="w-full bg-brand-darkest/50 border border-brand-darkBlue/30 rounded-xl px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange transition-colors" required disabled={status === 'loading'} />
                </div>
                <div>
                  <input type="tel" name="telefono" placeholder="Numero di Telefono" className="w-full bg-brand-darkest/50 border border-brand-darkBlue/30 rounded-xl px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange transition-colors" required disabled={status === 'loading'} />
                </div>
                <div>
                  <input type="text" name="societa" placeholder="Nome Società Sportiva" className="w-full bg-brand-darkest/50 border border-brand-darkBlue/30 rounded-xl px-4 py-3 text-brand-light focus:outline-none focus:border-brand-orange transition-colors" required disabled={status === 'loading'} />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Si è verificato un errore. Riprova più tardi.</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status === 'loading' ? {} : { scale: 1.05 }}
                  whileTap={status === 'loading' ? {} : { scale: 0.95 }}
                  className={`w-full btn-primary text-xl px-8 py-5 shadow-lg mt-4 flex items-center justify-center ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    "Candidati"
                  )}
                </motion.button>
              </form>
            )}
            <p className="mt-4 text-sm sm:text-base leading-tight text-brand-light/80 text-center">
              Se non ottieni nel primo mese quello che ti promettiamo, non dovrai darci nemmeno un euro e non ci vedremo mai più.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
