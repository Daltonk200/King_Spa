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
        <div className="relative flex h-full items-center justify-center bg-[url('/Images/Calabash-spa-and-salon-Afro-hair.jpg')] bg-cover">
        <div className="w-full h-screen absolute bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
            <h2 className="text-3xl font-bold text-white  text-textShadow-default lg:text-7xl">
              BEAUTY MEANS
            </h2>
            <h1 className="text-4xl font-extrabold text-white text-textShadow-lg lg:text-8xl">
              HEALTHY YOU
            </h1>
            <p className="mt-4 text-2xl text-pink-500 text-textShadow-md">
              A little peace in a crazy world goes a long way.
            </p>

            <div className="mt-6 flex gap-4">
              <Link href="/services">
                <button className="transform rounded-full bg-gradient-to-r from-pink-600 to-pink-400 px-6 py-2 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:from-pink-400 hover:to-pink-600">
                  See All Services
                </button>
              </Link>
              <Link href="/appointment">
                <button className="transform rounded-full border  bg-white px-6 py-2 font-bold text-pink-600 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-pink-500 hover:text-white">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative flex h-full items-center justify-center bg-[url('/Images/Speke-Apartments-Wampewo-Calabash-Spa-Salon-Beauty-slider_img-12.jpg')] bg-cover">
          <div className="w-full h-screen absolute bg-black/50"></div>
          <div className="absolute inset-0  flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-white  lg:text-7xl">
              REJUVENATE YOURSELF
            </h2>
            <h1 className="text-5xl lg:text-8xl font-extrabold text-white">
              INNER PEACE
            </h1>
            <p className="mt-4 text-2xl text-pink-500">
              Experience the tranquility you deserve.
            </p>
            <div className="mt-6">
              <button className="mx-2 rounded-full bg-pink-500 px-6 py-2 font-bold text-white hover:bg-pink-600">
                <Link href="/services">View Services</Link>
              </button>
              <button className="mx-2 rounded-full bg-gray-700 px-6 py-2 font-bold text-white hover:bg-gray-800">
                <Link href="/appointment">Book Now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative flex h-full items-center justify-center bg-[url('/Images/Speke-Apartments-Wampewo-Calabash-Spa-Salon-Beauty-slider_img-11.jpg')] bg-cover">
          <div className="w-full h-screen absolute bg-black/50"></div>
          <div className="absolute inset-0  flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold text-white  lg:text-7xl">
              GLOW FROM WITHIN
            </h2>
            <h1 className="text-5xl font-extrabold text-white lg:text-8xl">
              NATURAL BEAUTY
            </h1>
            <p className="mt-4 text-2xl text-pink-500">
              Feel confident in your own skin.
            </p>
            <div className="mt-6">
              <button className="mx-2 rounded-full bg-pink-500 px-6 py-2 font-bold text-white hover:bg-pink-600">
                <Link href="/services">Discover More</Link>
              </button>
              <button className="mx-2 rounded-full bg-gray-700 px-6 py-2 font-bold text-white hover:bg-gray-800">
                <Link href="/appointment">Book Now</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative flex h-full items-center justify-center bg-[url('/Images/calabash-spa-girlfriend-treatment.jpg')] bg-cover">
          <div className="w-full h-screen absolute bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
            <h2 className="text-3xl font-bold text-white  lg:text-7xl">
              SERENITY AWAITS
            </h2>
            <h1 className="text-4xl font-extrabold text-white lg:text-8xl">
              RELAX & RECHARGE
            </h1>
            <p className="mt-4text-2xl text-pink-500 lg:text-2xl">
              Find your balance and refresh your soul.
            </p>
            <div className="mt-6">
              <button className="mx-2 rounded-full bg-pink-500 px-6 py-2 font-bold text-white hover:bg-pink-600">
                <Link href="/appointment">Book Now</Link>
              </button>
              <button className="mx-2 rounded-full bg-gray-700 px-6 py-2 font-bold text-white hover:bg-gray-800">
                <Link href="/contact">Contact Us</Link>
              </button>
            </div>
          </div>
        </div>

      </Carousel>
    </div>
  );
}
