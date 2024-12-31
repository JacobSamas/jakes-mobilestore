"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion"; // Add this for smooth animations

export default function HomePage() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars only on the client
    const generatedStars = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3; // Random star size
      generatedStars.push({
        id: i,
        size,
        top: Math.random() * 100, // Random position
        left: Math.random() * 100,
        duration: Math.random() * 2 + 1, // Random animation duration
      });
    }
    setStars(generatedStars);

    // GSAP animations for sections
    gsap.fromTo(
      ".core-value",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power1.out" }
    );
    gsap.fromTo(
      ".about-text",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
    );
  }, []);

  return (
    <div className="relative bg-nightSky text-starlight">
      {/* Star Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}vh`,
              left: `${star.left}vw`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center space-y-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="promo-text text-4xl md:text-6xl font-extrabold"
        >
          Welcome to Jake&apos;s Mobile Store
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="promo-text text-lg md:text-2xl"
        >
          Revolutionizing the way you shop for mobile devices.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          href="/products"
          className="promo-text px-6 py-3 bg-goldenStar text-deepBlue text-lg font-bold rounded hover:bg-starlight transition-all"
        >
          View Products
        </motion.a>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-deepBlue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="core-value flex flex-col items-center space-y-4">
              <div className="bg-goldenStar w-16 h-16 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-deepBlue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Affordable Prices</h3>
              <p>Get the best deals on the latest devices without breaking the bank.</p>
            </div>
            <div className="core-value flex flex-col items-center space-y-4">
              <div className="bg-goldenStar w-16 h-16 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-deepBlue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fast Shipping</h3>
              <p>Enjoy lightning-fast delivery to your doorstep.</p>
            </div>
            <div className="core-value flex flex-col items-center space-y-4">
              <div className="bg-goldenStar w-16 h-16 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-deepBlue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8l-4 4h8l-4 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Top-Quality Devices</h3>
              <p>Shop only the best mobile devices trusted by millions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="about-text flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              At Jake&apos;s Mobile Store, we aim to simplify mobile shopping by offering
              an unparalleled online experience. Quality, affordability, and customer
              satisfaction are at the heart of what we do.
            </p>
            <a
              href="/about"
              className="mt-4 px-6 py-3 bg-goldenStar text-deepBlue text-lg font-bold rounded hover:bg-starlight transition-all inline-block"
            >
              Read Our Story
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="about-placeholder flex-1 w-full h-64 bg-moonlitBlue rounded-lg flex items-center justify-center"
          >
            <span className="text-starlight font-bold text-2xl">Placeholder</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
