import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Explore from "./Explore";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Features />

      {/* 👇 Anchor target section for smooth scroll */}
      <div id="Explore">
        <Explore />
      </div>
    </div>
  );
};

export default Homepage;
