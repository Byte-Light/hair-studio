"use client";
import React, { useState } from 'react';

const tabs = [
  {
    title: 'Our Skilled Team',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          At Next Salon, our skilled team of stylists, makeup artists, and nail technicians are trained in the latest techniques, dedicated to providing the highest level of service and attention to detail.
        </p>
        <p className="text-gray-700">
          We believe client satisfaction is key, which is why we strive to exceed expectations for every client. Our passionate team continually improves their skills to ensure the best service.
        </p>
      </>
    ),
  },
  {
    title: 'A Welcoming Atmosphere',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          We pride ourselves on offering a welcoming, professional atmosphere at Next Salon.
        </p>
        <p className="text-gray-700">
          Our team is dedicated to ensuring that every client leaves feeling and looking their best.
        </p>
      </>
    ),
  },
  {
    title: 'Our Goal',
    content: (
      <>
        <p className="text-gray-700 mb-4">
          Whether you're seeking a classic cut, a modern style, or a complete makeover, our team is here to help you achieve your desired look.
        </p>
        <p className="text-gray-700">
          We are committed to ensuring you leave the salon feeling confident and satisfied with your new look.
        </p>
      </>
    ),
  },
];

const SalonTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="max-w-4xl mx-auto pt-20"> {/* Added pt-20 for padding top */}
      <div className="flex flex-row border-b border-gray-200">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 text-center py-4 cursor-pointer transition-all duration-300 ${selectedTab === index ? 'border-b-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-gray-500 text-white' : 'border-b-4 border-transparent text-gray-500 hover:text-black'}`}
            onClick={() => setSelectedTab(index)}
          >
            <span className="text-lg font-medium">{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="p-8 bg-white shadow-lg rounded-b-lg transition-all duration-300">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default SalonTabs;
