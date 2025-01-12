import { imageDetails } from "../../resources";

export default function Features() {
  const features = [
    {
      number: "Explore Hindu Gods and Temples ",
      text: "Dive into the rich mythology of Hinduism and discover the significance of various Hindu gods and their roles in the universe. Learn about iconic temples across India, their history, and their spiritual importance.",
      image: `${imageDetails.Rammandir.src}`
    },
    {
      number: "Sacred Scriptures and Mantras",
      text: "Access the timeless wisdom of sacred texts like the Bhagavad Gita and Vedas. Explore the meanings of powerful shlokas and mantras, along with their relevance to modern life and spiritual practices.",
      image: `${imageDetails.Scrupture.src}`
    },
    {
      number: "Vedic Lifestyle and Devotional Practices",
      text: "Embrace the Vedic way of living with guidance on yoga, meditation, and the ideal daily routine. Listen to soulful bhajans and aartis to enhance your spiritual journey and connection with the divine.",
      image: `${imageDetails.LifeStyle.src}`
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 my-4 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-2 ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
              }`}
              style={{
                backgroundColor: `#FFF7ED`,
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="w-full lg:w-2/3">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-4">
                  {feature.number}
                </p>
                <p className="text-gray-600 text-sm sm:text-md md:text-lg">
                  {feature.text}
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.number}
                  className="w-full h-56 sm:h-64 md:h-72 object-contain rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
