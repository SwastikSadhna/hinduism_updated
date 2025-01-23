// import Image from "next/image"
import { imageDetails } from "../../resources"

export function Header() {
  return (
    <header className="relative w-full">
      {/* Black box with temple details */}
      <div className="absolute left-5 top-5 z-10 bg-black p-4 text-white md:p-6">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">Temple Name</h1>
        <p className="mt-1 text-sm text-gray-300 md:text-base">Location</p>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4">
        <div className="relative pt-20">
          <img
            src={imageDetails.TempleJagganath.src}
            alt="Temple"
            width={1200}
            height={500}
            className="h-[400px] w-full object-cover md:h-[500px]"
            priority
          />
        </div>
      </div>

      {/* Full width orange line */}
      <div className="h-2 w-full bg-orange-500" />
    </header>
  )
}

