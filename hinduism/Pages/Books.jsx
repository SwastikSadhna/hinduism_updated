import BhaktiCard from '../Components/Bhakti/BhaktiCard';
import { FaChevronDown } from 'react-icons/fa';
import Footer from '../Components/Footer';
import axios from "axios";
import API_CONFIG from "../src/config/api";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

export default function Books() {
  const [bhaktiTypes, setBhaktiTypes] = useState([]);

  useEffect(() => { 
    axios.get(API_CONFIG.baseUrl + "/book/all").then((res) => {
      setBhaktiTypes(res.data.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Books</h1>
          <p className="text-lg text-gray-600">Explore different forms of devotional content</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bhaktiTypes.length > 0 ? 
            bhaktiTypes.map((item) => (
              <Link to={`/Book/${item._id}`} key={item._id}>  {/* Wrap each card with Link */}
                <BhaktiCard
                  type={item.title}
                  description={item.description}
                  count={item.count}
                  image={item.image ? item.image : "../public/vite.svg"}
                />
              </Link>
            )) : <p>No items available.</p>
          }
        </div>
      </div>
    </div>
  );
}
