import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { imageDetails } from "../../resources";

const YogaIntro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="w-full h-auto">
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative text-white"
        style={{
          backgroundImage: `url(${imageDetails.Yoga.src})`,
        }}
      >
        {/* Overlay for dimming the background */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Introductory text */}
        <div
          className="relative z-10 text-center max-w-3xl px-6"
          ref={textRef}
        >
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Embrace the Power of Yoga
          </h1>
          <p className="text-lg md:text-xl">
            Discover the ancient practice of yoga and transform your body, mind,
            and soul. Start your journey to a healthier and happier life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default YogaIntro;
