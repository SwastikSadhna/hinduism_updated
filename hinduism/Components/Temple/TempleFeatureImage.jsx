"use client";

import { useState } from "react";
// import Image from "next/image";
import { imageDetails } from "../../resources";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const images = [
//   `${imageDetails.Rathyatra.src}`,
//   `${imageDetails.Jagganath.src}`,
//   `${imageDetails.TempleJagganath.src}`,
// ];

export function ImageSlider({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Temple Slide ${currentIndex + 1}`}
            className="h-full w-full object-cover rounded-lg"
          />
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/75"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/75"
            aria-label="Next slide"
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
