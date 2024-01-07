import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import React from 'react';

const HeroSection = () => {
  const styles = {
    backgroundImage: 'url("/Group 229.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    height: '900px',
  };

  return (
    <>
      <div style={styles}>
     <Navbar/>
     <Hero/>
      </div>
    </>
  );
};

export default HeroSection;
