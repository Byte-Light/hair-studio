"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const NailServices: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Navigate to the previous route
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6 lg:px-20 flex flex-col items-center">
         <button
          onClick={handleGoBack}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Previous
        </button>
      <div className="max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
        Nail Services
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio,we understand that a great set of nails can make you feel more polished and put-together. That's why we offer a wide range of nail services to suit the needs of all of our clients. Our highly-skilled nail technicians are dedicated to providing you with the highest level of service and attention to detail.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Our nail services include:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Manicures:</strong> Our classic or luxury manicures include nail shaping, buffing, cuticle care, and the application of your choice of nail polish or gel polish.</li>
          <li><strong>Pedicures:</strong> Our classic or luxury pedicures include a relaxing foot soak, nail shaping, buffing, cuticle care, and the application of your choice of nail polish or gel polish.</li>
          <li><strong>Gel Nails:</strong> Our gel nails services include the application of gel polish on natural nails, that dries under UV or LED light and last up to two weeks.</li>
          <li><strong>Nail Art:</strong> We offer a variety of nail art designs including simple polish work, decals, gems, and more.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        All of our services are performed in a clean and hygienic environment, ensuring that each and every client leaves with beautiful and healthy nails. We use only the best products, ensuring that your nails will look great and stay healthy.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio, we're dedicated to providing our clients with the best possible nail care experience. If you're looking for a salon that offers a wide range of services, a team of highly skilled nail technicians, and personalized attention to detail, look no further than Next Salon. Book your appointment today and let us help you achieve the look you've always wanted.
        </p>
       
      </div>
    </div>
  );
};

export default NailServices;
