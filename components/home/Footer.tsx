import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} - HAIR STUDIO
        </p>
      </div>
    </footer>
  );
};

export default Footer;
