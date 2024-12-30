import React from "react";
import "../src/App.css";
import { imageDetails } from "../resources"; // Import imageDetails for structured access

const Hero = () => {
  return (
    <div
      className="hero-section min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageDetails.HeroImage3.src})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Your hero content goes here */}
      <div className="content-container left-5 top-20">
        {/* Your text and other elements */}
        <h2 className="font-bold text-6xl text-white mb-3 w-[60%]">LORD KRISHNA SAY SOMETHING</h2>
        <p className="w-[50%] text-gray-300">
          Explore the essence of spirituality and devotion in the context of
          Sanatan Dharma. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore blanditiis labore officiis nulla, ratione quaerat minus? Iure placeat minus, quibusdam assumenda vel dicta. Soluta delectus vitae qui fuga deserunt!
        </p>
      </div>
    </div>
  );
};

export default Hero;
