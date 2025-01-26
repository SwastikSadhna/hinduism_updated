import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContent } from '../Components/Bhakti/ContentContext';
import Sidebar from '../Components/Bhakti/SideBar';
import axios from 'axios';
import API_CONFIG from '../src/config/api'

export default function BhaktiLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const { activeCategory, setActiveCategory } = useContent();
  const [tempFilters, setTempFilters] = useState({});

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchCategories = async () => {
  try {
    const response = await axios.get(API_CONFIG.baseUrl + "/bhakti/filter/options");
    const data = response.data.data[0];
    const categories = Object.keys(data).map((key) => ({
      name: key,
      options: data[key],
    }));

    const defaultCategories = Object.keys(data).map((key) => ({
      [key]: [],
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
    setTempFilters({})
    toggleModal()
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        {/* Sidebar */}

        <main className={`flex-1 p-6 mt-20 md:mt-0 ${isOpen ? 'ml-64' : ''}`}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-orange-600">Welcome to Sanatan</h1>
              <p className="mt-4 text-gray-600">Select a category from the sidebar to explore content.</p>
            </div>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              onClick={toggleModal}
            >
              Filter
            </button>
          </div>

          {/* Render the selected content */}
          <div>
            <Outlet />
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Filter Options</h2>
            <p className="text-gray-600 mb-6">Customize your content by applying filters below.</p>

           {/* Filter options */}
<div className="mb-4">
  {filters.map(category => (
    <div key={category.name} >
      <h3>{category.name}</h3>
      <div className='grid grid-cols-4'> 
      {category.options.map(option => (
        <div key={option}>
          <input
            type="checkbox"
            id={option}
            className='me-1'
            onChange={() => handleCategoryChange(option, category.name)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
        </div>
    </div>
  ))}
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
    </div>
  );
}

