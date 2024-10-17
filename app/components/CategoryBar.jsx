// components/CategoryBar.js
import React from 'react';

export default function CategoryBar({ onSelectCategory, selectedCategory }) {
  const categories = [
    { name: 'SPA', icon: '/icons/spa-icon.svg' },
    { name: 'HAIR MAKEUP', icon: '/icons/hair-icon.svg' },
    { name: 'WAXING', icon: '/icons/waxing-icon.svg' },
    { name: 'FACIAL', icon: '/icons/facial-icon.svg' },
    { name: 'MASSAGE', icon: '/icons/massage-icon.svg' },
  ];

  return (
    <div className="flex justify-between bg-pink-500 text-white p-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`cursor-pointer flex items-center ${
            selectedCategory === category.name ? 'border-b-4 border-white' : ''
          }`}
          onClick={() => onSelectCategory(category.name)}
        >
          <img src={category.icon} alt={`${category.name} icon`} className="w-6 h-6 mr-2" />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
}
