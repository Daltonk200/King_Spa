import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* About Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Success Story</Link></li>
            <li><Link href="#" className="hover:underline">Latest Services</Link></li>
            <li><Link href="#" className="hover:underline">Team Members</Link></li>
            <li><Link href="#" className="hover:underline">Popular News</Link></li>
            <li><Link href="#" className="hover:underline">Awards Winning</Link></li>
            <li><Link href="#" className="hover:underline">About Company</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Beauty Salon</Link></li>
            <li><Link href="#" className="hover:underline">Hair Treatments</Link></li>
            <li><Link href="#" className="hover:underline">Autumn Vibes</Link></li>
            <li><Link href="#" className="hover:underline">Makeup</Link></li>
            <li><Link href="#" className="hover:underline">Body Treatments</Link></li>
            <li><Link href="#" className="hover:underline">Spa & Foot Massage</Link></li>
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
            <button className="bg-pink-600 px-4 py-2 rounded-md hover:bg-pink-700">
              ➡️
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="#" aria-label="Whatapp">
            <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
            <Link href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="#" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2024 King&apos;s Spa, All Rights Reserved</p>
        <div className="flex justify-center space-x-6 mt-2">
          <Link href="#" className="hover:underline">Services</Link>
          <Link href="#" className="hover:underline">FAQs</Link>
          <Link href="/contact" className="hover:underline">My Account</Link>
          <Link href="#" className="hover:underline">Privacy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
