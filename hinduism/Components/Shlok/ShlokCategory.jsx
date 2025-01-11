import React, { useState } from 'react';
import Shlok from './Shlok';

const ShlokCategory = ({ title, icon, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Placeholder shloks (replace with actual content)
  const shloks = [
    { text: 'Shlok 1 text here', translation: 'Translation 1' },
    { text: 'Shlok 2 text here', translation: 'Translation 2' },
    { text: 'Shlok 3 text here', translation: 'Translation 3' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 w-full max-w-3xl mx-auto mb-5">
      {/* Header Section */}
      <div
        className="flex items-center justify-between p-4 sm:p-5 cursor-pointer bg-orange-500 text-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Icon and Title */}
        <h2 className="text-lg sm:text-xl font-semibold flex items-center">
          <span className="text-2xl sm:text-3xl">{icon}</span>
          <span className="ml-2 sm:ml-4">{title}</span>
        </h2>

        {/* Expand/Collapse Icon */}
        <span className="text-xl sm:text-2xl">
          {isExpanded ? '▲' : '▼'}
        </span>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="p-3 sm:p-5 space-y-4">
          {shloks.map((shlok, index) => (
            <Shlok key={index} {...shlok} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShlokCategory;
