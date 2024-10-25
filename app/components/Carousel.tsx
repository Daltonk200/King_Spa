"use client";
import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import Link from "next/link"

const customTheme: CustomFlowbiteTheme["carousel"] = {
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800 transition ease-in-out duration-300", // Lighter background, smooth hover transition
      on: "bg-pink-500 dark:bg-pink-800 transition ease-in-out duration-300", // Pink when active with smooth transition
    },
  },
  control: {
    base: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/40 group-hover:bg-white/70 shadow-lg transition-all duration-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-pink-500 dark:bg-pink-700/50 dark:group-hover:bg-gray-900/80 dark:group-focus:ring-pink-500 sm:h-12 sm:w-12", 
    // Larger size, smoother hover effect, and shadow for better visibility
    icon: "h-6 w-6 text-white dark:text-pink-500 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-110", // Slightly larger icon with hover scaling effect
  },  
};


export default function MyCarousel() {
  return (
    <div className="h-96  sm:h-64 xl:h-screen 2xl:h-screen">
      <Carousel  theme={customTheme} pauseOnHover>

        {/* Slide 1 */}
        <div className="relative flex items-center justify-center h-full bg-[url('/Images/Boy_cutting_girls_hair.jpeg')] bg-cover">
          <div className="absolute inset-0 flex flex-col items-center text-center justify-center ">
            <h2 className="text-3xl lg:text-7xl font-bold text-pink-800">BEAUTY MEANS</h2>
            <h1 className="text-4xl lg:text-8xl font-extrabold text-pink-600">HEALTHY YOU</h1>
            <p className="text-2xl mt-4 text-gray-700">A little peace in a crazy world goes a long way.</p>
            <div className="mt-6">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full mx-2">
              <Link href="/services">
               See All Services
                </Link>
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full mx-2">
                <Link href="/appointment">
                Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative flex items-center justify-center h-full bg-[url('/Images/massage_pro.jpeg')] bg-cover">
          <div className="absolute inset-0  flex flex-col items-center text-center justify-center">
            <h2 className="text-4xl lg:text-7xl font-bold text-pink-800">REJUVENATE YOURSELF</h2>
            <h1 className="text-5xllg:text-8xl font-extrabold text-pink-600">INNER PEACE</h1>
            <p className="text-xl mt-4 text-gray-700">Experience the tranquility you deserve.</p>
            <div className="mt-6">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full mx-2">
              <Link href="/services">
                View Services
              </Link>
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full mx-2">
               <Link href="/appointment" >
               Book Now
               </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative flex items-center justify-center h-full bg-[url('/Images/Talking_in-spa.jpeg')] bg-cover">
          <div className="absolute inset-0  flex flex-col items-center text-center justify-center">
            <h2 className="text-4xl lg:text-7xl font-bold text-pink-800">GLOW FROM WITHIN</h2>
            <h1 className="text-5xl lg:text-8xl font-extrabold text-pink-600">NATURAL BEAUTY</h1>
            <p className="text-xl mt-4 text-gray-700">Feel confident in your own skin.</p>
            <div className="mt-6">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full mx-2">
              <Link href="/services">
                Discover More
                </Link>
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full mx-2">
              <Link href="/appointment">
                Book Now
              </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative flex items-center justify-center h-full bg-[url('/Images/Calabash-spa-and-salon-Afro-hair.jpg')] bg-cover">
          <div className="absolute inset-0 flex flex-col items-center text-center justify-center ">
            <h2 className="text-3xl lg:text-7xl font-bold text-pink-800">SERENITY AWAITS</h2>
            <h1 className="text-4xl lg:text-8xl font-extrabold text-pink-600">RELAX & RECHARGE</h1>
            <p className="lg:text-2xl mt-4 text-gray-700">Find your balance and refresh your soul.</p>
            <div className="mt-6">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full mx-2">
              <Link href="/appointment">
                Book Now
              </Link>
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full mx-2">
              <Link href="/contact">
                Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  );
}
