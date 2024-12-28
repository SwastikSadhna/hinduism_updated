import React from "react";
import '../src/App.css'

const Hero = () => {
  return (
    <div 
      className="hero-section min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('./src/IMG/others/indian-temple.jpg')`,
        height: '100vh',
        width: 'auto',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        position: 'relative'
      }}
    >
      {/* Your hero content goes here */}
      <div className="content-container">
        {/* Your text and other elements */}
      </div>
    </div>
  );
};

export default Hero;
