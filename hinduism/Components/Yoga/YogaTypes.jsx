import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { imageDetails } from "../../resources";

const YogaTypes = () => {
  const typesRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
      gsap.fromTo(
        typesRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 5, ease: "power2.out" }
      );
}, []);

  const yogaTypes = [
    {
      name: "Hatha Yoga",
      image: `${imageDetails.HathaYoga.src}`,
      description:
        "Hatha Yoga is a branch of yoga that emphasizes physical exercises to master the body along with mind-body connection.",
    },
    {
      name: "Vinyasa Yoga",
      image: `${imageDetails.VinyasaYoga.src}`,
      description:
        "Vinyasa Yoga involves a series of poses that flow smoothly into one another, paired with breath control.",
    },
    {
      name: "Ashtanga Yoga",
      image: `${imageDetails.AshtangYoga.src}`,
      description:
        "Ashtanga Yoga is a rigorous style of yoga that follows a specific sequence of postures in a flowing pattern.",
    },
    {
      name: "Yin Yoga",
      image: `${imageDetails.YinYoga.src}`,
      description:
        "Yin Yoga is a slow-paced style of yoga with postures held for longer periods, targeting deeper tissues.",
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle card visibility
  };

  return (
    <section className="py-16" ref={typesRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Types of Yoga
        </h2>
        <div className="h-[600px] grid md:grid-cols-4 lg:grid-cols-3 gap-6">
          {yogaTypes.map((type, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition"
              onMouseEnter={() => handleCardClick(index)}
            >
              {/* Image */}
              <img
                src={type.image}
                alt={type.name}
                className="w-full h-auto object-cover"
              />

              {/* Click Card */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center p-4 transition-all duration-300 ${
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{type.name}</h3>
                <p className="text-base text-center">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaTypes;
