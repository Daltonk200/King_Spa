import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  // const { userId } = useAuth();
  // const isAuth = !!userId;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    // Check if window is defined (only runs in the browser)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
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

        {/* <div className="lg:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="w-4 h-5 ml-20 text-white" />
            ) : (
              <Bars3Icon className="w-9 h-10 text-white" />
            )}
          </button>
        </div> */}

        <div
          className={`${
            isOpen ? "hidden" : "flex"
          } lg:flex lg:items-center lg:gap-4 z-20 mr-[-1.4rem]`}
        >
          {/* {!isAuth ? ( */}
            <Link href="/appointment">
              <div className="text-white transition rounded bg-pink-500 hover:bg-pink-600 py-2 px-4 lg:py-3 lg:px-4 border-2">
                Appointment
              </div>
            </Link>
          {/* ) : (
            <>
              <Link href="/dashboard">
                <div className="text-white transition rounded bg-pink-500 hover:bg-pink-600 py-2 px-4 lg:py-3 lg:px-4 border-2">
                  Dashboard
                </div>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
