import React from 'react';
import { Coffee } from 'lucide-react';
const Footer = () => {
  return <footer id="kontakt" className="bg-cafe-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col items-center justify-center">
          <Coffee className="mb-4 h-8 w-8 text-cafe-peach" />
          <h3 className="mb-2 text-2xl font-bold">DUUO</h3>
          <p className="text-white/80">
        </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="text-center">
            <p className="text-white/80">
          </p>
            <p className="text-white/80">
          </p>
          </div>

          <div className="text-center">
            <p className="text-white/80">
          </p>
            <p className="text-white/80">
          </p>
          </div>

          <div className="text-center">
            <p className="text-white/80">
          </p>
            <p className="text-white/80">
          </p>
            <p className="text-white/80">
          </p>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white/80 hover:text-cafe-peach">Impressum</a>
          <a href="#" className="text-white/80 hover:text-cafe-peach">Datenschutz</a>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} DUUO. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;