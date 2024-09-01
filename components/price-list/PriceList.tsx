"use client";
import { useState } from 'react';
import { priceItems } from './PriceItems';

const PriceList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto pt-20"> {/* Added pt-20 for padding top */}
      {priceItems.map((item, index) => (
        <div key={index} className="border-b border-gray-300 my-4 shadow-md rounded-lg overflow-hidden">
          <button
            className="w-full text-left py-4 px-6 text-lg font-semibold flex justify-between items-center bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            onClick={() => toggleIndex(index)}
          >
            {item.title}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-6 bg-white">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PriceList;
