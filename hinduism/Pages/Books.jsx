"use client"

import BhaktiCard from "../Components/Bhakti/BhaktiCard"
import axios from "axios"
import API_CONFIG from "../src/config/api"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loading from "./Loading"
import ErrorPage from "./ErrorPage"
import { FaFilter, FaSearch, FaTimes, FaBook } from "react-icons/fa"

export default function Books() {
  const [bhaktiTypes, setBhaktiTypes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filters, setFilters] = useState([])
  const [activeCategory, setActiveCategory] = useState({})
  const [tempFilters, setTempFilters] = useState({})
  const [searchQuery, setSearchQuery] = useState("")

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_CONFIG.baseUrl + "/book/keywords")
      const data = response.data[0]
      const categories = Object.keys(data).map((key) => ({
        name: key,
        options: data[key],
      }))
      setFilters(categories)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleCategoryChange = (option, categoryName) => {
    setTempFilters((prevFilters) => {
      const categoryFilters = prevFilters[categoryName] || []
      const updatedCategoryFilters = categoryFilters.includes(option)
        ? categoryFilters.filter((item) => item !== option)
        : [...categoryFilters, option]
      return {
        ...prevFilters,
        [categoryName]: updatedCategoryFilters,
      }
    })
  }

  const applyFilter = () => {
    setActiveCategory(tempFilters)
    setTempFilters({})
    toggleModal()
  }

  const clearFilters = () => {
    setActiveCategory({})
    setTempFilters({})
  }

  const removeFilter = (option, categoryName) => {
    setActiveCategory((prev) => {
      const updated = { ...prev }
      if (updated[categoryName]) {
        updated[categoryName] = updated[categoryName].filter((item) => item !== option)
        if (updated[categoryName].length === 0) {
          delete updated[categoryName]
        }
      }
      return updated
    })
  }

  useEffect(() => {
    axios
      .get(API_CONFIG.baseUrl + "/book/")
      .then((res) => {
        setIsLoading(false)
        setBhaktiTypes(res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        setIsError(true)
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (Object.keys(activeCategory).length > 0) {
      const query = {}
      for (const key in activeCategory) {
        if (activeCategory[key].length > 0) {
          query[key] = activeCategory[key]
        }
      }
      const url = `${API_CONFIG.baseUrl}/book/filter`
      axios
        .get(url, { params: query })
        .then((res) => setBhaktiTypes(res.data.data))
        .catch((err) => {
          setBhaktiTypes([])
          console.error(err)
        })
    }
  }, [activeCategory])

  const filteredBooks = bhaktiTypes.filter(
    (book) =>
      book.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const activeFiltersCount = Object.values(activeCategory).flat().length

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100 top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 py-1">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Title Section */}
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-md">
                <FaBook className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Books Collection
                </h1>
                <p className="text-gray-600">Explore different forms of devotional content</p>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="flex items-center gap-2 flex-1 lg:flex-initial lg:min-w-96">
              {/* Search Bar */}
              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5 z-40" />
                <input
                  type="text"
                  placeholder="Search books or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-200"
                />
              </div>

              {/* Filter Button */}
              <button
                onClick={toggleModal}
                className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-tl-xl rounded-br-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center gap-2 font-medium"
              >
                <FaFilter className="w-4 h-4" />
                Filter
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="my-2">
              <div className="flex items-center justify-between mb-2">
                <button onClick={clearFilters} className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(activeCategory).map(([category, options]) =>
                  options.map((option) => (
                    <span
                      key={`${category}-${option}`}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-200 rounded-full text-sm text-gray-700 shadow-sm"
                    >
                      <span className="text-orange-600 font-medium">{category}:</span>
                      {option}
                      <button
                        onClick={() => removeFilter(option, category)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <FaTimes className="w-3 h-3" />
                      </button>
                    </span>
                  )),
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Filter Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaFilter className="w-5 h-5" />
                  <h2 className="text-2xl font-bold">Filter Books</h2>
                </div>
                <button onClick={toggleModal} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-2 text-orange-100">Customize your content by applying filters below</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-96">
              {filters.length > 0 ? (
                <div className="space-y-6">
                  {filters.map((category) => (
                    <div key={category.name} className="space-y-3">
                      <h3 className="font-bold text-lg capitalize text-gray-800 border-b border-gray-200 pb-2">
                        {category.name}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {category.options.map((option) => (
                          <label
                            key={option}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={tempFilters[category.name]?.includes(option) || false}
                              onChange={() => handleCategoryChange(option, category.name)}
                              className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                            />
                            <span className="text-sm text-gray-700 font-medium">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-red-500 font-bold text-lg">Sorry, no filters available</div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t">
              <button
                onClick={clearFilters}
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Clear All
              </button>
              <div className="flex gap-3">
                <button
                  onClick={toggleModal}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-br-xl rounded-tl-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={applyFilter}
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-tl-xl rounded-br-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <ErrorPage code={500} message="Something went wrong!" />
        ) : (
          <>
            {/* Results Count */}
            <div className="mb-2 -mt-6">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold text-gray-800">{filteredBooks.length}</span>{" "}
                {filteredBooks.length === 1 ? "book" : "books"} found
              </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((item) => (
                  <Link to={`/Book/${item.id}`} key={item.id} className="block">
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
                <div className="col-span-full">
                  <ErrorPage code={404} message="No Books Found." />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
