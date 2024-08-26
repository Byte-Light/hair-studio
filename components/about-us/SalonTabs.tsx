// components/SalonTabs.tsx
"use client"
import React, { useState } from 'react';

const tabs = [
  {
    title: 'Our Skilled Team',
    content: (
      <>
        <p>
          At Next Salon, our skilled team of stylists, makeup artists, and nail
          technicians are trained in the latest techniques and are dedicated to
          providing you with the highest level of service and attention to detail.
        </p>
        <p>
          We believe that client satisfaction is the key to our success, which is why we always
          strive to go above and beyond for each and every one of our clients. Our team members
          are passionate about their craft and are constantly working to improve their skills
          and knowledge to ensure that we provide the best service to our clients.
        </p>
      </>
    ),
  },
  {
    title: 'A Welcoming Atmosphere',
    content: (
      <>
        <p>
          We pride ourselves on providing a welcoming and professional atmosphere at Next Salon.
        </p>
        <p>
          Our team is dedicated to making sure that each and every client leaves feeling and looking
          their best.
        </p>
      </>
    ),
  },
  {
    title: 'Our Goal',
    content: (
      <>
        <p>
          Whether you are looking for a classic cut, a modern style, or a complete makeover, our team
          is here to help you achieve your desired look.
        </p>
        <p>
          We are committed to making sure that you leave the salon feeling confident and satisfied with
          your look.
        </p>
      </>
    ),
  },
];

const SalonTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="flex flex-row md:flex-col bg-gray-100">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`p-4 cursor-pointer ${selectedTab === index ? 'bg-white' : 'bg-gray-200'} hover:bg-white`}
            onMouseEnter={() => setSelectedTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="p-6 bg-white w-full border border-gray-200">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default SalonTabs;
