"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Button from "./Button"
import { imageDetails } from "../../resources"

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
    <div className="flex flex-col items-center w-full">
      {/* Background Image */}
      <div 
        className="w-full h-[40vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url(${imageDetails.AboutBg.src})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(3, 0, 0, 0.54)"
        }}
      />

      {/* Logo Section */}
      <div 
        ref={logoRef}
        className="relative -mt-20 mb-8"
      >
        <div className="w-40 h-40 relative">
          <div className="absolute inset-0 bg-red-500 rounded-full opacity-10 blur-3xl" />
          <img
            src={imageDetails.logo.src}
            alt="Om Symbol"
            className="w-full h-full rounded-circle object-contain relative z-10"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-bold mb-8 text-red-600"
        >
          About Us
        </h1>
        <div ref={contentRef} className="space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            Hindutva is a platform dedicated to celebrating and preserving the
            rich spiritual and cultural heritage of Sanatan Hindu Dharma. Our
            mission is to make ancient knowledge accessible and engaging by
            offering insights into Hindu gods, temples, sacred scriptures like
            the Bhagavad Gita, meaningful shlokas, and mantras. We also explore
            Vedic teachings, daily routines rooted in Hindu philosophy, and
            devotional practices such as bhajans and aartis. With features like
            3D avatars of Hindu deities and in-depth knowledge of the Vedas,
            Hindutva aims to connect individuals with the timeless wisdom of
            Sanatan Dharma while embracing modern technology to inspire and
            educate.
          </p>
          <Button className="mt-6">LEARN MORE</Button>
        </div>
      </div>
    </div>
  )
}
