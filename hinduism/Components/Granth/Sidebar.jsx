import React, { useEffect, useState } from "react"
import axios from "axios"
import API_CONFIG from "../src/config/api"

// const categories = [
//   { id: 1, image: "📚", title: "Vedas", description: "Rigveda, Yajurveda, Samaveda, Atharvaveda" },
//   { id: 2, image: "📖", title: "18 Puranas", description: "Vishnu Purana, Shiva Purana, Bhagavata Purana" },
//   { id: 3, image: "🕉️", title: "Upanishads", description: "Isha, Kena, Katha, Prashna, Mundaka" },
//   { id: 4, image: "🎯", title: "Ramayana", description: "Valmiki Ramayana, Ramcharitmanas" },
//   { id: 5, image: "📑", title: "Mahabharata", description: "From Adi Parva to Swargarohana Parva" },
// ]

const Sidebar = ({ selectedCategory, setSelectedCategory, setGranth, setGranthItem }) => {
  const handleCategoryClick = async (category, id) => {
    setSelectedCategory(category)
    try {
      const response = await axios.get(`${API_CONFIG.baseUrl}/granth/${id}`)
      setGranth(response.data.granth)
      setGranthItem(response.data.items)
    } catch (error) {
      console.error("Error fetching granth data:", error)
    }
  }

const [categories,setCategories] = useState([])
useEffect(()=>{
axios.get(API_CONFIG.baseUrl + "/granth/").then((res)=>{
    setCategories(res.data)
})
},[])

  return (
    <aside className="w-64 border-r min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <nav className="space-y-2">
          {categories.map((item) => (
            <div key={item.id} className="group">
              <a
                href="#"
                className={`flex items-center px-4 py-2 rounded-lg ${
                  selectedCategory === item.title ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-50"
                }`}
                onClick={() => handleCategoryClick(item.title, item.id)}
              >
                <span className="mr-2">{item.image}</span>
                <div>
                  <div>{item.title}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </a>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar

