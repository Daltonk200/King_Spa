"use client";
import { useState } from "react";
import Tabs from "../components/Tab";
import SideMenu from "../components/SideMenu";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import OfferSection from "../components/OfferSection";

const servicesData = {
  SPA: [
    {
      title: "Massage Therapy",
      description: "Relaxing massage to relieve stress and tension.",
      priceRange: "$40 - $80",
      imageSrc: "/images/IMG-20240827-WA0008.jpg",
    },
    {
      title: "Facials",
      description: "Rejuvenating facials to cleanse and refresh your skin.",
      priceRange: "$50 - $100",
      imageSrc: "/images/IMG-20240827-WA0004.jpg",
    },
    {
      title: "Body Scrub",
      description: "Exfoliating body scrub to remove dead skin cells.",
      priceRange: "$60 - $120",
      imageSrc: "/images/IMG-20240827-WA0010.jpg",
    },
    {
      title: "Aromatherapy",
      description: "Therapeutic use of essential oils.",
      priceRange: "$70 - $130",
      imageSrc: "/images/IMG-20240827-WA0012.jpg",
    },
  ],
  Waxing: [
    {
      title: "Eye Brows",
      description: "Professional eyebrow waxing.",
      priceRange: "$10 - $20",
      imageSrc: "/images/eyebrow.jpg",
    },
    {
      title: "Lips",
      description: "Smooth and hair-free lips.",
      priceRange: "$8 - $15",
      imageSrc: "/images/lips.jpg",
    },
    {
      title: "Chin & Lips",
      description: "Combination waxing for chin and lips.",
      priceRange: "$12 - $22",
      imageSrc: "/images/chin-lips.jpg",
    },
    {
      title: "Lower Leg",
      description: "Flawless lower leg waxing.",
      priceRange: "$25 - $40",
      imageSrc: "/images/lower-leg.jpg",
    },
  ],
  Facial: [
    {
      title: "Classic Facial",
      description: "Relaxing facial treatment to rejuvenate your skin.",
      priceRange: "$40 - $60",
      imageSrc: "/images/facial.jpg",
    },
    {
      title: "Anti-Aging Facial",
      description: "Reduce signs of aging and improve skin elasticity.",
      priceRange: "$60 - $100",
      imageSrc: "/images/anti-aging-facial.jpg",
    },
    {
      title: "Acne Treatment Facial",
      description: "Treat and prevent acne breakouts.",
      priceRange: "$50 - $90",
      imageSrc: "/images/acne-facial.jpg",
    },
  ],
  Massage: [
    {
      title: "Swedish Massage",
      description: "Gentle massage to relax the entire body.",
      priceRange: "$50 - $90",
      imageSrc: "/images/swedish-massage.jpg",
    },
    {
      title: "Hot Stone Massage",
      description: "Massage using heated stones to relieve muscle tension.",
      priceRange: "$70 - $120",
      imageSrc: "/images/hot-stone-massage.jpg",
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
      <div className="container mx-auto p-6">
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
