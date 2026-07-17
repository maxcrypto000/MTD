import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-darkest border-t border-brand-darkBlue/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-brand-darkBlue rounded flex items-center justify-center font-bold text-brand-orange text-xs text-center border border-brand-orange/20 overflow-hidden">
                <span className="text-[8px]">LOGO</span>
              </div>
              <span className="ml-3 font-bold text-xl tracking-tight text-brand-light">Metodo Tour Digitale</span>
            </div>
            <p className="text-brand-light/60 text-sm">
              L'unico sistema strutturato in 5 pilastri per raddoppiare gli iscritti alla tua società sportiva senza agenzie di marketing o metodi obsoleti.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-brand-light font-bold mb-4 tracking-wider">NAVIGAZIONE</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#chi-siamo" className="text-brand-light/60 hover:text-brand-orange transition-colors text-sm">Chi Siamo</Link>
              </li>
              <li>
                <Link href="#cosa-facciamo" className="text-brand-light/60 hover:text-brand-orange transition-colors text-sm">Cosa Facciamo</Link>
              </li>
              <li>
                <Link href="#candidati" className="text-brand-light/60 hover:text-brand-orange transition-colors text-sm">Candidati</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contattaci">
            <h4 className="text-brand-light font-bold mb-4 tracking-wider">CONTATTI</h4>
            <ul className="space-y-2 text-sm text-brand-light/60">
              <li>📍 Via dello Sport, 1, Roma</li>
              <li>✉️ info@metodotourdigitale.it</li>
              <li>📞 +39 06 123 4567</li>
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
