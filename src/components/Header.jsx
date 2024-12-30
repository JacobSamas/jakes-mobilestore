"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Bars3Icon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { gsap } from "gsap";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
  const headerRef = useRef(null);
  const titleRef = useRef([]);
  const router = useRouter();

  // Rotating animation for title
  useEffect(() => {
    const letters = titleRef.current;
    gsap.to(letters, {
      rotateY: 360,
      duration: 2,
      stagger: 0.2,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  // Slide animation for mobile menu
  useEffect(() => {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      if (menuOpen) {
        gsap.to(menu, { opacity: 1, height: "auto", duration: 0.5, ease: "power1.out" });
      } else {
        gsap.to(menu, { opacity: 0, height: 0, duration: 0.3, ease: "power1.in" });
      }
    }
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="bg-deepBlue text-starlight shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Rotating Title */}
        <h1
          className="text-2xl font-extrabold flex space-x-1 cursor-pointer"
          onClick={() => router.push("/")}
        >
          {"JS".split("").map((letter, index) => (
            <span
              key={index}
              ref={(el) => (titleRef.current[index] = el)}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/products" className="hover:text-goldenStar transition-all">
            Products
          </a>
          <a href="/about" className="hover:text-goldenStar transition-all">
            About
          </a>
          <button
            className="px-4 py-2 bg-goldenStar text-deepBlue font-bold rounded hover:bg-starlight transition-all"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer hover:text-goldenStar transition-all" />
          <ShoppingCartIcon className="h-6 w-6 cursor-pointer hover:text-goldenStar transition-all" />
          <Bars3Icon
            className="h-6 w-6 cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className="overflow-hidden md:hidden bg-deepBlue"
        style={{ height: 0, opacity: 0 }}
      >
        <a href="/" className="block py-2 px-4 hover:bg-moonlitBlue">
          Home
        </a>
        <a href="/products" className="block py-2 px-4 hover:bg-moonlitBlue">
          Products
        </a>
        <a href="/about" className="block py-2 px-4 hover:bg-moonlitBlue">
          About
        </a>
        <button
          className="block py-2 px-4 text-left hover:bg-moonlitBlue"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}
