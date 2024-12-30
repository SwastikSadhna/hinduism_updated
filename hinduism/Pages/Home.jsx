import React from "react";
import Hero from "../Components/Hero";
import Sanatan from "../Components/Sanatan";
import TriMurty from "../Components/TriMurty";
import CharDhamSection from "../Components/CharDhamSection";
import PrayingSection from "../Components/PrayingSection";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <Sanatan />
      <TriMurty />
      <CharDhamSection />
      <PrayingSection />
      <Footer />
    </div>
  );
};

export default Home;
