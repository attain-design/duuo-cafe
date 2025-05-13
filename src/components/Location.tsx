
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
      <div className="container mx-auto px-4 pt-16 pb-8 text-center">
        <h2 className="text-4xl font-bold text-cafe-dark font-playfair fade-in-up border-b-2 border-cafe-main inline-block mx-auto pb-2">Hier finden Sie uns</h2>
      </div>
      
      <div className="relative h-[600px] w-full parallax-bg" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1576753092241-37d18f12f898?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
    }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className={`absolute inset-0 transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          <div className="h-full w-full bg-black/60"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center flex flex-col h-full justify-center py-12">
              <div className="fade-in-up my-auto">
                <p className="text-5xl font-playfair font-light">München - Westend</p>
                
                <div className="mt-6 fade-in-up" style={{
                transitionDelay: '0.4s'
              }}>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-cafe-peach/70 mr-2" />
                    <p className="text-white/80 text-sm">Gollierstraße 53, 80339 München</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="fade-in-up" style={{
        transitionDelay: '0.6s'
      }}>
          <MapLocation />
          <div className="mt-6 text-center">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-cafe-main px-6 py-3 text-white transition-all duration-300 hover:bg-cafe-dark fade-in-up">
              <MapPin className="mr-2 h-5 w-5" />
              Route planen
            </a>
          </div>
        </div>
      </div>
    </section>;
};

export default Location;
