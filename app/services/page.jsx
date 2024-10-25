"use client";
import { useState } from "react";
import Tabs from "../components/Tab";
import SideMenu from "../components/SideMenu";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import OfferSection from "../components/OfferSection";
import Navbar from "../components/Navbar"

// 
const servicesData = {
  SPA: [
    {
      title: "Massage Therapy",
      description: "Relaxing massage to relieve stress and tension.",
      priceRange: "$40 - $80",
      imageSrc: "/Images/massage_with_stones.jpeg",
    },
    {
      title: "Facials",
      description: "Rejuvenating facials to cleanse and refresh your skin.",
      priceRange: "$50 - $100",
      imageSrc: "/Images/fiacial_treatment-2+people.jpeg",
    },
    {
      title: "Body Scrub",
      description: "Exfoliating body scrub to remove dead skin cells.",
      priceRange: "$60 - $120",
      imageSrc: "/Images/Black_man_lying_and_cutting_hair.jpeg",
    },
    {
      title: "Aromatherapy",
      description: "Therapeutic use of essential oils.",
      priceRange: "$70 - $130",
      imageSrc: "/Images/leg_massage.jpeg",
    },
  ],
  Waxing: [
    {
      title: "Eye Brows",
      description: "Professional eyebrow waxing.",
      priceRange: "$10 - $20",
      imageSrc: "/Images/spa_face-treatement.jpeg",
    },
    {
      title: "Lips",
      description: "Smooth and hair-free lips.",
      priceRange: "$8 - $15",
      imageSrc: "/Images/massage_with_smile.jpeg",
    },
    {
      title: "Chin & Lips",
      description: "Combination waxing for chin and lips.",
      priceRange: "$12 - $22",
      imageSrc: "/Images/Spa.jpeg",
    },
    {
      title: "Lower Leg",
      description: "Flawless lower leg waxing.",
      priceRange: "$25 - $40",
      imageSrc: "/Images/pedicure_legs.jpg",
    },
  ],
  Facial: [
    {
      title: "Classic Facial",
      description: "Relaxing facial treatment to rejuvenate your skin.",
      priceRange: "$40 - $60",
      imageSrc: "/Images/hair_cut.jpeg",
    },
    {
      title: "Anti-Aging Facial",
      description: "Reduce signs of aging and improve skin elasticity.",
      priceRange: "$60 - $100",
      imageSrc: "/Images/Black_man_lying_and_cutting_hair.jpeg",
    },
    {
      title: "Acne Treatment Facial",
      description: "Treat and prevent acne breakouts.",
      priceRange: "$50 - $90",
      imageSrc: "/Images/Calabash-spa-and-salon-Afro-hair.jpg",
    },
  ],
  Massage: [
    {
      title: "Swedish Massage",
      description: "Gentle massage to relax the entire body.",
      priceRange: "$50 - $90",
      imageSrc: "/Images/massage_pro.jpeg",
    },
    {
      title: "Hot Stone Massage",
      description: "Massage using heated stones to relieve muscle tension.",
      priceRange: "$70 - $120",
      imageSrc: "/Images/massage_with_stones.jpeg",
    },
  ],
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("SPA");
  const [activeService, setActiveService] = useState(
    servicesData[activeCategory][0],
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveService(servicesData[category][0]);
  };

  const handleServiceChange = (service) => {
    setActiveService(service);
  };

  return (
    <>
       <Navbar/>
      <div className="container mx-auto mt-20 p-6">
        <Tabs
          categories={Object.keys(servicesData)}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div className="flex flex-col gap-6 lg:flex-row">
          <SideMenu
            services={servicesData[activeCategory]}
            activeService={activeService}
            onServiceChange={handleServiceChange}
          />
          <div className="flex-1">
            <ServiceCard
              title={activeService.title}
              description={activeService.description}
              priceRange={activeService.priceRange}
              imageSrc={activeService.imageSrc}
            />
          </div>
        </div>
        <section className="mt-16 bg-gray-100 py-16">
          <OfferSection />
        </section>
      </div>
      <Footer />
    </>
  );
}
