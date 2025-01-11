import React from "react";
import Hero from "../Components/Home/Hero";
import Sanatan from "../Components/Home/Sanatan";
import TriMurty from "../Components/Home/TriMurty";
import CharDhamSection from "../Components/Home/CharDhamSection";
import PrayingSection from "../Components/Home/PrayingSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <Sanatan />
      <TriMurty />
      <CharDhamSection />
      <PrayingSection />
    </div>
  );
};

export default Home;
