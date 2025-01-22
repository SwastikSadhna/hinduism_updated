import React, { useEffect, useRef } from "react";
import { FaLeaf, FaPeace, FaDumbbell, FaWater, FaBrain, FaRunning } from "react-icons/fa";
import { gsap } from "gsap";

const YogaBenefits = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 3, ease: "power2.out" }
    );
    
    // Staggered animation for each benefit card
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        stagger: 0.3, // Stagger timing
        ease: "power2.out",
      }
    );
  }, []);

  const benefits = [
    {
      icon: <FaLeaf size={40} className="text-green-500" />,
      title: "Improves Flexibility",
      desc: "Experience better posture and flexibility with regular practice.",
    },
    {
      icon: <FaPeace size={40} className="text-blue-500" />,
      title: "Reduces Stress",
      desc: "Achieve peace of mind through meditation and breathing techniques.",
    },
    {
      icon: <FaDumbbell size={40} className="text-red-500" />,
      title: "Boosts Strength",
      desc: "Enhance your physical and mental strength with yoga poses.",
    },
    {
      icon: <FaWater size={40} className="text-teal-500" />,
      title: "Promotes Hydration",
      desc: "Yoga helps improve circulation, aiding hydration throughout the body.",
    },
    {
      icon: <FaBrain size={40} className="text-purple-500" />,
      title: "Improves Focus",
      desc: "Yoga strengthens the mind, helping you focus better and remain mindful.",
    },
    {
      icon: <FaRunning size={40} className="text-orange-500" />,
      title: "Boosts Cardiovascular Health",
      desc: "Certain yoga poses improve heart health by promoting circulation.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-200 via-orange-300 to-yellow-200" ref={sectionRef}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">
          Benefits of Yoga
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardRef.current[index] = el)} // Add references for each benefit card
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 relative"
            >
              <div className="mb-4 text-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaBenefits;
