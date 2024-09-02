"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Styling: React.FC = () => {
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
        Styling
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio, we understand that special events can be stressful, and making sure you look your best is an important part of the equation. That's why we offer a wide range of styling services designed to suit the needs of all of our clients. Our skilled stylists are highly trained in the latest techniques and are dedicated to providing you with the highest level of service and attention to detail.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Our styling services include:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Updos:</strong> Whether you're getting ready for a wedding, prom, or any other special event, our stylists will create a beautiful updo that is tailored to your individual needs and preferences.</li>
          <li><strong>Braids:</strong> We offer a variety of braid styles, including French braids, fishtail braids, and more. Our stylists will work with you to create a look that is perfect for your event.</li>
          <li><strong>Hair Accessories:</strong> We can help you accessorize your hair with flowers, ribbons, and other hair accessories to complement your look.</li>
          <li><strong>Makeup:</strong> We also offer makeup services, to complete your look for the event.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our stylists are experts in their craft and will work with you to create a look that is tailored to your individual needs and preferences. We take great care to ensure that each and every client leaves our salon feeling and looking their best.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio, we're dedicated to providing our clients with the best possible styling experience. If you're looking for a salon that offers a wide range of services, a team of highly skilled stylists, and personalized attention to detail, look no further than Next Salon. Book your appointment today and let us help you achieve the look you've always wanted for your next event.
        </p>
       
      </div>
    </div>
  );
};

export default Styling;
