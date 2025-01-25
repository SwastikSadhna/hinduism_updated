import BhaktiCard from '../Components/Bhakti/BhaktiCard';
import { FaChevronDown } from 'react-icons/fa';
import Footer from '../Components/Footer';
import axios from "axios";
import API_CONFIG from "../src/config/api";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Loading from './Loading'
import ErrorPage from './ErrorPage' 

export default function Books() {
  const [bhaktiTypes, setBhaktiTypes] = useState([]);
  const [isLoading, setIsLoading] = new useState(true)
  const [isError, setIsError] = new useState(false)

  useEffect(() => { 
    axios.get(API_CONFIG.baseUrl + "/book/all").then((res) => {
      setIsLoading(false)
      setBhaktiTypes(res.data.data);
    }).catch((err) => {
      setIsLoading(false)
      setIsError(true)
      console.log(err);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {
        
          isError ? <ErrorPage code={404} message={"Page Not Found"}/> : <>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Books</h1>
            <p className="text-lg text-gray-600">Explore different forms of devotional content</p>
        </div>

        {
          isLoading ==true? <Loading /> :
          <div className={isError?"": "grid grid-cols-1 md:grid-cols-2 gap-6"}>
          { 
            bhaktiTypes.map((item) => (
              <Link to={`/Book/${item._id}`} key={item._id}>  {/* Wrap each card with Link */}
                <BhaktiCard
                  type={item.title}
                  author={item.author}
                  description={item.description}
                  count={item.count}
                  image={item.image ? item.image : "../public/vite.svg"}
                />
              </Link>
            )) 
          }
          </div>
        }
      </>
      }
      </div>
      </div>
  );
}
