// Yoga.jsx
import React from "react";
import YogaIntro from "../Components/Yoga/YogaIntro";
import YogaBenefits from "../Components/Yoga/YogaBenifits";
import YogaTypes from "../Components/Yoga/YogaTypes";
import YogaCTA from "../Components/Yoga/YougaCTA";
import ImageGallery from "../Components/Yoga/YogaImageGallary";

const Yoga = () => {
  return (
    <div>
      <YogaIntro />
      <YogaBenefits />
      <YogaTypes />
      <ImageGallery />
      <YogaCTA />
    </div>
  );
};

export default Yoga;
