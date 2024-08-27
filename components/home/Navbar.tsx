"use client";
import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaBars, FaTimes } from 'react-icons/fa';
import { FaScissors } from "react-icons/fa6";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Squad', href: '/our-squad' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Price List', href: '/price-list' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-gray-500 text-white shadow-lg fixed w-full z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-2">
        <FaScissors size={30} className="text-teal-400" />
        <div className="text-xs tracking-widest font-light">
          <p className="leading-none">HAIR</p>
          <p className="leading-none">STUDIO</p>
        </div>
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-semibold">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className="hover:text-teal-500 transition duration-300 ease-in-out">
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link href="https://instagram.com">
          <FaInstagram size={20} className="hover:text-teal-500 transition duration-300 ease-in-out" />
        </Link>
        <Link href="https://facebook.com">
          <FaFacebookF size={20} className="hover:text-teal-500 transition duration-300 ease-in-out" />
        </Link>
      </div>
    </div>
  
    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6 md:hidden z-40">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href} 
            className="text-xl font-semibold hover:text-teal-500 transition duration-300 ease-in-out"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div className="flex space-x-6">
          <Link href="https://instagram.com">
            <FaInstagram size={24} className="hover:text-teal-500 transition duration-300 ease-in-out" />
          </Link>
          <Link href="https://facebook.com">
            <FaFacebookF size={24} className="hover:text-teal-500 transition duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
    )}
  </header>
  
  );
};

export default Navbar;
