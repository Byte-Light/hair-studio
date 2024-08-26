"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Next Salon Logo" width={50} height={50} />
        <div className="text-xs tracking-widest font-light">
          <p>HAIR</p>
          <p>STUDIO</p>
        </div>
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-semibold">
        {['Home', 'Services', 'About Us', 'Gallery', 'Price List', 'Contact Us'].map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase().replace(' ', '-')}`}  className="hover:underline">
            {item}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Image src="/hamburger-icon.png" alt="Menu" width={24} height={24} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="https://instagram.com">
       
            <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} />
       
        </Link>
        <Link href="https://facebook.com">
       
            <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
         
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          {['Home', 'Services', 'About Us', 'Gallery', 'Price List', 'Contact Us'].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase().replace(' ', '-')}`}  className="text-sm font-semibold hover:underline">
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
