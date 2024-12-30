import React from "react";
import "../src/App.css";
import { imageDetails } from "../resources"; 

const Hero = () => {
  return (
    <div
      className="hero-section min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imageDetails.HeroImage3.src})`,
        height: "auto ",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Your hero content goes here */}
      <div className="content-container">
        {/* Your text and other elements */}
        <h2>सनातन क्या है?</h2>
        <p>
          Explore the essence of spirituality and devotion in the context of
          Sanatan Dharma.
        </p>
      </div>
    </div>
  );
};

export default Hero;
