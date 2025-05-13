
import React from 'react';
import { Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return <footer id="kontakt" className="bg-cafe-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col items-center justify-center">
          <Coffee className="mb-4 h-8 w-8 text-cafe-peach" />
          <h3 className="mb-2 text-2xl font-bold">DUUO</h3>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="text-center">
            <h4 className="mb-3 font-bold text-cafe-peach">Adresse</h4>
            <div className="flex items-center justify-center mb-2">
              <MapPin className="mr-1 h-4 w-4 text-cafe-peach/70" />
              <p className="text-white/80">Gollierstraße 53</p>
            </div>
            <p className="text-white/80">80339 München</p>
          </div>

          <div className="text-center">
            <h4 className="mb-3 font-bold text-cafe-peach">Kontakt</h4>
            <div className="flex items-center justify-center mb-2">
              <Phone className="mr-1 h-4 w-4 text-cafe-peach/70" />
              <p className="text-white/80">089 / 123 45 67</p>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="mr-1 h-4 w-4 text-cafe-peach/70" />
              <p className="text-white/80">hello@duuo.club</p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="mb-3 font-bold text-cafe-peach">Öffnungszeiten</h4>
            <div className="flex items-center justify-center mb-2">
              <Clock className="mr-1 h-4 w-4 text-cafe-peach/70" />
              <p className="text-white/80">Mi-Fr: 09:00 - 17:00 Uhr</p>
            </div>
            <p className="text-white/80">Sa-So: 10:00 - 16:00 Uhr</p>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white/80 hover:text-cafe-peach">Impressum</a>
          <a href="#" className="text-white/80 hover:text-cafe-peach">Datenschutz</a>
          <a href="#" className="text-white/80 hover:text-cafe-peach">AGB</a>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} DUUO. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
