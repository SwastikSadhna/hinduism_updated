import React from "react";
import "../../src/App.css";
import { imageDetails } from "../../resources";

const Hero = () => {
  return (
    <div
      className="hero-section min-h-screen w-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url(${imageDetails.HeroImage3.src})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="absolute inset-0 bg-black/30 animate-fade-in" />

      <div className="content-container relative z-10 p-8 md:p-10 animate-slide-up">
        {/* <h2 className="font-bold text-6xl text-white mb-3 w-[60%] animate-title">
          LORD KRISHNA SAY SOMETHING
        </h2>
        <p className="w-[50%] text-gray-300 animate-text mb-8">
          Explore the essence of spirituality and devotion in the context of
          Sanatan Dharma.
        </p> */}
        <div className="w-[60%] animate-quote">
          <p className="text-xl text-yellow-300 font-bold mb-2 tracking-wider">Shri Krishna says:</p>
          <blockquote className="text-2xl text-white italic">
            "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection."
          </blockquote>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes titleReveal {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes textFade {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes quoteAppear {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
        .animate-slide-up { animation: slideUp 1s ease-out forwards; }
        .animate-title { opacity: 0; animation: titleReveal 1.2s ease-out 0.5s forwards; }
        .animate-text { opacity: 0; animation: textFade 1s ease-out 1.2s forwards; }
        .animate-quote { opacity: 0; animation: quoteAppear 1s ease-out 1.8s forwards; }
      `}</style>
    </div>
  );
};

export default Hero;

