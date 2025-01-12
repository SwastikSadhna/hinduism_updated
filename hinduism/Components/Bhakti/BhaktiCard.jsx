import { useNavigate } from 'react-router-dom'; // Using useNavigate instead of Link
import { FaBookOpen, FaMusic, FaPrayingHands, FaFeatherAlt, FaOm, FaGopuram, FaScroll, FaGlobeAsia } from 'react-icons/fa';
import { GiLotus, GiBookPile,  GiTempleGate  } from 'react-icons/gi';
import { MdOutlineMenuBook } from 'react-icons/md';

const getIcon = (type) => {
  switch (type) {
    case 'Bhajans': 
      return <FaMusic className="text-3xl text-purple-500" />;       // Music notes for devotional songs
    case 'Duha': 
      return <FaPrayingHands className="text-3xl text-green-500" />; // Symbolizes prayer and devotion
    case 'Chhand': 
      return <GiLotus className="text-3xl text-pink-500" />;         // Lotus symbolizes purity in poetry
    case 'Vedas': 
      return <GiBookPile className="text-3xl text-blue-500" />;      // Stack of books for ancient scriptures
    case '18 Purans': 
      return <MdOutlineMenuBook className="text-3xl text-red-500" />;// Open book for mythological stories
    case '108 Upnisads': 
      return <FaScroll className="text-3xl text-green-500" />;       // Scroll for philosophical texts
    case 'Smritis': 
      return <FaBookOpen className="text-3xl text-teal-500" />;      // Open book for legal and ethical texts
    case '33 Koti Devta': 
      return <GiTempleGate className="text-3xl text-yellow-500" />;// Temple for divine deities
    default: 
      return <FaBookOpen className="text-3xl text-gray-500" />;      // Default icon for unspecified types
  }
};

export default function BhaktiCard({ type, description, count, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
    >
      <div className="flex flex-col items-center space-y-4">
        {getIcon(type)}
        <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
        <p className="text-gray-600 text-center text-sm">{description}</p>
        <span className="text-sm text-gray-500">{count} items</span>
      </div>
    </div>
  );
}

