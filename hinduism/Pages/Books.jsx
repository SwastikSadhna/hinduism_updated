import BhaktiCard from '../Components/Bhakti/BhaktiCard';
import axios from "axios";
import API_CONFIG from "../src/config/api";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Loading from './Loading';
import ErrorPage from './ErrorPage';

export default function Books() {
  const [bhaktiTypes, setBhaktiTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState({});
  const [tempFilters, setTempFilters] = useState({});

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_CONFIG.baseUrl + "/book/keywords");
      const data = response.data.data[0];
      const categories = Object.keys(data).map((key) => ({
        name: key,
        options: data[key],
      }));
      setFilters(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = (option, categoryName) => {
    setTempFilters((prevFilters) => {
      const categoryFilters = prevFilters[categoryName] || [];
      const updatedCategoryFilters = categoryFilters.includes(option)
        ? categoryFilters.filter((item) => item !== option)
        : [...categoryFilters, option];
      return {
        ...prevFilters,
        [categoryName]: updatedCategoryFilters,
      };
    });
  };

  const applyFilter = () => {
    setActiveCategory(tempFilters);
    setTempFilters({});
    toggleModal();
  };

  useEffect(() => {
    axios
      .get(API_CONFIG.baseUrl + "/book/")
      .then((res) => {
        setIsLoading(false);
        setBhaktiTypes(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(activeCategory).length > 0) {
      const query = {};
      for (const key in activeCategory) {
        if (activeCategory[key].length > 0) {
          query[key] = activeCategory[key];
        }
      }
      const url = `${API_CONFIG.baseUrl}/book/filter`;
      axios
        .get(url, { params: query })
        .then((res) => setBhaktiTypes(res.data.data))
        .catch((err) => {
          setBhaktiTypes([]);
          console.error(err);
        });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 flex justify-between">
          <div className="text-start">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Books</h1>
            <p className="text-lg text-gray-600">
              Explore different forms of devotional content
            </p>
          </div>
          <button
            className="bg-orange-500 text-white my-auto px-4 py-2 rounded hover:bg-orange-600"
            onClick={toggleModal}
          >
            Filter
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Filter Options</h2>
              <p className="text-gray-600 mb-6">
                Customize your content by applying filters below.
              </p>
              <div className="mb-4">
                {filters.length > 0 ? (
                  filters.map((category) => (
                    <div key={category.name}>
                      <h3 className="my-2 block text-center bg-slate-200 py-1 font-bold capitalize">
                        {category.name}
                      </h3>
                      <div className="grid grid-cols-4">
                        {category.options.map((option) => (
                          <div key={option}>
                            <input
                              type="checkbox"
                              id={option}
                              className="me-1"
                              onChange={() =>
                                handleCategoryChange(option, category.name)
                              }
                            />
                            <label htmlFor={option}>{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="font-bold text-red-500">
                    Sorry, no filters available
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 mr-2"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  onClick={applyFilter}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {isLoading ? (
          <Loading />
        ) : isError ? (
          <ErrorPage code={500} message="Something went wrong!" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bhaktiTypes.length > 0 ? (
              bhaktiTypes.map((item) => (
                <Link to={`/Book/${item.id}`} key={item.id}>
                  <BhaktiCard
                    type={item.title}
                    author={item.author}
                    description={item.description}
                    count={item.count}
                    image={item.image ? item.image : "../public/vite.svg"}
                  />
                </Link>
              ))
            ) : (
              <ErrorPage code={404} message="No Books Found." />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
