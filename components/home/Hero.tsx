import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 flex">
        <div className="w-1/6 h-full relative">
          <Image src="/images/hero1.webp" alt="Model 1" fill style={{ objectFit: 'cover' }} className="opacity-60 hover:opacity-90 transition-all duration-500 ease-in-out" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/images/hero2.webp" alt="Model 2" fill style={{ objectFit: 'cover' }} className="opacity-60 hover:opacity-90 transition-all duration-500 ease-in-out" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/images/hero3.webp" alt="Model 3" fill style={{ objectFit: 'cover' }} className="opacity-60 hover:opacity-90 transition-all duration-500 ease-in-out" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/images/hero4.webp" alt="Model 4" fill style={{ objectFit: 'cover' }} className="opacity-60 hover:opacity-90 transition-all duration-500 ease-in-out" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/images/hero5.webp" alt="Model 5" fill style={{ objectFit: 'cover' }} className="opacity-60 hover:opacity-90 transition-all duration-500 ease-in-out" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/images/hero6.webp" alt="Model 6" fill style={{ objectFit: 'cover' }} className="opacity-60 hover:opacity-90 transition-all duration-500 ease-in-out" />
        </div>
      </div>
      
      {/* Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide">
          HairStudio
        </h1>
        <p className="mt-4 text-lg md:text-2xl lg:text-3xl font-light text-gray-300">
          Elevate your beauty to the next level.
        </p>
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-black rounded-full flex items-center justify-center space-x-3 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <span>Book Appointment</span>
          <span role="img" aria-label="Calendar">📅</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
