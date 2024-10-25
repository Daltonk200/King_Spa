// components/Sidebar.js
import React from 'react';

export default function Sidebar({ services, onSelectService, selectedService }) {
  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <ul>
        {Object.keys(services).map((service, index) => (
          <li
            key={index}
            onClick={() => onSelectService(service)}
            className={`cursor-pointer py-2 ${
              selectedService === service ? 'bg-pink-300' : 'hover:bg-pink-300'
            }`}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
