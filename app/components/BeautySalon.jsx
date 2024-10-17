// components/BeautySalon.js

import React from 'react';

const BeautySalon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8">
      <div className="flex-1">
        <img
          src="/Images/image1_0.jpg" // Update with the path to your image
          alt="Beauty Salon"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 md:pl-8">
        <h1 className="text-5xl font-bold text-pink-700 my-4">
          KING'S SPA
        </h1>
        <p className="text-gray-700 mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo enim ipsa.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">Natural Beauty Salon</li>
          <li className="mb-2">Professional Women Spa Service</li>
          <li>Experience Hair Treatments</li>
        </ul>
        <a
          href="/services"
          className="inline-block bg-pink-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-pink-600 transition duration-300"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default BeautySalon;
