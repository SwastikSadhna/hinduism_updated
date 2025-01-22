import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { imageDetails } from "../resources";
import TempleStory from "../Components/Temple/TempleStory";
import TempleUniqueness from "../Components/Temple/TempleUniqueness";
import TempleStructure from "../Components/Temple/TempleStructure";
import TempleSpecial from "../Components/Temple/TempleSpecial";

const Temple = () => {
  const templeDetails = {
    image: `${imageDetails.TempleJagganath.src}`, // Replace with actual image path
    story:
      "The Jagannath Temple, located in Puri, Odisha, India, is one of the most revered pilgrimage sites in India and a key component of the Char Dham Yatra. The temple is dedicated to Lord Jagannath, a form of Lord Vishnu, and has a rich history dating back to the 12th century. It has been a focal point for religious and cultural activities for centuries, with millions of devotees visiting it annually for darshan and during festivals such as the Rath Yatra.",
    uniqueness:
      "The Jagannath Temple is known for its distinctive rituals and traditions, which set it apart from other temples in India. One of its unique aspects is the absence of any idol representation of Lord Jagannath; instead, the deity is represented by wooden figures. The temple is also famous for the grand Rath Yatra, during which the deities are carried in massive chariots, a spectacle that attracts millions of pilgrims from all over the world.",
    structure:
      "The Jagannath Temple’s architecture is a stunning example of Kalinga style, with its tall, curving spire rising above the city of Puri. The temple complex consists of several enclosures, and the main sanctum, called the Bada Deula, houses the deities. The temple’s intricately carved stone walls, the sacred water tank, and the massive chariots used for the Rath Yatra add to its architectural magnificence, making it an important cultural landmark.",
    special:
      "The Jagannath Temple holds immense spiritual and cultural significance. It is one of the Char Dham pilgrimage sites, offering spiritual solace to devotees. The Rath Yatra, a key event of the temple, is one of the largest religious festivals in the world. What makes the temple even more special is its inclusivity; it welcomes devotees from all religions and castes, with a strong focus on communal harmony and devotion.",
    uniquenessImage: `${imageDetails.Jagganath.src}`, // Replace with actual image
    structureImage: `${imageDetails.TempleStructure.src}`, // Replace with actual image
    specialImage: `${imageDetails.Rathyatra.src}`, // Replace with actual image
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    imageDetails.Jagganathpuri.src, // Replace with actual image paths
    imageDetails.TempleJagganath.src,
    imageDetails.Jagganath.src,
    imageDetails.Rathyatra.src,
    imageDetails.TempleStructure.src,
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Full-screen background with blue strip */}
      <div
        className="container w-full bg-white relative h-[600px] bg-cover bg-top flex items-end"
        style={{ backgroundImage: `url(${templeDetails.image})` }}
      >
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold">Jagannath Temple</h1>
          <p className="text-sm">Puri, Odisha, India</p>
        </div>
      </div>

      <div className="bottom-0 w-full h-[50px] bg-blue-950 "></div>

      {/* Temple content sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TempleStory story={templeDetails.story} />

        {/* Carousel Section */}
        <div className="py-8">
          <h2 className="text-2xl font-bold text-center mb-4">Gallery</h2>
          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Previous Button */}
              <button
                className="absolute left-4 z-10 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
                onClick={handlePrev}
              >
                <IoChevronBackOutline size={24} />
              </button>

              {/* Image */}
              <div className="w-full h-[400px] bg-contain max-w-2xl overflow-hidden">
                <img
                  src={images[currentIndex]}
                  alt={`Temple Image ${currentIndex + 1}`}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Next Button */}
              <button
                className="absolute right-4 z-10 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
                onClick={handleNext}
              >
                <IoChevronForwardOutline size={24} />
              </button>
            </div>
          </div>
        </div>

        <TempleUniqueness
          uniqueness={templeDetails.uniqueness}
          image={templeDetails.uniquenessImage}
        />
        <TempleStructure
          structure={templeDetails.structure}
          image={templeDetails.structureImage}
        />
        <TempleSpecial
          special={templeDetails.special}
          image={templeDetails.specialImage}
        />
      </div>

      {/* Reference Link */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            For more details, visit the official website of the temple:{" "}
            <a
              href="https://www.jagannath.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Jagannath Temple Official Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temple;
