"use client"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import API_CONFIG from "../../src/config/api"
import axios from "axios"
import Loading from "../../Pages/Loading"
import ErrorPage from "../../Pages/ErrorPage"

const templeComponents = [
  {
    title: "Garbhagriha",
    imageSrc: "https://www.terragalleria.com/images/india/indi39650.jpeg",
    imageAlt: "Interior of a temple showing ornate stone pillars leading to the sanctum sanctorum",
    description: "The sanctum sanctorum, or inner sanctum, that houses the main deity's idol or image",
  },
  {
    title: "Mandapa",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jain_Temple%2C_Ranakpur_-_panoramio_%282%29.jpg/1200px-Jain_Temple%2C_Ranakpur_-_panoramio_%282%29.jpg",
    imageAlt: "Temple hall with ornate pillars and gathering space",
    description:
      "The pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performances.",
  },
  {
    title: "Shikhara",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Khajuraho3.jpg",
    imageAlt: "Rising tower above the temple sanctuary",
    description:
      "The rising tower above the sanctum sanctorum, symbolizing the sacred mountain peak and marking the most sacred space.",
  },
]

export default function Templepage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get(`${API_CONFIG.baseUrl}/temples`)
      .then((data) => {
        setSlides(data.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setIsLoading(false)
        setError(true)
      })
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <>
      {isLoading || error ? (
        isLoading ? (
          <Loading />
        ) : (
          <ErrorPage code={500} message={"Internal Server Error"} />
        )
      ) : (
        <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
          {/* Main Slider */}
          <div className="relative h-screen overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="absolute top-0 left-0 w-full h-full" style={{ left: `${index * 100}%` }}>
                  <img
                    src={`${API_CONFIG.baseUrl}/${slide.cover_image}`}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 to-red-900/40" />
                  <div className="absolute top-1/3 left-24 max-w-xl text-white">
                    <h1 className="text-6xl font-bold mb-2 drop-shadow-lg">{slide.name}</h1>
                    <h2 className="text-6xl font-bold text-orange-300 mb-6 drop-shadow-lg">{slide.subtitle}</h2>
                    <p className="text-lg text-orange-100 mb-8 font-medium drop-shadow">{slide.location}</p>
                    <div className="flex gap-4">
                      <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <Link to={`/Temple/${slide.id}`} className="text-white font-medium">
                          EXPLORE TEMPLE
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/80 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              <IoChevronBackOutline className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/80 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              <IoChevronForwardOutline className="w-6 h-6" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`relative w-32 h-32 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentSlide === index ? "scale-110 ring-4 ring-orange-400 shadow-xl" : "hover:scale-105 shadow-lg"
                  }`}
                >
                  <img
                    src={`${API_CONFIG.baseUrl}/${slide.cover_image}`}
                    alt={slide.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      currentSlide === index ? "bg-orange-500/20" : "bg-black/30 hover:bg-orange-500/30"
                    } transition-all duration-300`}
                  />
                  <div className="absolute bottom-2 left-2 text-white text-sm">
                    <p className="font-medium drop-shadow">{slide.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Components Section */}
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">Hindu Temple Architecture</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover the sacred elements that make up traditional Hindu temple design, each component carrying
                  deep spiritual significance and architectural beauty.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {templeComponents.map((component, index) => (
                  <div key={index} className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={component.imageSrc || "/placeholder.svg"}
                        alt={component.imageAlt}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-800/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h2 className="text-3xl font-bold text-orange-200 mb-4">{component.title}</h2>
                      <p className="text-white text-lg leading-relaxed drop-shadow">{component.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-orange-800 mb-4">
                  Sacred Architecture & Spiritual Significance
                </h2>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Hindu temple architecture is not merely aesthetic but deeply symbolic, representing the cosmic order
                  and serving as a bridge between the earthly and divine realms. Each element is carefully designed to
                  facilitate spiritual experience and divine connection.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">Sacred Geometry</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Temple designs follow ancient principles of sacred geometry, creating harmonious proportions that
                    resonate with cosmic rhythms and facilitate meditation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">Spiritual Journey</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The temple layout guides devotees on a spiritual journey from the outer world to the inner sanctum,
                    symbolizing the path from material to spiritual consciousness.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">Divine Presence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every architectural element serves to invoke and house divine presence, creating a sacred space
                    where the infinite can be experienced within finite form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
