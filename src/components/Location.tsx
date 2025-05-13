import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import MapLocation from './MapLocation';
import { initScrollAnimations } from '@/utils/scrollAnimation';
const Location = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);
  return <section id="standort" className="relative">
      <div className="relative h-[600px] w-full parallax-bg" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1576753092241-37d18f12f898?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className={`absolute inset-0 transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          <div className="h-full w-full bg-black/60"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 text-4xl font-bold fade-in-up">Hier finden Sie uns</h2>
              
              <div className="mb-8 flex items-center justify-center fade-in-up" style={{
              transitionDelay: '0.2s'
            }}>
                <MapPin className="mr-2 h-6 w-6 text-cafe-peach" />
                <p className="text-xl">München - Westend</p>
              </div>
              
              <div className="mb-8 rounded-lg bg-white/10 p-6 backdrop-blur-sm fade-in-up" style={{
              transitionDelay: '0.3s'
            }}>
                <p className="mb-2 text-xl font-bold">Café DUUO</p>
                <p className="mb-1">Gollierstraße 53</p>
                <p className="mb-4">80339 München</p>
                
                <p className="mb-1"><strong>Telefon:</strong> 089 / 123 45 67</p>
                <p className=""><strong>E-Mail:</strong> info@cafe-sonnenschein.de</p>
              </div>
              
              <div className="mb-4 fade-in-up" style={{
              transitionDelay: '0.4s'
            }}>
                <p className="mb-2 text-lg font-bold">Öffnungszeiten:</p>
                <p className="mb-1">Mittwoch - Freitag: 09:00 - 17:00 Uhr</p>
                <p className="mb-1">Samstag: 10:00 - 16:00 Uhr</p>
                <p>Sonntag: 10:00 - 16:00 Uhr</p>
              </div>
              
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center rounded-full bg-cafe-main px-6 py-3 text-white transition-all duration-300 hover:bg-cafe-dark fade-in-up" style={{
              transitionDelay: '0.5s'
            }}>
                <MapPin className="mr-2 h-5 w-5" />
                Route planen
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="fade-in-up" style={{
        transitionDelay: '0.6s'
      }}>
          <MapLocation />
        </div>
      </div>
    </section>;
};
export default Location;