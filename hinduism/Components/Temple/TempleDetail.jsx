import { imageDetails } from "../../resources"
import { useMemo } from "react"

const templeSpecialities = [
  {
    resource: imageDetails.Rathyatra.src,
    title: "Rath Yatra (Chariot Festival)",
    description: "An annual festival where grand chariots carry the idols of Lord Jagannath, Balabhadra, and Subhadra.",
  },
  {
    resource: "https://example.com/world-largest-kitchen.mp4",
    title: "World's Largest Kitchen",
    description:
      "The temple's kitchen can prepare meals for over 100,000 devotees daily, following ancient traditions.",
  },
  {
    resource: null,
    title: "Mystical Flag Ritual",
    description:
      "The flag atop the temple flies in the opposite direction of the wind, a phenomenon yet to be explained.",
  },
  {
    resource: imageDetails.Rathyatra.src,
    title: "No Shadow of the Temple",
    description: "At any time of the day, the temple's shadow is not visible, adding to its mystical aura.",
  },
  {
    resource: "https://example.com/sacred-wooden-idols.mp4",
    title: "Sacred Wooden Idols",
    description:
      "The deities are carved from sacred neem wood and are replaced every 12 years during the Nabakalebara ritual.",
  },
  {
    resource: null,
    title: "Mahaprasad",
    description: "The temple offers Mahaprasad, a divine meal cooked in earthen pots using unique methods.",
  },
]

const isImage = (url) => /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
const isVideo = (url) => /\.(mp4|webm|ogg)$/.test(url)

export function TempleSpecialityGrid() {
  const sortedSpecialities = useMemo(() => {
    return [...templeSpecialities].sort((a, b) => {
      if (a.resource && !b.resource) return -1
      if (!a.resource && b.resource) return 1
      return 0
    })
  }, [])

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className=" text-center py-8 px-6 rounded-lg  mb-12">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Temple Specialities</h2>
  <p className="text-gray-600 leading-relaxed">
    Discover the unique and fascinating aspects of this sacred temple, from grand festivals and ancient rituals 
    to architectural marvels and culinary traditions. Each speciality carries deep cultural and spiritual significance, 
    offering insights into the temple's rich heritage. Whether it's the majestic chariot procession, the world's largest 
    temple kitchen, or mystical phenomena defying explanation, these features make the temple a truly remarkable place 
    of devotion and wonder.
  </p>
</div>

        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sortedSpecialities.map((speciality, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {speciality.resource && (
                <div className="relative h-48 overflow-hidden">
                  {isImage(speciality.resource) && (
                    <img
                      src={speciality.resource || "/placeholder.svg"}
                      alt={speciality.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                  {isVideo(speciality.resource) && (
                    <video
                      src={speciality.resource}
                      className="object-cover w-full h-full"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </div>
              )}
              <div className={`p-6 ${!speciality.resource ? "h-full flex flex-col justify-center" : ""}`}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{speciality.title}</h3>
                <p className="text-gray-600">{speciality.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

