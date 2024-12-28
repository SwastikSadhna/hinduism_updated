import CharDhamCard from "./CharDhamCard";
const CharDhamSection = () => {

  const temples = [
    {
      name: "द्वारकाधीश मंदिर",
      nameEn: "Dwarka Temple",
      location: "Dwarka, Gujarat",
      deity: "Deity : Lord Krishna",
      image: "./src/Resources/home/Dhwarika.jpg"
    },
    {
      name: "जगन्नाथ मंदिर",
      nameEn: "Jagannath Temple",
      location: "Puri, Odisha",
      deity: "Deity : Lord Jagannath",
      image: "./src/Resources/home/JagganathPuri.jpeg"
    },
    {
      name: "रामेश्वरम मंदिर",
      nameEn: "Rameshwaram Temple",
      location: "Rameshwaram, Tamil nadu",
      deity: "Deity : Lord Shiv",
      image: "./src/Resources/home/Rameshwaram.jpg"
    },
    {
      name: "बद्रीनाथ मंदिर",
      nameEn: "Badrinath Temple",
      location: "Chamoli, Uttarakhand",
      deity: "Deity : Lord Vishnu",
      image: "./src/Resources/home/Badrinath.jpg"
    }
  ]
  return (
    // <section className="char-dham bg-orange-50 p-10 flex flex-col gap-10 items-center justify-center">
    //   <h2 className="text-3xl font-bold">भारत के चार धाम</h2>
    //   <div className="card-container flex gap-5 items-center justify-center">
    //     <CharDhamCard
    //       src={"./src/Resources/home/Rameshwaram.jpg"}
    //       templeName={"द्वारकाधीश मंदिर"}
    //       loc={"Dwarka, Gujarat"}
    //       otherInfo={"Deity : Lord Krishna"}
    //     />
    //     <CharDhamCard
    //       src={"./src/Resources/home/Rameshwaram.jpg"}
    //       templeName={"जगन्नाथ मंदिर"}
    //       loc={"Puri, Odisha"}
    //       otherInfo={"Deity : Lord Jagannath"}
    //     />
    //     <CharDhamCard
    //       src={"./src/Resources/home/Rameshwaram.jpg"}
    //       templeName={"रामेश्वरम मंदिर"}
    //       loc={"Rameshwaram, Tamil nadu"}
    //       otherInfo={"Deity : Lord Shiv"}
    //     />
    //     <CharDhamCard
    //       src={"./src/Resources/home/Rameshwaram.jpg"}
    //       templeName={"बद्रीनाथ मंदिर"}
    //       loc={"Chamoli, Uttarakhand"}
    //       otherInfo={"Deity : Lord Vishnu"}
    //     />
    //   </div>
    // </section>

    <section className="bg-[#FDF6F0] px-4 py-16 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Char Dham of India
        </h1>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            The Char Dham Yatra is one of the most sacred and significant pilgrimages in Hinduism. This journey encompasses four major temples located in the four cardinal directions of India, believed to be the path to spiritual elevation and ultimate salvation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
            <div className="bg-white/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Spiritual Significance</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Path to salvation (Moksha)</li>
                <li>• Liberation from sins</li>
                <li>• Self-purification and enlightenment</li>
                <li>• Representation of the four Vedas</li>
              </ul>
            </div>

            <div className="bg-white/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">Pilgrimage Sequence</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• East: Jagannath Puri</li>
                <li>• South: Rameshwaram</li>
                <li>• West: Dwarka</li>
                <li>• North: Badrinath</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            The journey to these four Dhams not only provides spiritual benefits but also offers an experience of India's rich cultural heritage. Each Dham is renowned for its unique architecture, traditions, and spiritual significance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {temples.map((temple, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={temple.image}
                  alt={temple.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-bold mb-1 text-gray-900">
                  {temple.name}
                </h2>
                <h3 className="text-lg mb-2 text-gray-700">
                  {temple.nameEn}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  {temple.location}
                </p>
                <p className="text-gray-600 text-sm">
                  {temple.deity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharDhamSection;
