import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { useContent } from './ContentContext'
import { 
  FaMusic, 
  FaBook, 
  FaPrayingHands, 
  FaHeart,
  FaHome,
  FaBars,
  FaTimes,
  FaOm,
  FaScroll,
} from 'react-icons/fa'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { activeCategory, setActiveCategory } = useContent()
  const navigate = useNavigate()

  const categories = [
    { id: 'bhajans', name: 'Bhajans', icon: <FaMusic />, path: '/Bhakti/Bhajans' },
    { id: '18 Purans', name: 'Purans', icon: <FaBook />, path: '/Bhakti/Purans' },
    { id: 'duha', name: 'Duha', icon: <FaPrayingHands />, path: '/Bhakti/Duha' },
    { id: 'chhand', name: 'Chhand', icon: <FaHeart />, path: '/Bhakti/Chhand' },
    { id: '33 Koti Devtas', name: '33 Koti Devtas', icon: <FaOm />, path: '/Bhakti/Devtas' },
    { id: 'vedas', name: 'Vedas', icon: <FaScroll />, path: '/Bhakti/Vedas' },
    { id: '108 Upnisads', name: 'Upnisads', icon: <FaBook />, path: '/Bhakti/Upnisads' },
    { id: 'Smritis', name: 'Smritis', icon: <FaPrayingHands />, path: '/Bhakti/Smriti' },
  ]

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id)
    navigate(category.path)
    setIsOpen(false)
  }

  return (
    <>
      {/* Button to toggle sidebar in mobile view - Adjusted positioning */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="top-5 left-4 z-40 p-2 rounded-md text-dark md:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar - Adjusted z-index and positioning */}
      <div className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg w-64 
        transform transition-transform duration-300 ease-in-out z-30
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:h-[calc(100vh-4rem)] md:top-0
      `}>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 mt-2">Categories</h2>
          <nav className="space-y-2">
            {categories.map((category) => (
              <NavLink
                key={category.id}
                to={category.path}
                className={({ isActive }) => `
                  w-full flex items-center gap-3 p-3 rounded-lg transition-colors
                  ${isActive ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'}
                `}
              >
                {category.icon}
                <span>{category.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Go to Home button */}
        <div className=" bottom-0 w-full p-4 border-t">
          <NavLink
            to="/"
            className={({ isActive }) => `
              w-full flex items-center gap-3 p-3 rounded-lg transition-colors
              ${isActive ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'}
            `}
            onClick={() => setIsOpen(false)}
          >
            <FaHome />
            <span>Go Back</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

