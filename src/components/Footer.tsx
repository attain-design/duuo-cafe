
import React from 'react';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-cafe-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col items-center justify-center">
          <Coffee className="mb-4 h-8 w-8 text-cafe-peach" />
          <h3 className="mb-2 text-2xl font-bold">DUUO</h3>
          <p className="text-white/80">Ihr gemütliches Café in München Westend</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="text-center">
            <p className="text-white/80">Westendstraße 123</p>
            <p className="text-white/80">80339 München</p>
          </div>

          <div className="text-center">
            <p className="text-white/80">089 / 123 45 67</p>
            <p className="text-white/80">info@duuo-cafe.de</p>
          </div>

          <div className="text-center">
            <p className="text-white/80">Mo - Fr: 08:00 - 19:00 Uhr</p>
            <p className="text-white/80">Sa: 09:00 - 20:00 Uhr</p>
            <p className="text-white/80">So: 10:00 - 18:00 Uhr</p>
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
    </footer>
  );
};

export default Footer;
