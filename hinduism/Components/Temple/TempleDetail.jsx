// import Image from "next/image"
import { imageDetails } from "../../resources";

const templeSpecialities = [
  {
    image: `${imageDetails.Rathyatra.src}`, // Replace with the actual image path
    title: "Rath Yatra (Chariot Festival)",
    description:
      "An annual festival where grand chariots carry the idols of Lord Jagannath, Balabhadra, and Subhadra.",
  },
  {
    image: `${imageDetails.Rathyatra.src}`, // Replace with the actual image path
    title: "World's Largest Kitchen",
    description:
      "The temple's kitchen can prepare meals for over 100,000 devotees daily, following ancient traditions.",
  },
  {
    image: `${imageDetails.Rathyatra.src}`, // Replace with the actual image path
    title: "Mystical Flag Ritual",
    description:
      "The flag atop the temple flies in the opposite direction of the wind, a phenomenon yet to be explained.",
  },
  {
    image: `${imageDetails.Rathyatra.src}`, // Replace with the actual image path
    title: "No Shadow of the Temple",
    description:
      "At any time of the day, the temple's shadow is not visible, adding to its mystical aura.",
  },
  {
    image:`${imageDetails.Rathyatra.src}`, // Replace with the actual image path
    title: "Sacred Wooden Idols",
    description:
      "The deities are carved from sacred neem wood and are replaced every 12 years during the Nabakalebara ritual.",
  },
  {
    image: `${imageDetails.Rathyatra.src}`, // Replace with the actual image path
    title: "Mahaprasad",
    description:
      "The temple offers Mahaprasad, a divine meal cooked in earthen pots using unique methods.",
  },
];

export function TempleSpecialityGrid() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">Specialities of Jagannath Temple</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templeSpecialities.map((speciality, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md transition-transform hover:-translate-y-1"
            >
              <img
                src={speciality.image}
                alt={speciality.title}
                width={400}
                height={300}
                className="mb-4 rounded-lg object-cover w-full h-[200px]"
              />
              <h3 className="mb-2 text-xl font-semibold">{speciality.title}</h3>
              <p className="text-muted-foreground">{speciality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
