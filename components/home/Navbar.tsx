"use client"
import React, { useState } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaScissors } from "react-icons/fa6";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Price List', href: '/price-list' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <FaScissors size={30} className="text-gray-800" />
        <div className="text-xs tracking-widest font-light">
          <p>HAIR</p>
          <p>STUDIO</p>
        </div>
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-semibold">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className="hover:underline">
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FaScissors size={24} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="https://instagram.com">
          <FaInstagram size={20} className="text-gray-800" />
        </Link>
        <Link href="https://facebook.com">
          <FaFacebookF size={20} className="text-gray-800" />
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-semibold hover:underline">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
