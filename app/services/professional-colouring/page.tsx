"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const ProfessionalColor: React.FC = () => {
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
        Professional Colouring
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio,we pride ourselves on providing professional hair coloring services that are tailored to meet the unique needs of each and every client. Our experienced stylists use only the highest quality products to ensure that your hair stays healthy and vibrant.
          We offer a wide range of hair coloring services to suit your individual needs and preferences. Whether you're looking to cover gray, change your natural color, or add highlights, we have the skills and expertise to give you the perfect look.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Our color services include:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Permanent color:</strong>A lasting and vibrant color that covers gray hair, and can also be used to change your natural color.</li>
          <li><strong>Semi-permanent color:</strong> A gentler alternative to permanent color, semi-permanent color fades gradually over time and is great for those who want to experiment with a new color without making a long-term commitment.</li>
          <li><strong>Highlights: </strong> A technique that adds dimension and depth to your hair, highlights can be done in a variety of colors and techniques, from subtle and natural-looking to bold and dramatic.</li>
          <li><strong>Balayage: </strong>  A freehand coloring technique that creates a graduated, natural-looking effect.</li>
          <li><strong>Ombre: </strong>  A gradual blending of one color to another, typically darker at the roots and gradually lightening towards the ends.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Before any service, We also offer a consultation service so that you can discuss your desired outcome with our stylists and ensure that you get the results you want. Our stylists will take into consideration your skin tone, natural hair color, and personal style, to give you the look you desire.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio, your satisfaction is our top priority. Trust us to give you the hair color of your dreams, and leave our salon feeling confident and beautiful.
        </p>
       
      </div>
    </div>
  );
};

export default ProfessionalColor;
