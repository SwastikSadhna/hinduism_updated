// export default function CharDham() {  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 p-8">
//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div className="space-y-8">
//           <h1 className="text-5xl md:text-6xl font-serif leading-tight">
//             Char Dham of{" "}
//             <span className="italic font-bold block">
//               India
//               <span className="inline-flex ml-3">
//                 <span className="h-4 w-4 rounded-full bg-orange-400"></span>
//                 <span className="h-4 w-4 rounded-full bg-blue-600 -ml-2"></span>
//               </span>
//             </span>
//           </h1>
          
//           <p className="text-gray-600 text-lg leading-relaxed">
//             The Char Dham Yatra encompasses four sacred temples in the cardinal directions of India, offering spiritual elevation and ultimate salvation.
//           </p>

//           <div className="flex gap-4">
//             <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
//               Plan Your Yatra
//             </button>
//             <button className="px-6 py-3 border-2 border-gray-300 rounded-full hover:border-blue-600 transition">
//               Learn More
//             </button>
//           </div>

//           <div className="flex items-center gap-4 pt-4">
//             <img
//               src="/temple-icon.jpg"
//               alt="Temple Icon"
//               className="w-12 h-12 rounded-full"
//             />
//             <div>
//               <h3 className="font-medium">Sacred Pilgrimage Route</h3>
//               <p className="text-gray-500">Four Divine Destinations</p>
//             </div>
//             <span className="ml-auto px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
//               Sacred Journey
//             </span>
//           </div>
//         </div>

//         {/* Right Side Cards */}
//         <div className="grid gap-4">
//           {/* Pilgrimage Route Card */}
//           <div className="bg-orange-100 p-6 rounded-3xl">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold">Pilgrimage Sequence</h3>
//               <span className="text-orange-600 text-sm">Cardinal Directions</span>
//             </div>
//             <div className="grid grid-cols-4 gap-2 items-end h-40">
//               <div className="bg-orange-300 h-3/4 rounded"></div>
//               <div className="bg-orange-300 h-full rounded"></div>
//               <div className="bg-orange-300 h-2/3 rounded"></div>
//               <div className="bg-orange-300 h-4/5 rounded"></div>
//             </div>
//             <div className="grid grid-cols-4 gap-2 mt-2 text-xs text-gray-600">
//               <span>East</span>
//               <span>South</span>
//               <span>West</span>
//               <span>North</span>
//             </div>
//           </div>

//           {/* Quick Info Card */}
//           <div className="bg-purple-100 p-6 rounded-3xl">
//             <div className="flex items-center gap-2 mb-2">
//               <span className="text-lg font-semibold">Key Highlights</span>
//             </div>
//             <p className="text-gray-600 text-sm mb-4">
//               Spiritual significance, ancient architecture, and divine blessings at each temple.
//             </p>
//             <div className="flex gap-3">
//               <span className="px-3 py-1 bg-purple-200 rounded-full text-sm">4 Temples</span>
//               <span className="px-3 py-1 bg-purple-200 rounded-full text-sm">4 Directions</span>
//             </div>
//           </div>

//           {/* Temple Info Card */}
//           <div className="bg-blue-100 p-6 rounded-3xl">
//             <div className="flex items-center gap-4">
//               <img
//                 src="/temple-preview.jpg"
//                 alt="Temple Preview"
//                 className="w-16 h-16 rounded-xl object-cover"
//               />
//               <div>
//                 <h3 className="font-semibold">Divine Destinations</h3>
//                 <p className="text-gray-600">Ancient temples of India</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div className="border-t pt-8">
//           <h3 className="text-4xl font-bold mb-2">4+</h3>
//           <p className="text-gray-600">Sacred temples in cardinal directions</p>
//         </div>
//         <div className="border-t pt-8">
//           <h3 className="text-4xl font-bold mb-2">1000+</h3>
//           <p className="text-gray-600">Years of spiritual history</p>
//         </div>
//         <div className="border-t pt-8">
//           <h3 className="text-4xl font-bold mb-2">Millions</h3>
//           <p className="text-gray-600">Yearly pilgrims and devotees</p>
//         </div>
//         <div className="border-t pt-8">
//           <h3 className="text-4xl font-bold mb-2">4</h3>
//           <p className="text-gray-600">Cardinal directions of India</p>
//         </div>
//       </div>

//       {/* Temple Cards Section */}
//       <div className="max-w-7xl mx-auto mt-20">
//         <h2 className="text-3xl font-bold mb-12 text-center">Sacred Temples of Char Dham</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Dwarka Temple Card */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <div className="relative">
//               <img
//                 src="/dwarka-temple.jpg"
//                 alt="Dwarka Temple"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-1">द्वारकाधीश मंदिर</h3>
//               <h4 className="text-lg text-gray-700 mb-2">Dwarka Temple</h4>
//               <div className="space-y-2">
//                 <p className="text-gray-600">Dwarka, Gujarat</p>
//                 <p className="text-gray-500 text-sm">Deity - Lord Krishna</p>
//               </div>
//             </div>
//           </div>

//           {/* Jagannath Temple Card */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <div className="relative">
//               <img
//                 src="/jagannath-temple.jpg"
//                 alt="Jagannath Temple"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-1">जगन्नाथ मंदिर</h3>
//               <h4 className="text-lg text-gray-700 mb-2">Jagannath Temple</h4>
//               <div className="space-y-2">
//                 <p className="text-gray-600">Puri, Odisha</p>
//                 <p className="text-gray-500 text-sm">Deity - Lord Jagannath</p>
//               </div>
//             </div>
//           </div>

//           {/* Rameshwaram Temple Card */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <div className="relative">
//               <img
//                 src="/rameshwaram-temple.jpg"
//                 alt="Rameshwaram Temple"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-1">रामेश्वरम् मंदिर</h3>
//               <h4 className="text-lg text-gray-700 mb-2">Rameshwaram Temple</h4>
//               <div className="space-y-2">
//                 <p className="text-gray-600">Rameshwaram, Tamil Nadu</p>
//                 <p className="text-gray-500 text-sm">Deity - Lord Shiv</p>
//               </div>
//             </div>
//           </div>

//           {/* Badrinath Temple Card */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <div className="relative">
//               <img
//                 src="/badrinath-temple.jpg"
//                 alt="Badrinath Temple"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-1">बद्रीनाथ मंदिर</h3>
//               <h4 className="text-lg text-gray-700 mb-2">Badrinath Temple</h4>
//               <div className="space-y-2">
//                 <p className="text-gray-600">Chamoli, Uttarakhand</p>
//                 <p className="text-gray-500 text-sm">Deity - Lord Vishnu</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
// import { ChevronRight } from 'lucide-react'

export default function CharDhamSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  
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
          {/* Timeline */}
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sacred Journey of
              <br />
              Char Dham Yatra
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mb-8">
              Need spiritual guidance on your sacred journey? Look no further – The Char Dham Yatra encompasses four major temples in the cardinal directions of India, offering a path to spiritual elevation and ultimate salvation.
            </p>

            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 mb-16">
              Explore
            </button>

            {/* Image Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {temples.slice(activeSlide, activeSlide + 3).map((temple, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setActiveSlide((activeSlide + 1) % temples.length)}
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
            <div className="flex justify-center gap-2">
              {temples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeSlide ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



