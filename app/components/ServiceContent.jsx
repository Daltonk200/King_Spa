import React from 'react';
import Image from 'next/image';

export default function ServiceContent({ selectedService, image }) {
  const serviceDetails = {
    "Massage Therapy": {
      price: "$40 - $80",
      description: "Massage Therapy involves hands-on techniques to increase circulation, relieve tension, reduce stress, etc."
    },
    "Facials": {
      price: "$50 - $100",
      description: "Facials include cleansing, exfoliation, massage, masks, and moisturization."
    }
    // Add more service details here
  };

  return (
    <div className="w-3/4 p-4">
      <Image src={image} alt={selectedService} width={800} height={400} className="rounded-lg" />
      <h2 className="text-2xl font-bold mt-4">{selectedService}</h2>
      <p className="text-pink-600 mt-2">{serviceDetails[selectedService]?.price}</p>
      <p>{serviceDetails[selectedService]?.description}</p>
      <button className="bg-pink-500 text-white px-4 py-2 mt-4">Book Now</button>
    </div>
  );
}