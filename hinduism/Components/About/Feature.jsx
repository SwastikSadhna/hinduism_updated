export default function Features() {
  const features = [
    {
      number: "Explore Hindu Gods and Temples ",
      text: "Dive into the rich mythology of Hinduism and discover the significance of various Hindu gods and their roles in the universe. Learn about iconic temples across India, their history, and their spiritual importance.",
    },
    {
      number: "Sacred Scriptures and Mantras",
      text: "Access the timeless wisdom of sacred texts like the Bhagavad Gita and Vedas. Explore the meanings of powerful shlokas and mantras, along with their relevance to modern life and spiritual practices.",
    },
    {
      number: "Vedic Lifestyle and Devotional Practices",
      text: "Embrace the Vedic way of living with guidance on yoga, meditation, and the ideal daily routine. Listen to soulful bhajans and aartis to enhance your spiritual journey and connection with the divine.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`my-4 p-12 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:-translate-y-2 ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
              }` }
              style={{ backgroundColor: `#FFF7ED` ,
                boxShadow:
                  "0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex w-100">
              <div>
                <p className="text-4xl font-extrabold text-blue-600 mb-4">{feature.number}</p>
              <p className="text-gray-600 text-md">{feature.text}</p>
              </div>
              <div className="text-center w-full">
                add some contant related image here -as background of div or a img tag
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
