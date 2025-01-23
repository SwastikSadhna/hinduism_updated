import React, { useEffect, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { imageDetails } from "../resources";
import TempleStory from "../Components/Temple/TempleStory";
import TempleUniqueness from "../Components/Temple/TempleUniqueness";
import TempleStructure from "../Components/Temple/TempleStructure";
import TempleSpecial from "../Components/Temple/TempleSpecial";
import axios from "axios";
import API_CONFIG from "../src/config/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Temple = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [templeDetails, settempleDetails] = useState([])
  const { id } = useParams();
  const [images, setImages] = useState([])
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!hasFetched) {
      axios
        .get(`${API_CONFIG.baseUrl}/temple/get/${id}`)
        .then((res) => {
          settempleDetails(res.data[0]);
          setImages(res.data[0]?.images || []);
        })
        .catch((err) => {
          if (!hasFetched) { 
            alert(err.response?.data?.message || "An error occurred");
            navigate("/");
          }
        })
        .finally(() => {
          setHasFetched(true); 
        });
    }
  }, [id, hasFetched, navigate]);

  // const images = [
  //   imageDetails.Jagganathpuri.src, // Replace with actual image paths
  //   imageDetails.TempleJagganath.src,
  //   imageDetails.Jagganath.src,
  //   imageDetails.Rathyatra.src,
  //   imageDetails.TempleStructure.src,
  // ];

  const handlePrev = () => {
    if(images?.length>1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if(images?.length>1)
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Full-screen background with blue strip */}
      <div
        className="container w-full bg-white relative h-[600px] bg-cover bg-top flex items-end"
        style={{ backgroundImage: `url(${templeDetails.cover_image})` }}
      >
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold">{ templeDetails?.name}</h1>
          <p className="text-sm">{ templeDetails?.location}</p>
        </div>
      </div>

      <div className="bottom-0 w-full h-[50px] bg-blue-950 "></div>

      {/* Temple content sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TempleStory story={templeDetails.description} />

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
                  src={images?.length > 0? images[currentIndex]: ''}
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

        {templeDetails?.importance?.map((val, i) => <TempleUniqueness {...val} key={i} />)}
      </div>

      {/* Reference Link */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            For more details, visit the relevant sites :
            {
              templeDetails?.reference_link?.length > 0 ?templeDetails.reference_link.map((val, i) => {
                return (<p key={i}><a  href={val} className="text-blue-400" target="_blank"> {val} </a></p>);
              }): "No References available."
            }
            {/* <a
              href="https://www.jagannath.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Jagannath Temple Official Website
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temple;
