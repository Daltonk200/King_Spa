// app/components/ServiceSelection.jsx
"use client";
import { useBooking } from "../context/BookingContext";

export default function ServiceSelection({ nextStep }) {
  const { selectedServices, setSelectedServices } = useBooking();

  // Dummy data for different services
  const services = {
    Massage: [
      { title: "Swedish Massage", description: "Gentle massage to relax the entire body.", priceRange: "$50 - $90" },
      { title: "Hot Stone Massage", description: "Massage using heated stones to relieve muscle tension.", priceRange: "$70 - $120" },
    ],
    Waxing: [
      { title: "Eye Brows", description: "Professional eyebrow waxing.", priceRange: "$10 - $20" },
      { title: "Lips", description: "Smooth and hair-free lips.", priceRange: "$8 - $15" },
      { title: "Chin & Lips", description: "Combination waxing for chin and lips.", priceRange: "$12 - $22" },
      { title: "Lower Leg", description: "Flawless lower leg waxing.", priceRange: "$25 - $40" },
    ],
    Facial: [
      { title: "Classic Facial", description: "Relaxing facial treatment to rejuvenate your skin.", priceRange: "$40 - $60" },
      { title: "Anti-Aging Facial", description: "Reduce signs of aging and improve skin elasticity.", priceRange: "$60 - $100" },
      { title: "Acne Treatment Facial", description: "Treat and prevent acne breakouts.", priceRange: "$50 - $90" },
    ],
    SPA: [
      { title: "Massage Therapy", description: "Relaxing massage to relieve stress and tension.", priceRange: "$40 - $80" },
      { title: "Facials", description: "Rejuvenating facials to cleanse and refresh your skin.", priceRange: "$50 - $100" },
      { title: "Body Scrub", description: "Exfoliating body scrub to remove dead skin cells.", priceRange: "$60 - $120" },
      { title: "Aromatherapy", description: "Therapeutic use of essential oils.", priceRange: "$70 - $130" },
    ],
  };

  const handleServiceChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <section className="max-w-4xl w-full p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Make your appointment</h1>
      <p className="mb-6 text-gray-500">You can select more than one service.</p>

      {/* Service Categories */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {Object.keys(services).map((category) => (
          <div key={category}>
            <p className="font-bold mb-2">{category}</p>
            <div className="grid grid-cols-2 gap-4">
              {services[category].map((service, index) => (
                <label key={index} className="block">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedServices.includes(service.title)}
                    onChange={() => handleServiceChange(service.title)}
                  />
                  {service.title}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Next
      </button>
    </section>
  );
}
