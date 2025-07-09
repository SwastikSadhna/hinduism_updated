import { imageDetails } from "../../resources";
import Card from "./TrimurtiCard";

const TriMurty = () => {
  return (
    <section className="min-h-screen py-10 px-4">

      <div className="relative max-w-7xl mx-auto"> {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-300 rounded-full opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400 rounded-full opacity-10 animate-pulse delay-500" />
      </div>
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 bg-clip-text text-transparent mb-1 py-3">
              त्रिमूर्ति
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight ">Trimurti in Hindu Dharma</h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              <span className="text-orange-600 font-semibold">Sanatan Dharma</span>, known as the eternal way of life,
              represents the world's oldest living religion. It encompasses a rich tapestry of spiritual practices,
              philosophical teachings, and cultural traditions that have been preserved for thousands of years.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center space-y-6 md:space-y-0">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Card
              title="Brahma: The Creator of the Universe"
              description="Brahma, the God of Creation, is the first entity of the Trimurti, responsible for bringing the universe into existence. Known as the architect of reality, he designs and creates all living beings and the world they inhabit."
              image={imageDetails.Brahma.src}
            />
          </div>

          <div className="transform hover:scale-105 transition-transform duration-300 md:mt-8 lg:mt-0">
            <Card
              title="Vishnu: The Preserver of Cosmic Order"
              description="Vishnu, the Preserver, is the sustainer of the universe and the protector of dharma (cosmic law). He ensures harmony and balance in the cosmos through his divine interventions, often incarnating as avatars like Rama and Krishna."
              image={imageDetails.Vishnu.src}
            />
          </div>

          <div className="transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1 md:justify-self-center">
            <Card
              title="Mahesh (Shiva): The Destroyer and Transformer"
              description="Shiva, also known as Mahesh, is the destroyer and transformer within the Trimurti. His role is to dissolve the old, making way for renewal and rebirth, ensuring the eternal cycle of creation and destruction."
              image={imageDetails.Shiv.src}
            />
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-orange-600">
            <div className="w-8 h-0.5 bg-orange-500 rounded" />
            <span className="text-2xl">🕉️</span>
            <div className="w-8 h-0.5 bg-orange-500 rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TriMurty
