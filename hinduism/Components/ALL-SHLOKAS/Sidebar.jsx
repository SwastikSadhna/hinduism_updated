import { useState, useEffect } from "react";
import axios from "axios";
import API_CONFIG from "../../src/config/api";

const Sidebar = ({ selectedCategory, setSelectedCategory, setGranth, setGranthItem, setIsLoading }) => {
  const handleCategoryClick = async (category, id) => {
    setIsLoading(true)
    setSelectedCategory(category);
    try {
      let q = categories.map((val)=>`_keyword=${val}`)
      console.log(q)
      const response = await axios.get(`${API_CONFIG.baseUrl}/sloka/filter?`+q.join("&"));
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
    axios.get(API_CONFIG.baseUrl + "/sloka/keywords").then((res) => {
      setCategories(res.data.data[0]["keyword"]);
    });
  }, []);

  return (
    <aside className="w-72 border-r min-h-screen bg-white shadow-lg">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <nav className="space-y-2">
          {categories.map((item, k) => (
            <div key={k} className="group">
              <div
                className={`flex items-center px-4 py-2 rounded-lg cursor-pointer ${
                  selectedCategory === item ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-50"
                }`}
                onClick={() => handleCategoryClick(item, k)}
              >
                <div>
                  <div>{item}</div>
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




