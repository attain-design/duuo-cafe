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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className="slideshow-container">
      {slides.map((slide, index) => <div key={slide.id} className={cn('slideshow-slide', index === currentSlide && 'active')}>
          <div className={cn('slideshow-image-container h-full w-full', index === currentSlide && 'animate-ken-burns')}>
            <img src={slide.image} alt={slide.alt} className="slideshow-image" />
          </div>
        </div>)}
      <div className="slideshow-overlay">
        <div className="rounded-full bg-cafe-main/90 p-6 mb-4 shadow-lg">
          <img src="/lovable-uploads/3220a3f1-7466-4f93-8817-188bb6fe0f9d.png" alt="DUUO Logo" className="h-24 w-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">CAFÉ | TAGESBAR | EVENTLOCATION</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center">Gemütliche Atmosphäre, ausgezeichneter Kaffee &
hausgemachte Köstlichkeiten</p>
      </div>
    </div>;
};
export default HeroSlideshow;