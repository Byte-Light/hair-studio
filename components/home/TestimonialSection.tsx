import React from 'react';

const TestimonialSection: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-semibold italic mb-4">Client Testimonials</h2>
                <p className="text-gray-600 text-lg mb-12">What our clients say about us.</p>

                <div className="flex flex-col items-center">
                    <img 
                        src="/path-to-your-image.jpg" 
                        alt="Client photo" 
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <p className="text-gray-700 text-lg italic mb-4">
                        "Hair Studio is hands down the best salon I've ever been to. The stylists are incredibly talented and the atmosphere is so relaxing. I always leave feeling and looking my best!"
                    </p>
                    <h3 className="text-lg font-semibold">Samantha L.</h3>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
