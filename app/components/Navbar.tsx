import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
    
  
  return (
    <header>
      <nav
        className={`fixed top-0 inset-x-0 z-20 transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        } flex items-center justify-between lg:px-8 p-6 h-20`}
      >
        <div className="flex lg:flex-1 -ml-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/King_spa_logo-removebg-preview.png"
              width={100}
              height={30}
              alt="Logo"
              className="w-[3.6rem] lg:w-20"
            />
            <span className="ml-2 self-center text-xl lg:text-2xl font-semibold text-pink-500">
              King&apos;s Spa
            </span>
          </Link>
        </div>

        <div
          className={`${
            isOpen ? "hidden" : "flex"
          } lg:flex lg:items-center lg:gap-4 z-20 mr-[-1.4rem]`}
        >
            <Link href="/appointment">
              <div className="text-white transition rounded bg-pink-500 hover:bg-pink-600 py-2 px-4 lg:py-3 lg:px-4 border-2">
                Appointment
              </div>
            </Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
