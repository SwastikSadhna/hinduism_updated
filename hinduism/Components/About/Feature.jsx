import { imageDetails } from "../../resources";

export default function Features() {
  const features = [
    {
      number: "Why is VedicPulse needed today?",
      text: "In today’s fast-paced world, VedicPulse helps preserve and promote Hindu traditions and spirituality. It offers a space to reconnect with ancient wisdom, explore sacred texts, and incorporate timeless values into daily life, bridging tradition and modernity.",
      image: `${imageDetails.about1.src}`
    },
    {
      number: "What can I find on VedicPulse?",
      text: "VedicPulse offers a wealth of knowledge about Hindu gods, sacred scriptures like the Vedas and Puranas, melodious bhajans, and powerful shlokas. It is a platform to explore Hinduism’s spiritual teachings, cultural heritage, and timeless traditions, helping users connect deeply with Sanatan Dharma.",
      image: `${imageDetails.about2.src}`
    },
    {
      number: "What makes VedicPulse unique compared to other platforms?",
      text: "VedicPulse stands out by offering a comprehensive blend of knowledge about Hindu gods, scriptures, bhajans, shlokas, and cultural practices in one place. It provides an authentic and accessible way for users to explore and connect with the rich traditions of Hindu Dharma.",
      image: `${imageDetails.about3.src}`
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 my-4 p-8 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 ${
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
