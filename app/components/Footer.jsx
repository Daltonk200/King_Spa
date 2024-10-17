import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* About Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Success Story</a></li>
            <li><a href="#" className="hover:underline">Latest Services</a></li>
            <li><a href="#" className="hover:underline">Team Members</a></li>
            <li><a href="#" className="hover:underline">Popular News</a></li>
            <li><a href="#" className="hover:underline">Awards Winning</a></li>
            <li><a href="#" className="hover:underline">About Company</a></li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Beauty Salon</a></li>
            <li><a href="#" className="hover:underline">Hair Treatments</a></li>
            <li><a href="#" className="hover:underline">Autumn Vibes</a></li>
            <li><a href="#" className="hover:underline">Makeup</a></li>
            <li><a href="#" className="hover:underline">Body Treatments</a></li>
            <li><a href="#" className="hover:underline">Spa & Foot Massage</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              <span>523 Main Street, New York</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <span>+012 (345) 6789</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span>
              <span>info@lezar.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 w-full rounded-md focus:outline-none"
            />
            <button className="bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-700">
              ➡️
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2024 King's Spa, All Rights Reserved</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="/contact" className="hover:underline">My Account</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
