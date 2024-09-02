"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Treatments: React.FC = () => {
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
          Treatments
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio, we understand that damaged hair can be a source of frustration for many people. That&apos;s why we offer a wide range of hair treatment services designed to repair, nourish, and strengthen damaged hair. Our skilled stylists are highly trained in the latest techniques and are dedicated to providing you with the highest level of service and attention to detail.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Our hair treatment services include:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Keratin Treatment:</strong> Keratin treatment is a hair smoothing treatment that helps to tame frizz, reduce curl, and leave your hair looking shiny and healthy.</li>
          <li><strong>Hair Spa:</strong> Our hair spa treatment includes a variety of nourishing treatments such as hair masks, oils, and more. It helps to repair damaged hair, leaving it looking and feeling healthy.</li>
          <li><strong>Scalp Treatment:</strong> We also offer scalp treatments to nourish and revitalize the scalp, promoting healthy hair growth.</li>
          <li><strong>Repairing Treatment:</strong> Our repairing treatment is designed to repair and revitalize damaged hair, leaving it looking and feeling healthy.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          All of our hair treatment services are performed in a clean and hygienic environment, ensuring that each and every client leaves with beautiful and healthy hair. We use only the best products, ensuring that your hair will look great and stay healthy.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio, we&apos;re dedicated to providing our clients with the best possible hair treatment experience. If you&apos;re looking for a salon that offers a wide range of services, a team of highly skilled stylists, and personalized attention to detail, look no further than Next Salon. Book your appointment today!
        </p>
       
      </div>
    </div>
  );
};

export default Treatments;
