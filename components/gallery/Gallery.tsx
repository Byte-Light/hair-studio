// components/Gallery.tsx
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    '/images/gallery1.webp',
    '/images/gallery2.webp',
    '/images/gallery3.webp',
    '/images/gallery4.webp',
    '/images/gallery5.webp',
    '/images/gallery6.webp',
    '/images/gallery7.webp',
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
