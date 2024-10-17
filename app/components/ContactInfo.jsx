// components/ContactInfo.js

import React from 'react';
import { ClockIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

const ContactInfo = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 p-8">
      {/* Working Hours Section */}
      <div className="flex flex-col items-start justify-center bg-slate-200 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Working Hours</h2>
        <p className="text-gray-700 mb-4">
          Quis autem vel eum reprehenderit voluptate velit esse quam molestiae.
        </p>
        <div className="flex items-center text-gray-700 mb-2">
          <ClockIcon className="w-5 h-5 text-pink-500 mr-2" />
          <span>Mon to Fri: 7:30 am — 1:00 am</span>
        </div>
        <div className="flex items-center text-gray-700 mb-2">
          <ClockIcon className="w-5 h-5 text-pink-500 mr-2" />
          <span>Sat: 9:00 am — 1:00 am</span>
        </div>
        <div className="flex items-center text-gray-700 mb-4">
          <ClockIcon className="w-5 h-5 text-pink-500 mr-2" />
          <span>Sun: 9:00 am — 11:30 pm</span>
        </div>
        <a
          href="/appointment"
          className="inline-block bg-pink-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-pink-600 transition duration-300"
        >
          APPOINTMENT →
        </a>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Quis autem vel eum reprehenderit voluptate velit esse quam molestiae.
        </p>
        <div className="flex items-center text-gray-700 mb-2">
          <MapPinIcon className="w-5 h-5 text-pink-500 mr-2" />
          <span>523 Main Street, 2nd Floor, New York City</span>
        </div>
        <div className="flex items-center text-gray-700 mb-4">
          <PhoneIcon className="w-5 h-5 text-pink-500 mr-2" />
          <span>Call: +012 (345) 6789</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
