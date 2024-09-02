"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Samantha L.",
    content: "Hair Studio is hands down the best salon I've ever been to. The stylists are incredibly talented and the atmosphere is so relaxing. I always leave feeling and looking my best!",
    imageSrc: "/images/monial1.webp"
  },
  {
    name: "John D.",
    content: "I've tried many salons, but none compare to Hair Studio. The team is friendly, and they really know how to make you feel special. Highly recommended!",
    imageSrc: "/images/monial2.webp"
  },
  {
    name: "Emily R.",
    content: "The service at Hair Studio is top-notch. I always leave with a smile on my face. My hair has never looked better!",
    imageSrc: "/images/monial3.webp"
  },
  {
    name: "Paula J.",
    content: "I've tried many salons, but none compare to Hair Studio. The team is friendly, and they really know how to make you feel special. Highly recommended!",
    imageSrc: "/images/monial4.webp"
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonialCount = testimonials.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonialCount : currentIndex - 1;
    setCurrentIndex(newIndex);

    timeoutRef.current = setTimeout(() => {
      if (isFirstSlide) {
        setCurrentIndex(testimonialCount - 1);
      }
      setIsTransitioning(false);
    }, 700); // Match this to the transition duration
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const isLastSlide = currentIndex === testimonialCount - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    timeoutRef.current = setTimeout(() => {
      if (isLastSlide) {
        setCurrentIndex(0);
      }
      setIsTransitioning(false);
    }, 700); // Match this to the transition duration
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl font-extrabold italic mb-8 text-teal-400 drop-shadow-lg">
          Client Testimonials
        </h2>
        <p className="text-gray-300 text-lg mb-16 italic">
          What our clients say about us.
        </p>

        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform ease-in-out duration-700 ${
              isTransitioning ? 'transition-none' : ''
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-6"
              >
                <div className="bg-gradient-to-b from-teal-900 via-gray-800 to-black p-10 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.imageSrc}
                      alt={`${testimonial.name} photo`}
                      className="w-24 h-24 rounded-full border-4 border-teal-500 mb-6 shadow-lg"
                    />
                    <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <h3 className="text-2xl font-semibold text-teal-400 drop-shadow-md">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate first slide for smooth transition */}
            <div className="flex-shrink-0 w-full px-6">
              <div className="bg-gradient-to-b from-teal-900 via-gray-800 to-black p-10 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[0].imageSrc}
                    alt={`${testimonials[0].name} photo`}
                    className="w-24 h-24 rounded-full border-4 border-teal-500 mb-6 shadow-lg"
                  />
                  <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                    "{testimonials[0].content}"
                  </p>
                  <h3 className="text-2xl font-semibold text-teal-400 drop-shadow-md">
                    {testimonials[0].name}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl p-2 bg-teal-500 rounded-full hover:bg-teal-600 shadow-lg focus:outline-none"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl p-2 bg-teal-500 rounded-full hover:bg-teal-600 shadow-lg focus:outline-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
