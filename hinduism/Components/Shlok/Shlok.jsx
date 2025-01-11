import React, { useState } from 'react';
import { FaVolumeUp, FaCopy, FaPlay, FaPause } from 'react-icons/fa';

const Shlok = ({ text, translation, image, audio, video }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = () => {
    if (audio) {
      const audioElement = new Audio(audio);
      audioElement.play();
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Shlok copied to clipboard!');
  };

  const toggleVideo = () => {
    const videoElement = document.getElementById(`video-${text.substring(0, 10)}`);
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden container max-w-screen-lg text-center ">
      <div className="p-6">
        <p className="text-xl font-semibold mb-4">{text}</p>
        {image && (
          <img src={image} alt="Shlok illustration" className="object-contain mb-4 rounded m-auto"  style={{width:"100%",maxWidth:"350px",height:'auto',objectPosition:'center'}}/>
        )}
        {/* {video && (
          <div className="relative mb-4">
            <video
              id={`video-${text.substring(0, 10)}`}
              src={video}
              className="w-full rounded"
            />
            <button
              onClick={toggleVideo}
              className="absolute bottom-4 right-4 bg-orange-500 text-white p-2 rounded-full"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        )} */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-orange-600 hover:text-orange-800"
            onClick={() => setShowTranslation(!showTranslation)}
          >
            {showTranslation ? 'Hide Translation' : 'Show Translation'}
          </button>
          <div className="flex space-x-4">
            <button onClick={handleSpeak} className="text-orange-600 hover:text-orange-800">
              <FaVolumeUp />
            </button>
            <button onClick={handleCopy} className="text-orange-600 hover:text-orange-800">
              <FaCopy />
            </button>
          </div>
        </div>
        {showTranslation && (
          <p className="text-gray-600">{translation}</p>
        )}
      </div>
    </div>
  );
};

export default Shlok;

