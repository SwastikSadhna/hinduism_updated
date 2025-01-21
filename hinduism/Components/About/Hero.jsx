"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Button from "./Button"
import { imageDetails } from "../../resources"
import { FaAdversal, FaArrowDown, FaMusic } from "react-icons/fa"

export default function Hero() {
  const logoRef = useRef(null)
  const textRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // GSAP animation sequence
    const timeline = gsap.timeline()

    // Animate the logo: Scale from center
    timeline.fromTo(
      logoRef.current,
      { 
        scale: 0, 
        opacity: 0,
        rotation: -180 
      },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0,
        duration: 1.5, 
        ease: "back.out(1.7)" 
      }
    )

    // Animate the site name
    timeline.fromTo(
      textRef.current,
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out" 
      },
      "-=0.5"
    )

    // Animate the content
    timeline.fromTo(
      contentRef.current,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out" 
      },
      "-=0.7"
    )
  }, [])

  return (
    <div className="flex flex-col items-center w-full pb-5">
      {/* Background Image */}
      <div 
        className="w-full h-[25vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url(${imageDetails.AboutBg.src})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(3, 0, 0, 0.54)"
        }}
      />

      {/* Logo Section */}
      <div 
        ref={logoRef}
        className="relative -mt-10"
      >
        <div className="w-[80px] h-[80px] relative">
          <div className="absolute inset-0 bg-red-500 rounded-full opacity-10 blur-3xl" />
          <img
            src={imageDetails.logo.src}
            alt="Om Symbol"
            className="w-full h-full rounded-circle object-contain relative z-10"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto px-4 text-center">
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-bold mb-8 text-red-600"
        >
          About Us
        </h1>
        <div ref={contentRef} className="space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
          VedicPulse is your gateway to exploring the profound and timeless heritage of Hinduism. This platform serves as a treasure trove of knowledge about the spiritual, cultural, and historical essence of Sanatan Dharma. Delve into the rich mythology of Hindu gods and goddesses, uncover the wisdom of ancient scriptures like the Vedas, Upanishads, and Puranas, and connect with the inspiring tales and teachings they hold. Immerse yourself in the melodious bhajans and sacred shlokas that have been passed down through generations, and rediscover the spiritual practices that form the foundation of Hinduism. At VedicPulse, we strive to provide an authentic and enriching experience that connects you to the core values, beliefs, and traditions of Hindu Dharma.
          </p>
          <p className="w-full flex justify-center pt-3"><FaArrowDown className="text-6xl text-blue-500 bg-gray-200 rounded-full p-3 text-center" /></p>
        </div>
      </div>
    </div>
  )
}
