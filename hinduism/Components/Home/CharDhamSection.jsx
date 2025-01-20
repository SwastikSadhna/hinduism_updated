import { gsap } from 'gsap'
import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import API_CONFIG from '../../src/config/api';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger)
export default function CharDhamSection() {

  const [temples, setTemples] = new useState([])
  useEffect(() => {

    gsap.to('.card-animate', { opacity: 0, y: -100 })

    gsap.fromTo('.animate', {
      opacity: 0,
      x: -100,
      y: 100
    }, {
      scrollTrigger: {
        trigger: '.animate',
        start: 'top 55%',
        end: 'top 25%',
      },
      y: 0,
      x: 0,
      opacity: 1,
      onComplete: () => {
        gsap.to('.card-btn-animate', { opacity: 1, duration: 0.2 })
        gsap.to('.card-animate', { y: 0, opacity: 1, stagger: 0.25, delay: 0.2 })
      }
    });

  }, []);

  useEffect(() => {
    axios.get(`${API_CONFIG.baseUrl}/temple/chardham`).then((result) => {
      console.log("Data Fetched");
      setTemples(result.data)
    })
  },[])

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="./src/Resources/others/slide image (3).jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex gap-12">


          {/* Main Content */}
          <div className="flex-1">
            <h1 className=" text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r animate from-[#FF7722] to-[#FFD700] text-transparent bg-clip-text ">
              Sacred Journey of
              <br />
              Char Dham Yatra
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mb-8 animate">
              Need spiritual guidance on your sacred journey? Look no further – The Char Dham Yatra encompasses four major temples in the cardinal directions of India, offering a path to spiritual elevation and ultimate salvation.
            </p>

            <Link to="/Templepage">
              <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full card-btn-animate transition-all duration-300 mb-16" style={{ opacity: 0 }}>
                Explore
              </button>
            </Link>

            {/* Image Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-10xl">
              {temples.map((temple, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden group cursor-pointer card-animate"

                >
                  <img
                    src={API_CONFIG.baseUrl+temple.cover_image}
                    alt={temple.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{temple.name}</h3>
                    <p className="text-sm text-white/80">{temple.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





