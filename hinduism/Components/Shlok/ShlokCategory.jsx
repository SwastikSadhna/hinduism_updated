import React, { useState } from 'react';
import Shlok from './Shlok';

const ShlokCategory = ({ title, icon, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Placeholder shloks (you'll replace these with actual content)
  const shloks = [
    { text: 'Shlok 1 text here', translation: 'Translation 1' },
    { text: 'Shlok 2 text here', translation: 'Translation 2' },
    { text: 'Shlok 3 text here', translation: 'Translation 3' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-orange-500 text-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-xl font-semibold flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </h2>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </div>
      {isExpanded && (
        <div className="p-4">
          {shloks.map((shlok, index) => (
            <Shlok key={index} {...shlok} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShlokCategory;

