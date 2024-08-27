import React from 'react';

const TestimonialSection: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-16">
            <div className="max-w-5xl mx-auto px-6 text-center text-white">
                <h2 className="text-5xl font-extrabold italic mb-6">Client Testimonials</h2>
                <p className="text-gray-300 text-lg mb-16">What our clients say about us.</p>

                <div className="bg-gray-800 p-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/monial1.webp" 
                            alt="Client photo" 
                            className="w-24 h-24 rounded-full border-4 border-teal-500 mb-6"
                        />
                        <p className="text-gray-300 text-xl italic mb-6">
                            "Hair Studio is hands down the best salon I've ever been to. The stylists are incredibly talented and the atmosphere is so relaxing. I always leave feeling and looking my best!"
                        </p>
                        <h3 className="text-2xl font-semibold text-teal-400">Samantha L.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
