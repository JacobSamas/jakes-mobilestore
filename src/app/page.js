"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const hero = heroRef.current;

    // Animate Hero Text
    gsap.fromTo(
      hero,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    // Animate "Why Choose Us" Cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-nightSky text-starlight min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-deepBlue to-nightSky"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6">
          Jake&apos;s MobileStore
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Elevate your mobile experience. The best phones, just a click away.
        </p>
        <a
          href="/products"
          className="px-8 py-4 bg-goldenStar text-deepBlue font-bold rounded-lg shadow-lg hover:bg-starlight transition-all"
        >
          Explore Now
        </a>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Choose Jake&apos;s MobileStore?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Fast Delivery", description: "Get it when you need it." },
              { title: "Top Brands", description: "Only the best phones." },
              { title: "Unmatched Support", description: "We're here for you." },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="p-6 bg-deepBlue rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-32 bg-gradient-to-r from-moonlitBlue to-deepBlue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-6">
            Your Next Phone Awaits
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Jake&apos;s MobileStore brings you cutting-edge mobile devices with
            seamless service. Step into the future of mobile shopping.
          </p>
          <a
            href="/about"
            className="px-6 py-3 bg-goldenStar text-deepBlue font-bold rounded-lg shadow-lg hover:bg-starlight transition-all"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer-like CTA */}
      <footer className="py-10 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Discover More?</h3>
        <a
          href="/products"
          className="px-8 py-4 bg-goldenStar text-deepBlue font-bold rounded-lg shadow-lg hover:bg-starlight transition-all"
        >
          Browse Products
        </a>
      </footer>
    </div>
  );
}
