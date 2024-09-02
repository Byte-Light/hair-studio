"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const HairCuts: React.FC = () => {
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
        Hair Cuts
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio,we understand that a great haircut can make a huge difference in how you feel about yourself. That's why we offer a wide range of hair cut services for men and women, designed to suit the needs of all of our clients. Our skilled stylists are highly trained in the latest techniques and are dedicated to providing you with the highest level of service.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Our hair cut services include:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Consultation:</strong> Before any hair cut service, we provide a detailed consultation to understand your needs and preferences. We'll discuss your hair history, lifestyle, and desired outcome.</li>
          <li><strong>Customization:</strong> Based on your consultation, our stylists will work with you to create a cut that is tailored to your individual needs and preferences. From classic to modern, our stylists are experts in their craft and will give you a cut that suits your face shape, hair type, and lifestyle.</li>
          <li><strong>Cut and Style: </strong> Our stylists use only the best tools and techniques to ensure a precise and professional cut every time. We also provide styling advice and tips to help you maintain your new look at home.</li>
          <li><strong>Maintenance: </strong>  We'll provide you with detailed instructions on how to care for your hair after the cut, including how to wash and style it. Regular maintenance appointments are recommended to keep your hair looking its best.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Our hair cuts are made of high-quality, 100% human hair, which ensures a natural look and feel. We take great care to match the extensions to your natural hair, ensuring a seamless blend and natural-looking results. With proper care, our extensions can last up to 6 months.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At Hair Studio, wwe're dedicated to providing our clients with the best possible hair cut experience. Our stylists are constantly updating their skills and knowledge to bring you the latest trends and techniques. If you're looking for a salon that offers a wide range of services, a team of highly skilled stylists, and personalized attention to detail, look no further than Next Salon. Book your appointment today and let us help you achieve the look you've always wanted.
        </p>
       
      </div>
    </div>
  );
};

export default HairCuts;
