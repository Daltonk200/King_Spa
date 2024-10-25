import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa, faHandSparkles, faPumpSoap, faLeaf, faCut } from '@fortawesome/free-solid-svg-icons';

const iconMapping = {
  Waxing: faHandSparkles,
  Facial: faPumpSoap,
  Massage: faLeaf,
  SPA: faSpa,
  'Hair Makeup': faCut,
};

const Tabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 bg-white p-3 rounded-lg shadow-md mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`flex flex-col items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            activeCategory === category
              ? 'bg-pink-500 text-white'
              : 'text-pink-500 hover:bg-pink-200'
          }`}
        >
          <FontAwesomeIcon icon={iconMapping[category]} size="2x" className="mb-1" />
          <span>{category}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;

