import React from 'react';

const TempleSpecial = ({ special, image }) => {
  return (
    <div className="flex flex-col md:flex-row my-8">
      <div className="w-full md:w-1/2">
        <img src={image} alt="Temple Special" className="rounded-lg shadow-lg w-auto m-auto h-64 object-contain" />
      </div>
      <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
        <h3 className="text-xl font-semibold mb-4">What Makes It Special</h3>
        <p className="text-lg">{special}</p>
      </div>
    </div>
  );
};

export default TempleSpecial;
