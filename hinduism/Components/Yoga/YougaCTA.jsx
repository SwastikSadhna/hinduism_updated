import React from "react";

const YogaCTA = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1920x1080/?yoga-meditation')",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Yoga Journey</h2>
        <p className="text-lg mb-6">
          Unlock the benefits of yoga today. Join our sessions and begin your transformation.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition"
        >
          Join Us
        </a>
      </div>
    </section>
  );
};

export default YogaCTA;
