"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const pillars = [
  {
    id: 1,
    title: "ANALISI DELLA TUA SOCIETÀ",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80",
    description: [
      "Individuiamo i tuoi punti di forza, ciò che ti rende diverso dalla concorrenza, perché ormai cercano tutti di fare solo il prezzo più basso.",
      "Un nostro manager effettuerà un sopralluogo presso la tua struttura e svolgerà una riunione di circa 3-4 ore con te per conoscere a fondo il tuo business, i tuoi punti di forza, la tua filosofia e il tipo di clientela che desideri attrarre.",
      "Questa fase è fondamentale per individuare il tuo reale vantaggio competitivo e definire il target ideale a cui rivolgeremo tutta la comunicazione."
    ]
  },
  {
    id: 2,
    title: "COSTRUZIONE DEL TOUR DIGITALE",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    description: [
      "Costruzione del Tour Digitale della tua struttura, per raccontare nel dettaglio i tuoi allenatori, l’attrezzatura, i servizi, gli allenamenti e la vostra filosofia.",
      "Dopo aver raccolto tutte le informazioni necessarie, il nostro manager creerà il tuo Tour Digitale con l’aiuto di un grafico, un copywriter, un videomaker e un editor.",
      "Quando il materiale sarà pronto, il nostro advertiser lancerà il tuo Tour online, monitorando quotidianamente il budget concordato e aggiornandoti ogni settimana sui risultati ottenuti.",
      "Avrai sempre accesso alle piattaforme utilizzate per promuovere il tuo Tour Digitale e, ogni mese, riceverai: l’elenco dei potenziali clienti interessati; un report dettagliato; il confronto tra investimento effettuato e risultati economici ottenuti."
    ]
  },
  {
    id: 3,
    title: "ALLENIAMO I TUOI ISTRUTTORI A SVOLGERE OGNI PROVA GRATUITA IN MODO VINCENTE",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
    description: [
      "Non basta essere gentili e preparati, bisogna sapersi vendere.",
      "Il nostro manager, con anni di esperienza nel settore, formerà i tuoi istruttori affinché ogni prova diventi una concreta opportunità di vendita.",
      "In base al pacchetto scelto, la formazione sarà erogata tramite videocorso oppure direttamente presso la tua struttura."
    ]
  },
  {
    id: 4,
    title: "LA TUA SEGRETERIA IMPARERÀ A VENDERE IN MODO ECCELLENTE",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
    description: [
      "Molti abbonamenti si perdono ancora prima che il cliente entri in sala.",
      "Per questo formeremo la tua segreteria affinché impari a gestire telefonate, appuntamenti e richieste con un metodo commerciale efficace, aumentando il numero di iscrizioni senza risultare insistente.",
      "Anche in questo caso, la formazione sarà disponibile tramite videocorso oppure direttamente in presenza, in base al pacchetto scelto."
    ]
  },
  {
    id: 5,
    title: "LA TUA OFFERTA DIVENTERÀ COSÌ INCREDIBILE DA FAR SENTIRE LA GENTE SCIOCCA A NON APPROFITTARNE",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    description: [
      "Una grande offerta non significa abbassare i prezzi, ma aumentare il valore percepito.",
      "Ti aiuteremo a costruire un’offerta irresistibile, a presentare il prezzo nel modo corretto e a comunicare tutti i benefici del tuo servizio, così che il cliente percepisca il tuo abbonamento come la scelta più conveniente e logica.",
      "L’obiettivo è semplice: fare in modo che acquistare da te diventi una decisione naturale, senza dover ricorrere a sconti continui."
    ]
  }
];

// Define prop types since we're using TypeScript
type Pillar = typeof pillars[0];

function PillarItem({ pillar, index }: { pillar: Pillar; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-brand-darkBlue/20 shadow-2xl">
          <img
            src={pillar.image}
            alt={pillar.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-brand-orange text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-black shadow-lg">
            {pillar.id}
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl sm:text-3xl font-bold text-brand-light mb-6 leading-tight">
          {pillar.title}
        </h3>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-6 mb-8 pt-2">
                {pillar.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1 mr-4" />
                    <p className="text-lg text-brand-light/80 leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 bg-brand-darkBlue/20 text-brand-blue hover:bg-brand-darkBlue/40 hover:text-white font-bold py-3 px-6 rounded-full transition-all border border-brand-blue/30"
        >
          {isOpen ? (
            <>Nascondi descrizione <ChevronUp className="w-5 h-5" /></>
          ) : (
            <>Leggi di più <ChevronDown className="w-5 h-5" /></>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  return (
    <section className="py-24 bg-brand-darkest" id="cosa-facciamo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-brand-light mb-6">
            I <span className="text-brand-orange">5 PILASTRI</span> DEL METODO
          </h2>
          <p className="text-xl text-brand-light/70">Ecco come funziona nello specifico</p>
        </div>

        <div className="space-y-32">
          {pillars.map((pillar, index) => (
            <PillarItem key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>

        <div className="mt-32 text-center">
          <motion.a
            href="#candidati"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-primary text-xl px-12 py-6 shadow-[0_0_30px_rgba(255,91,33,0.4)]"
          >
            Candidati qui sotto
          </motion.a>
        </div>
      </div>
    </section>
  );
}

