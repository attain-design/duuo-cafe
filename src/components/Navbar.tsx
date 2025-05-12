import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent')}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="text-2xl font-bold font-serif" style={{
          color: "#bab3a1"
        }}>
            <img alt="DUUO" className="h-12 w-auto" src="/lovable-uploads/b5b1d10b-c6c0-493a-8baf-500d27f5b2ca.png" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <a href="#menu" className="nav-link" style={{
            color: "#bab3a1"
          }}>Speisekarte</a>
            <a href="#galerie" className="nav-link" style={{
            color: "#bab3a1"
          }}>Galerie</a>
            <a href="#standort" className="nav-link" style={{
            color: "#bab3a1"
          }}>Standort</a>
            <a href="#kontakt" className="nav-link" style={{
            color: "#bab3a1"
          }}>Kontakt</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="flex md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menü öffnen">
            {isMobileMenuOpen ? <X className="h-6 w-6" style={{
            color: "#bab3a1"
          }} /> : <Menu className="h-6 w-6" style={{
            color: "#bab3a1"
          }} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="absolute left-0 right-0 top-20 bg-white/95 shadow-md backdrop-blur-sm md:hidden">
          <nav className="flex flex-col space-y-4 p-6">
            <a href="#menu" className="text-lg font-medium" style={{
          color: "#bab3a1"
        }} onClick={() => setIsMobileMenuOpen(false)}>
              Speisekarte
            </a>
            <a href="#galerie" className="text-lg font-medium" style={{
          color: "#bab3a1"
        }} onClick={() => setIsMobileMenuOpen(false)}>
              Galerie
            </a>
            <a href="#standort" className="text-lg font-medium" style={{
          color: "#bab3a1"
        }} onClick={() => setIsMobileMenuOpen(false)}>
              Standort
            </a>
            <a href="#kontakt" className="text-lg font-medium" style={{
          color: "#bab3a1"
        }} onClick={() => setIsMobileMenuOpen(false)}>
              Kontakt
            </a>
          </nav>
        </div>}
    </header>;
};
export default Navbar;