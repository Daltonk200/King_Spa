"use client"
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  // Initialize AOS inside useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []); // Empty dependency array to run only once

  return (
    <>
      <section className="bg-white px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Contact Detail Section */}
          <h2
            className="mb-8 text-center text-3xl font-semibold text-gray-800"
            data-aos="fade-up" // Fade-up animation
          >
            Contact Detail
          </h2>
          <div
            className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up" // Fade-up animation for the grid
          >
            {/* Phone */}
            <div className="rounded-lg border p-6 shadow-md">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-pink-500 text-white">
                <PhoneIcon className="size-5 " />
              </div>
              <h3 className="text-lg font-medium">Phone</h3>
              <p className="text-gray-500">+237 682-60-06-09</p>
            </div>

            {/* Email */}
            <div className="rounded-lg border p-6 shadow-md">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-pink-500 text-white">
                <EnvelopeIcon className="size-5" />
              </div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-gray-500">demo@gmail.com</p>
            </div>

            {/* Address */}
            <div className="rounded-lg border p-6 shadow-md">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-pink-500 text-white">
                <MapPinIcon className="size-5 " />
              </div>
              <h3 className="text-lg font-medium">Address</h3>
              <p className="text-gray-500">252 W 43rd St, New York, NY</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <h2
            className="mb-8 mt-16 text-center text-3xl font-semibold text-gray-800"
            data-aos="fade-up" // Fade-up animation
          >
            Contact Form
          </h2>
          <form
            className="mx-auto max-w-4xl space-y-6"
            data-aos="fade-up" // Fade-up animation for the form
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="block w-full rounded-md border border-gray-300 bg-white p-4 text-gray-800 focus:border-pink-500 focus:outline-none focus:ring-pink-500"
                  placeholder="Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-md border border-gray-300 bg-white p-4 text-gray-800 focus:border-pink-500 focus:outline-none focus:ring-pink-500"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            {/* Message TextArea */}
            <div className="relative">
              <textarea
                id="message"
                rows="4"
                className="block w-full rounded-md border border-gray-300 bg-white p-4 text-gray-800 focus:border-pink-500 focus:outline-none focus:ring-pink-500"
                placeholder="Message"
                required
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="rounded-md bg-pink-500 px-6 py-3 text-white shadow-md hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
              >
                Submit
              </button>
              <button
                type="reset"
                className="rounded-md bg-gray-500 px-6 py-3 text-white shadow-md hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
