import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-12 lg:p-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg mt-10 mb-0"> {/* Added mb-0 to remove bottom margin */}
      {/* Contact Info */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-200 mb-6">
          If you have any questions or require further information on any of our treatments or services, feel free to get in touch.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h.01M12 16h.01M12 12h.01M12 8h.01M8 12h.01M12 12a9 9 0 110 0v0" />
            </svg>
            <span>hello@hairstudio.com</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4m1.993 2.589A10.051 10.051 0 0112 22c3.866 0 7-1.55 7-5v-5.75A2.25 2.25 0 0016.75 9h-1.364c-.1-.35-.278-.682-.528-.971L12 4.5 9.142 8.029c-.25.289-.428.621-.528.971H7.25A2.25 2.25 0 005 11.25V13" />
            </svg>
            <span>(+88) 01861328878</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.26 0 2.27-.748 2.27-1.67C14.27 8.325 13.26 7.5 12 7.5S9.73 8.324 9.73 9.33c0 .922 1.01 1.67 2.27 1.67zm-3.173.27c-.763 1.18-.72 2.91.168 3.796a2.5 2.5 0 001.426.69v3.01h2v-3.01c.437-.034.877-.145 1.288-.335a3.66 3.66 0 001.288-.955 4.84 4.84 0 00.65-2.524c0-1.252-.536-2.45-1.526-3.38C13.027 8.988 11.542 8 9.8 8H8.25a1 1 0 00-1 1v6.095a1.5 1.5 0 001.154 1.472l.423.075z" />
            </svg>
            <span>123 Main St, Suite 200, Anytown, USA 00000</span>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="md:w-1/2 w-full bg-white p-8 rounded-lg shadow-md">
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
