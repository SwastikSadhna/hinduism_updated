import React from 'react';

const TempleImage = ({ src, alt }) => {
  return (
    <div className="flex justify-center my-4 w-full">
      <img src={src} alt={alt} className="rounded-lg shadow-lg w-full object-cover sm:w-1/2 md:w-1/3" />
    </div>
  );
};

export default TempleImage;
