import React from 'react';

const SideMenu = ({ services, activeService, onServiceChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-48">
      <h2 className="text-xl font-bold text-pink-500 mb-4">Services</h2>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index}>
            <button
              onClick={() => onServiceChange(service)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                activeService.title === service.title
                  ? 'bg-pink-500 text-white'
                  : 'text-pink-500 hover:bg-pink-200'
              }`}
            >
              {service.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
