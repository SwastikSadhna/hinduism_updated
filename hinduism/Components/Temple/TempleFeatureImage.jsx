import React from 'react';

const TempleImage = ({ src, alt }) => {
  return (
    <div className="flex justify-center my-4">
      <img src={src} alt={alt} className="rounded-lg shadow-lg w-full h-64 object-cover sm:w-1/2 md:w-1/3" />
    </div>
  );
};

export default TempleImage;
