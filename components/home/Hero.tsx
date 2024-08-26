import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-black">
      {/* Background images */}
      <div className="absolute inset-0 flex">
        <div className="w-1/6 h-full relative">
          <Image src="/image1.jpg" alt="Model 1" layout="fill" objectFit="cover" className="opacity-70" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/image2.jpg" alt="Model 2" layout="fill" objectFit="cover" className="opacity-70" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/image3.jpg" alt="Model 3" layout="fill" objectFit="cover" className="opacity-70" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/image4.jpg" alt="Model 4" layout="fill" objectFit="cover" className="opacity-70" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/image5.jpg" alt="Model 5" layout="fill" objectFit="cover" className="opacity-70" />
        </div>
        <div className="w-1/6 h-full relative">
          <Image src="/image6.jpg" alt="Model 6" layout="fill" objectFit="cover" className="opacity-70" />
        </div>
      </div>
      
      {/* Overlay */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold">HairStudio</h1>
        <p className="mt-4 text-lg md:text-xl">Next level beauty, next level you.</p>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-full flex items-center space-x-2">
          <span>Book Appointment</span>
          <span>📅</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
