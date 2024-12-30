import React from "react";
import { imageDetails } from '../../resources'; 

const BookHeader = ({ image, title, author }) => {
  return (
    <header
      className="header w-full py-10 px-5 flex justify-center items-center h-[50vh] bg-cover bg-center bg-orange-600 "
    //   style={{ backgroundImage: `url(${imageDetails.Granth.src})` }}
    >
      <div className="flex items-center gap-10 w-[80%] max-w-6xl bg-transparent bg-opacity-20 p-5 rounded-lg">
        {/* Circular Book Cover Image */}
        <div className="w-40 h-40 rounded-full bg-white flex-shrink-0 shadow-2xl flex justify-center items-center p-3">
          <img
            src={image} 
            alt="Book Cover"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <div>
          <h1 className="text-6xl font-bold">{title}</h1>
          <h2 className="text-3xl text-gray-700">{author}</h2>
        </div>
      </div>
    </header>
  );
};

export default BookHeader;
