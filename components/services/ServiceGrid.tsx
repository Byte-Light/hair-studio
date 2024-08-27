import React from 'react';

interface Service {
  title: string;
  imageUrl: string;
}

const services: Service[] = [
  { title: 'Treatments', imageUrl: '/images/service1.webp' },
  { title: 'Styling', imageUrl: '/images/service2.webp' },
  { title: 'Nail Services', imageUrl: '/images/service3.webp' },
  { title: 'Hair Extensions', imageUrl: '/images/service4.webp' },
  { title: 'Hair Cuts', imageUrl: '/images/service5.webp' },
  { title: 'Professional Colouring', imageUrl: '/images/service6.webp' },
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gradient-to-b from-gray-900 to-black">
      {services.map((service, index) => (
        <div key={index} className="relative overflow-hidden group rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold tracking-wide">{service.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
