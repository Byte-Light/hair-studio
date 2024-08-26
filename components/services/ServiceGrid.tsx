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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {services.map((service, index) => (
        <div key={index} className="relative overflow-hidden group">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg p-4">
            {service.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
