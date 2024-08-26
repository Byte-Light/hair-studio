import React from 'react';
import { FiScissors } from 'react-icons/fi'; // Importing icons from react-icons library
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
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-black text-white px-6 py-2 rounded-lg shadow-md">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
