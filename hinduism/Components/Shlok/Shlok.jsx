import React, { useState } from 'react';
import { FaVolumeUp, FaCopy } from 'react-icons/fa';

const Shlok = ({ text, translation }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleSpeak = () => {
    // Implement text-to-speech functionality here
    console.log('Speaking shlok');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here to inform the user that the text has been copied
  };

  return (
    <div className="mb-4 p-4 bg-orange-100 rounded-lg">
      <p className="text-lg font-semibold mb-2">{text}</p>
      <div className="flex justify-between items-center">
        <button
          className="text-orange-600 hover:text-orange-800"
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? 'Hide Translation' : 'Show Translation'}
        </button>
        <div className="flex space-x-2">
          <button onClick={handleSpeak} className="text-orange-600 hover:text-orange-800">
            <FaVolumeUp />
          </button>
          <button onClick={handleCopy} className="text-orange-600 hover:text-orange-800">
            <FaCopy />
          </button>
        </div>
      </div>
      {showTranslation && (
        <p className="mt-2 text-gray-600">{translation}</p>
      )}
    </div>
  );
};

export default Shlok;

