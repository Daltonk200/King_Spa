"use client"
import { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Link from 'next/link';
import Image from 'next/image';

const Gallery = ({ images }) => {
  useEffect(() => {
    // Initialize GLightbox
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      closeButton: true,
    });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    return () => {
      lightbox.destroy();  // Clean up on unmount
    };
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 h-96">
      {/* First image with zoom and AOS animation */}
      <div
        className="row-span-2 col-span-3 md:col-span-2 overflow-hidden" // overflow-hidden to hide zoomed image overflow
        data-aos="fade-up"
      >
        <Link href={images[0].src} className="glightbox">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" // Zoom effect using Tailwind
            height={500}
            width={500}
            loading="lazy"
          />
        </Link>
      </div>

      {/* Other images with zoom and AOS animation */}
      {images.slice(1).map((image, index) => (
        <div
          key={index}
          className="w-full h-auto overflow-hidden" 
          data-aos="fade-up"
        >
          <Link href={image.src} className="glightbox">
            <Image
              src={image.src}
              alt={image.alt}
              height={400}
              width={400}
              className="size-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110" // Zoom effect using Tailwind
              loading="lazy"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
