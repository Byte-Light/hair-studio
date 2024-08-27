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
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {images.map((src, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500">
              <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
                Image {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
