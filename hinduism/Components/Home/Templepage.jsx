'use client'

import { useEffect, useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import API_CONFIG from '../../src/config/api';
import axios from 'axios';


const features = [
  {
    number: "Garbhagriha",
    text: "The sanctum sanctorum, or inner sanctum, that houses the main deity's idol or image",
    image: 'https://www.terragalleria.com/images/india/indi39650.jpeg'
  },
  {
    number: "Mandapa",
    text: "The entrance to the temple, which can be a portico or colonnaded hall ",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jain_Temple%2C_Ranakpur_-_panoramio_%282%29.jpg/1200px-Jain_Temple%2C_Ranakpur_-_panoramio_%282%29.jpg'
  },
  {
    number: "Shikhara",
    text: "The tower, spire, or superstructure that sits above the sanctuary and pillared mandapas ",
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Khajuraho3.jpg'
  },
];

export default function Templepage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = new useState([])

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

    <div className="bg-gray-50 py-16">
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
    </div>
    </>
  )
}


