import React from 'react';

const TempleStory = ({ story }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">The Story of the Temple</h2>
      <p className="text-lg">{story}</p>
    </div>
  );
};

export default TempleStory;
