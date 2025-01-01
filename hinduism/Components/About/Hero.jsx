import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "./Button";
import { imageDetails } from "../../resources";

export default function Hero() {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // GSAP animation sequence
    const timeline = gsap.timeline();

    // Animate the logo: Scale in and move to the left
    timeline
      .fromTo(
        logoRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
      )
      .to(logoRef.current, { x: "-40%", duration: 1, ease: "power2.out" });

    // Animate the site name
    timeline.fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=0.5" // Overlap with logo animation
    );

    // Animate the rest of the content
    timeline.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Logo Section */}
      <div className="w-full md:w-1/2 relative mt-14">
        <div ref={logoRef} className="aspect-square max-w-[400px] mx-auto">
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div
            className="relative w-full h-full bg-contain bg-center bg-no-repeat rounded-full"
            style={{ backgroundImage: `url(${imageDetails.logo.src})` }}
          ></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left" ref={contentRef}>
        <h1
          ref={textRef}
          className="text-5xl md:text-6xl font-bold mb-4 text-red-600"
        >
          About SANATAN
        </h1>
        <p className="text-gray-600 mb-6 p-3 text-md">
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
        <Button>LEARN MORE</Button>
      </div>
    </div>
  );
}
