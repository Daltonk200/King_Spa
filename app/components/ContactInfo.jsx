// components/ContactInfo.js
"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ClockIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

const ContactInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 p-8">
      {/* Working Hours Section */}
      <div className="flex flex-col items-start justify-center bg-slate-200 rounded-lg p-6"
      data-aos="fade-right"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Working Hours</h2>
        <p className="text-gray-700 mb-4">
          Quis autem vel eum reprehenderit voluptate velit esse quam molestiae.
        </p>
        <div className="flex items-center text-gray-700 mb-2">
          <ClockIcon className="size-5 text-pink-500 mr-2" />
          <span>Mon to Fri: 7:30 am — 1:00 am</span>
        </div>
        <div className="flex items-center text-gray-700 mb-2">
          <ClockIcon className="size-5 text-pink-500 mr-2" />
          <span>Sat: 9:00 am — 1:00 am</span>
        </div>
        <div className="flex items-center text-gray-700 mb-4">
          <ClockIcon className="size-5 text-pink-500 mr-2" />
          <span>Sun: 9:00 am — 11:30 pm</span>
        </div>
        <Link
          href="/appointment"
          className="inline-block bg-pink-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-pink-600 transition duration-300"
        >
          APPOINTMENT →
        </Link>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-start justify-center"
      data-aos="fade-left"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Quis autem vel eum reprehenderit voluptate velit esse quam molestiae.
        </p>
        <div className="flex items-center text-gray-700 mb-2">
          <MapPinIcon className="size-5 text-pink-500 mr-2" />
          <span>523 Main Street, 2nd Floor, New York City</span>
        </div>
        <div className="flex items-center text-gray-700 mb-4">
          <PhoneIcon className="size-5 text-pink-500 mr-2" />
          <span>Call:+237 683-60-06-09</span>
        </div>
        <Link
          href="/contact"
          className="inline-block bg-pink-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-pink-600 transition duration-300"
        >
          CONTACT US →
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
