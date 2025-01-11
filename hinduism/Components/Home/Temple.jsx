import React from "react";

const Temple = () => {
  const images = [
    "./src/IMG/others/slide image (1).jpg",
    "./src/IMG/others/slide image (2).jpg",
    "./src/IMG/others/slide image (3).jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    return (
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white px-4 py-2"
          onClick={prevSlide}
        >
          <i className="fa-solid fa-arrow-left text-2xl"></i>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white px-4 py-2"
          onClick={nextSlide}
        >
          <i className="fa-solid fa-arrow-right text-2xl"></i>
        </button>
      </div>
    );
  };
};
export default Temple;
