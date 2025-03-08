import { useState, useEffect } from "react";
import axios from "axios";
import API_CONFIG from "../../src/config/api";

const Sidebar = ({ selectedCategory, setSelectedCategory, setGranth, setGranthItem, setIsLoading }) => {
  const handleCategoryClick = async (category, id) => {
    setIsLoading(true)
    setSelectedCategory(category);
    try {
      const response = await axios.get(`${API_CONFIG.baseUrl}/granth/${id}`);
      console.log(response)
      setIsLoading(false)
      setGranth(response.data.granth);
      setGranthItem(response.data.items);
    } catch (error) {
      console.error("Error fetching granth data:", error);
    }
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(API_CONFIG.baseUrl + "/granth/").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <aside className="w-72 border-r min-h-screen bg-white shadow-lg">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <nav className="space-y-2">
          {categories.map((item) => (
            <div key={item.id} className="group">
              <div
                className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
                  selectedCategory === item.title ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-50"
                }`}
                onClick={() => handleCategoryClick(item.title, item.id)}
              >
                <span className="mr-2">{item.image}</span>
                <div>
                  <div>{item.title}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;




