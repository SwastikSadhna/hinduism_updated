export default function Features() {
    const features = [
      {
        number: "01",
        text: "This is the first step to understanding our process. We ensure complete transparency and clarity in all our dealings with clients.",
      },
      {
        number: "02",
        text: "We work to create an organized flow of work with our clients and deliver them the best possible outcome from our professional expertise.",
      },
      {
        number: "03",
        text: "We strive to maintain transparency in all dealings and ensure our clients receive the best possible outcome from our services.",
      },
    ];
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
                }`}
              >
                <div className="text-4xl font-extrabold text-blue-600 mb-4">{feature.number}</div>
                <p className="text-gray-700 text-lg">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  