"use client"
import dynamic from 'next/dynamic';  
const MyCarousel = dynamic(() => import('./components/Carousel'), {  
    ssr: false, // Disable server-side rendering for this component  
});

const Testimonials = dynamic(() => import('./components/Testimonials'), {  
    ssr: false, // Disable server-side rendering for this component  
});
// import Testimonials from "./components/Testimonials";

const Gallery = dynamic(() => import('./components/Gallery'), {  
    ssr: false, // Disable server-side rendering for this component  
});
// import Gallery from "./components/Gallery";


const Navbar = dynamic(() => import('@/app/components/Navbar'), {  
    ssr: false, // Disable server-side rendering for this component  
});
// import Navbar from "@/app/components/Navbar";
import BeautySalon from './components/BeautySalon';
import Footer from "./components/Footer";
import ContactInfo from './components/ContactInfo';
import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';



export default function Home() {

  const whatsappNumber = '+237650318856';
  const defaultMessage = 'Hello, I would like to learn more about your services.'; 

 // Animation state (optional)
 const [isHovered, setIsHovered] = useState(false);

 // WhatsApp click handler
 const openWhatsAppChat = () => {
   const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
   window.open(url, '_blank');
   console.log(encodeURIComponent(defaultMessage));
   
 };


  const galleryImages = [
    {
      src: "/Images/Calabash-spa-and-salon-Afro-hair.jpg",
      thumbnail: "/Images/image1_0.jpg",
      alt: "Gallery Image 1",
    },
    {
      src: "/Images/relaxing.jpeg",
      thumbnail: "/Images/image1_0.jpg",
      alt: "Gallery Image 2",
    },
    {
      src: "/Images/massage_pro.jpeg",
      thumbnail: "/Images/IMG-20240827-WA0006.jpg",
      alt: "Gallery Image 2",
    },
    {
      src: "/Images/group_massage.jpeg",
      thumbnail: "/Images/image1_0.jpg",
      alt: "Gallery Image 2",
    },
    {
      src: "/Images/KIng_spa_salon.jpeg",
      thumbnail: "/Images/image1_0.jpg",
      alt: "Gallery Image 2",
    },

    // Add more gallery images as needed
  ];

  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Rinda Smith",
      role: "Founder",
      avatar: "/Images/IMG-20240827-WA0006.jpg", // Replace with actual image URL
    },
    {
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      author: "Agustina",
      role: "Spa Experts",
      avatar: "/Images/IMG-20240827-WA0008.jpg", // Replace with actual image URL
    },
  ];

  return (
    <>
    <Navbar/>
      <MyCarousel />
      <main>
        <section className="mx-auto my-16 max-w-6xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-pink-500">
            Our Gallery
          </h2>
          <Gallery images={galleryImages} />
        </section>
        <section className="bg-red-50 min-h-96 flex flex-col justify-center items-center">
        <h2 className="mb-8 text-center text-4xl font-bold text-pink-500">
            WHO ARE WE
          </h2>
          <BeautySalon/>
        </section>

        <section className="bg-gray-50 min-h-96 flex flex-col justify-center items-center">
          <ContactInfo/>
        </section>

        <section className="bg-purple-50 p-6">
          <Testimonials testimonials={testimonials} />
        </section>
      </main>
      <Footer />
      <div
        className={`fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full cursor-pointer transition-transform ${
          isHovered ? 'animate-pulse' : ''
        }`}
        style={{ fontSize: '3rem' }}
        onClick={openWhatsAppChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <BsWhatsapp size={48} />
      </div>
    </>
  );
}
