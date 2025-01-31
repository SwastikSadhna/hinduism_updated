import { imageDetails } from "../../resources"

export function Header() {
  return (
    <header className="relative w-full bg-white mb-10">
      {/* Top small text */}
      <div className="container mx-auto px-8">
        <p className="text-gray-400 text-sm pt-4">General Practitioner</p>
      </div>

      {/* Main content section */}
      <div className="relative">
        {/* Text content */}
        <div className="container mx-auto px-8">
          <div className="pt-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Temple Name</h1>
            <p className="text-xl text-gray-600">Location</p>
          </div>
        </div>

        {/* Image and blue bottom section */}
        <div className="relative mt-8">
          {/* Blue bottom section */}
          <div className="absolute bottom-0 w-full h-24 bg-[linear-gradient(180deg,_rgba(250,250,250,1)_4%,_rgba(196,201,204,1)_47%,_rgba(255,119,34,1)_100%)]" />

          {/* Container for image */}
          <div className="container mx-auto px-4">
            <div className="relative w-[90%] ml-auto">
              {/* Temple image that overlaps the blue section */}
              <div className="aspect-w-16 aspect-h-9 relative bottom-8 z-10 -mb-16">
                <img
                  src={imageDetails.TempleJagganath.src || "/placeholder.svg"}
                  alt="Temple"
                  className="object-cover object-center w-[90%] h-full rounded-lg"
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

