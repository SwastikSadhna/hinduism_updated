



import { useEffect, useState } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
 

// import { ChevronRight } from 'lucide-react'

export default function CharDhamSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  useEffect(()=>{
     gsap.to('#chardham',{
      scrollTrigger:{
        trigger:'#chardham',
        start:'top center',
        end:'top top',
      },
     
     })
  },[])
  
  const temples = [
    {
      image: "./src/Resources/home/Dhwarika.jpg",
      title: "द्वारकाधीश मंदिर",
      name: "Dwarka Temple",
      location: "Dwarka, Gujarat",
      deity: "Deity - Lord Krishna"
    },
    {
      image: "./src/Resources/home/JagganathPuri.jpeg", 
      title: "जगन्नाथ मंदिर",
      name: "Jagannath Temple",
      location: "Puri, Odisha",
      deity: "Deity - Lord Jagannath"
    },
    {
      image: "./src/Resources/home/Rameshwaram.jpg",
      title: "रामेश्वरम् मंदिर",
      name: "Rameshwaram Temple",
      location: "Rameshwaram, Tamil Nadu",
      deity: "Deity - Lord Shiv"
    },
    {
      image: "./src/Resources/home/Badrinath.jpg",
      title: "बद्रीनाथ मंदिर",
      name: "Badrinath Temple",
      location: "Chamoli, Uttarakhand",
      deity: "Deity - Lord Vishnu"
    }
  ]

  return (
    <div className="min-h-screen relative" id='chardham'>
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
          {/* Timeline }
          <div className="hidden md:flex flex-col items-center">
            <div className="w-1 bg-white/20 h-full relative">
              {[0, 1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`absolute w-4 h-4 rounded-full -left-1.5 transition-all duration-300 ${
                    step * 25 <= (activeSlide / temples.length) * 100
                      ? 'bg-white'
                      : 'bg-white/30'
                  }`}
                  style={{ top: `${step * 25}%` }}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF7722] to-[#FFD700] text-transparent bg-clip-text animate-fade-in">
              Sacred Journey of
              <br />
              Char Dham Yatra
            </h1>

            <p className="text-lg text-orange-200 max-w-2xl mb-8 animate-fade-in-delay">
              Need spiritual guidance on your sacred journey? Look no further – The Char Dham Yatra encompasses four major temples in the cardinal directions of India, offering a path to spiritual elevation and ultimate salvation.
            </p>

            <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full  transition-all duration-300 mb-16 animate-fade-in-delay-2">
              Explore
            </button>

            {/* Image Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-10xl">
              {temples.map((temple, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden group cursor-pointer"
                  
                >
                  <img
                    src={temple.image}
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

             {/* Carousel Controls */}
            {/* <div className="flex justify-center gap-2">
              {temples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

    </div>
  )
}





