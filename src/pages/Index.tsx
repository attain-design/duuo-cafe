
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlideshow from '@/components/HeroSlideshow';
import Menu from '@/components/Menu';
import InstagramFeed from '@/components/InstagramFeed';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { initScrollAnimations } from '@/utils/scrollAnimation';

const Index = () => {
  useEffect(() => {
    // Initialize the scroll animations on the entire page
    const cleanup = initScrollAnimations();
    
    // Clean up the event listener when component unmounts
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlideshow />
      <Menu />
      <InstagramFeed />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
