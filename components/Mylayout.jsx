import React from 'react';
import Sidebar from './Sidebar';
import CategoryBar from './CategoryBar';

export default function Mylayout({ children, onSelectService, onSelectCategory, selectedCategory, services }) {
  return (
    <div>
      <CategoryBar onSelectCategory={onSelectCategory} selectedCategory={selectedCategory} />
      <div className="flex flex-col-reverse md:flex-row">
        <Sidebar services={services} onSelectService={onSelectService} selectedService={selectedCategory} />
        <main className="w-full md:w-3/4">{children}</main>
      </div>
    </div>
  );
}