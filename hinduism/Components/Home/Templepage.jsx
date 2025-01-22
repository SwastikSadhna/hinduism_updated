'use client'

import { useEffect, useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import API_CONFIG from '../../src/config/api';
import axios from 'axios';


// const features = [
//   {
//     number: "Garbhagriha",
//     text: "The sanctum sanctorum, or inner sanctum, that houses the main deity's idol or image",
//     image: 'https://www.terragalleria.com/images/india/indi39650.jpeg'
//   },
//   {
//     number: "Mandapa",
//     text: "The entrance to the temple, which can be a portico or colonnaded hall ",
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jain_Temple%2C_Ranakpur_-_panoramio_%282%29.jpg/1200px-Jain_Temple%2C_Ranakpur_-_panoramio_%282%29.jpg'
//   },
//   {
//     number: "Shikhara",
//     text: "The tower, spire, or superstructure that sits above the sanctuary and pillared mandapas ",
//     image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Khajuraho3.jpg'
//   },
// ];

const templeComponents = [
  {
    title: "Garbhagriha",
    imageSrc: "https://www.terragalleria.com/images/india/indi39650.jpeg",
    imageAlt: "Interior of a temple showing ornate stone pillars leading to the sanctum sanctorum",
    description: "The sanctum sanctorum, or inner sanctum, that houses the main deity's idol or image",
  },
  {
    title: "Mandapa",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jain_Temple%2C_Ranakpur_-_panoramio_%282%29.jpg/1200px-Jain_Temple%2C_Ranakpur_-_panoramio_%282%29.jpg",
    imageAlt: "Temple hall with ornate pillars and gathering space",
    description:
      "The pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performances The pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performancesThe pillared hall or pavilion in front of the garbhagriha, used for gatherings, rituals, and dance performances",
  },
  {
    title: "Shikhara",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Khajuraho3.jpg",
    imageAlt: "Rising tower above the temple sanctuary",
    description:
      "The rising tower above the sanctum sanctorum, symbolizing the sacred mountain peak and marking the most sacred space",
  },
]

export default function Templepage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState([])
  const [openModal, setOpenModal] = useState(null)

  useEffect(() => {
    axios.get(`${API_CONFIG.baseUrl}/temple/all`).then((data) => {
      console.log("temples fetched")
      setSlides(data.data.data)
    }).catch((err) => {
      console.log(err)
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
    
    <div className="relative min-h-screen bg-gray-900">
      {/* Navigation */}

      {/* Main Slider */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute top-0 left-0 w-full h-full"
              style={{ left: `${index * 100}%` }}
            >
              <img
                src={API_CONFIG.baseUrl+slide.cover_image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute top-1/3 left-24 max-w-xl text-white">
                <h1 className="text-6xl font-bold mb-2">{slide.name}</h1>
                <h2 className="text-6xl font-bold text-orange-500 mb-6">{slide.subtitle}</h2>
                <p className="text-lg text-white/80 mb-8 font-bold">
                  {slide.location}
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors">
                    SEE MORE
                  </button>
                  {/* <button className="px-8 py-3 border border-white text-white rounded hover:bg-white/10 transition-colors">
                    SUBSCRIBE
                  </button> 
                  
                  Garbhagriha 
The sanctum sanctorum, or inner sanctum, that houses the main deity's idol or image
The center of ceremonial attention
Mandapa
The entrance to the temple, which can be a portico or colonnaded hall 
The pathway to the garbhagriha, where worshippers gather for darśana 
Shikhara
The tower, spire, or superstructure that sits above the sanctuary and pillared mandapas 
A characteristic feature of North Indian Hindu temples 
In Nagara style architecture, the shikhara is tall and pyramidal, and topped by a bulbous finial called a kalasha 
Kalasha 
The bulbous finial that tops the shikhara in Nagara style architecture*/}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <IoChevronBackOutline className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <IoChevronForwardOutline className="w-6 h-6" />
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative w-32 h-32 rounded-lg overflow-hidden transition-transform ${currentSlide === index ? 'scale-110 ring-2 ring-white' : 'hover:scale-105'
                }`}
            >
              <img
                src={API_CONFIG.baseUrl+slide.cover_image}
                alt={slide.name}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-black/30 ${currentSlide === index ? 'bg-opacity-0' : ''}`}
              />
              <div className="absolute bottom-2 left-2 text-white text-sm">
                <p className="font-medium">{slide.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-col items-center gap-8 my-4 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-2 ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
              }`}
              style={{
                backgroundColor: `#FFF7ED`,
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="w-full lg:w-2/3">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-4 text-center">
                  {feature.number}
                </p>
                
              </div>
              <div className="w-full lg:w-1/3 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.number}
                  className="w-full h-56 sm:h-64 md:h-72 object-contain rounded"
                />
              </div>
              <div className='w-full'>
              <p className="text-gray-600 text-sm sm:text-md md:text-lg text-center">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
<div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Exploring Hindu Temple Architecture</h1>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {templeComponents.map((component, index) => (
          <div
            key={index}
            className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => setOpenModal(index)}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={component.imageSrc || "/placeholder.svg"}
                alt={component.imageAlt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
            {/* Content */}
            <div className="relative h-full flex items-center justify-center p-6">
              <h2 className="text-4xl font-bold text-white text-center tracking-wider">{component.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenModal(null)
          }}
        >
          {/* Modal Container */}
          <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(null)}
              className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 p-2 rounded-full"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative w-full h-[calc(100vh-12rem)] max-w-7xl mx-auto">
              <img
                src={templeComponents[openModal].imageSrc || "/placeholder.svg"}
                alt={templeComponents[openModal].imageAlt}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Description Panel */}
            <div className="bg-white/90 backdrop-blur-sm w-full max-w-3xl mx-auto mt-4 p-6 rounded-xl">
              <h2 className="text-3xl font-bold text-blue-800 mb-2">{templeComponents[openModal].title}</h2>
              <p className="text-gray-800 text-lg leading-relaxed">{templeComponents[openModal].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}


