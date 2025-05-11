
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlideshow from '@/components/HeroSlideshow';
import Menu from '@/components/Menu';
import InstagramFeed from '@/components/InstagramFeed';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

const Index = () => {
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
