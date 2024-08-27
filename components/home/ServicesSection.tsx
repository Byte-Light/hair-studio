import React from 'react';
import { FiScissors } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: <FiScissors />,
            title: 'HAIRCUT',
            description: 'Get the perfect haircut that suits your style.',
        },
        {
            icon: <FiScissors />,
            title: 'BEARD TRIM',
            description: 'Trim and shape your beard for a polished look.',
        },
        {
            icon: <FiScissors />,
            title: 'SHAVE',
            description: 'Experience a classic barber shop shave with a straight razor.',
        },
        {
            icon: <FaRegSmile />,
            title: 'FACIAL',
            description: 'Treat yourself to a relaxing facial treatment.',
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-800 to-black py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-center text-4xl font-extrabold text-white mb-12 tracking-wide">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center flex flex-col items-center text-white"
                        >
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                            <p className="text-lg opacity-90">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
