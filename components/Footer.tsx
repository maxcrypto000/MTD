import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-darkest border-t border-brand-darkBlue/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logo.png?v=2" alt="Metodo Tour Digitale" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
            <p className="text-brand-light/60 text-sm max-w-sm">
              L'unico sistema strutturato in 5 pilastri per raddoppiare gli iscritti alla tua società sportiva senza agenzie di marketing o metodi obsoleti.
            </p>
          </div>

          {/* Contact */}
          <div id="contattaci" className="md:justify-self-end">
            <h4 className="text-brand-light font-bold mb-4 tracking-wider">CONTATTI</h4>
            <ul className="space-y-2 text-sm text-brand-light/60">
              <li>✉️ tourdigitaleinfo@gmail.com</li>
              <li>📞 340 813 9468</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-darkBlue/20 flex flex-col md:flex-row justify-between items-center text-sm text-brand-light/40">
          <p>&copy; 2026 Metodo Tour Digitale. Tutti i diritti riservati.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-brand-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-light transition-colors">Termini e Condizioni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
