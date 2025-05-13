
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const slides = [{
  id: 1,
  image: "https://images.unsplash.com/photo-1432107294469-414527cb5c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "Café Interieur mit gemütlichem Ambiente"
}, {
  id: 2,
  image: "https://images.unsplash.com/photo-1475296204602-08d15839e95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "Barista bei der Zubereitung eines Kaffees"
}, {
  id: 3,
  image: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "Frisch gebackene Croissants auf Holztablett"
}, {
  id: 4,
  image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "Kaffee und Kuchen auf einem Tisch"
}];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out animation
      setFadeState("fade-out");
      
      // Wait for fade out to complete before changing slide
      setTimeout(() => {
        setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
        // Start fade in animation
        setFadeState("fade-in");
      }, 500); // 500ms for the fade out animation
      
    }, 6000); // Changed to 6 seconds per slide
    
    return () => clearInterval(interval);
  }, []);
  
  return <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={cn(
            'slideshow-slide', 
            index === currentSlide && 'active',
            index === currentSlide && `animate-${fadeState}`
          )}
        >
          <div className={cn('slideshow-image-container h-full w-full', index === currentSlide && 'animate-ken-burns')}>
            <img src={slide.image} alt={slide.alt} className="slideshow-image" />
          </div>
        </div>
      ))}
      <div className="slideshow-overlay">
        <div className="mb-4">
          <img alt="DUUO Logo" className="h-40 w-auto" src="/lovable-uploads/82cb6b56-0dc3-43ce-9fc5-6fb5de962ab0.png" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">CAFÉ | TAGESBAR | EVENTLOCATION</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center">Gemütliche Atmosphäre, ausgezeichneter Kaffee  
& hausgemachte Köstlichkeiten</p>
      </div>
    </div>;
};

export default HeroSlideshow;
