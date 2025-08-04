import React from "react";
import profile from "/public/hero-img.svg";

const Hero = () => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${profile})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CFF1FFCC] to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-10 ml-12">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Plan Your <br /> Trip with Ease
        </h1>
        <p className="text-lg text-black mb-6">
          Customize your travel itinerary in minutes—pick your destination, set your preferences,
          and explore with confidence.
        </p>

        {/* 👇 Anchor link to scroll to the Explore section */}
        <a
          href="#Explore"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
