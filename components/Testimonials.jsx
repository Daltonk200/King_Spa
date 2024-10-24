"use client"
import React, { useEffect } from "react";
import { Carousel } from 'flowbite-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";

const Testimonials = ({ testimonials }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-16">
      <h2 className="text-4xl text-center font-bold mb-8 text-pink-500">What People Say</h2>
      {testimonials.length > 0 ? (
        <Carousel className="h-[300px]" data-aos="fade-up">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg min-h-[300px]">
              {/* Circular Image */}
              <div className="size-24 rounded-full overflow-hidden border-4 border-pink-400">
                <Image src={testimonial.avatar} alt={testimonial.author} className="size-full object-cover" width={100} height={100}/>
              </div>

              {/* Testimonial Text */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-lg italic">&quot;{testimonial.text}&quot;</p>
                <h3 className="mt-4 font-semibold text-xl text-gray-900">{testimonial.author}</h3>
                <p className="text-pink-400 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No testimonials available</p>
      )}
    </div>
  );
};

export default Testimonials;
