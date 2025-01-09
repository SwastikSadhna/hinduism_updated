import React from "react";
import ShlokCategory from "../Components/Shlok/ShlokCategory";
import Footer from "../Components/Footer";
import { FaSun, FaMoon, FaBook } from "react-icons/fa";

const SanatanShloksPage = () => {
  const categories = [
    { title: "Morning Shloks", icon: <FaSun />, id: "morning" },
    { title: "Bedtime Shloks", icon: <FaMoon />, id: "bedtime" },
    { title: "Study Shloks", icon: <FaBook />, id: "study" },
  ];

  return (
    <>
      {/* <div className="div my-4"></div> */}
      <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-orange-800 mb-8">
            Daily Sanatan Shloks
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <ShlokCategory key={category.id} {...category} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SanatanShloksPage;
