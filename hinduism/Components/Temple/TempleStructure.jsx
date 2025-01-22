import React from 'react';

const TempleStructure = ({ structure, image }) => {
  return (
    <div className="flex flex-col md:flex-row my-8">
      <div className="w-full md:w-1/2 md:mr-8 mt-4 md:mt-0">
        <h3 className="text-xl font-semibold mb-4">Temple Structure</h3>
        <p className="text-lg">{structure}</p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={image} alt="Temple Structure" className="rounded-lg shadow-lg w-auto m-auto h-64 object-contain" />
      </div>
    </div>
  );
};

export default TempleStructure;
