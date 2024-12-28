import CharDhamCard from "./CharDhamCard";
import { imageDetails } from "../resources";
const CharDhamSection = () => {
  const temples = [
    {
      name: "Dwarka Mandir",
      location: "Dwarka, Gujarat",
      deity: "Lord Krishna",
      imageUrl: imageDetails.Dhwarika.src, // Replace with the actual URL of the first image
    },
    {
      name: "Rameshwaram Mandir",
      location: "Rameshwaram, Tamil Nadu",
      deity: "Lord shiva",
      imageUrl: imageDetails.Rameshwaram.src, // Replace with the actual URL of the second image
    },
    {
      name: "Jagannath Puri Mandir",
      location: "Puri, Odisha",
      deity: "Lord jaggannath",
      imageUrl: imageDetails.Badrinath.src, // Replace with the actual URL of the third image
    },
    {
      name: "Badrinath Mandir",
      location: "Chamoli,Badrinath, Uttarakhand",
      deity: "Lord Vishnu",
      imageUrl: imageDetails.Jagganathpuri.src, // Replace with the actual URL of the fourth image
    },
  ];
  return (
    <section className="char-dham bg-orange-50 p-10 flex flex-col gap-10 items-center justify-center">
      <h2 className="text-3xl font-bold">Char Dham</h2>
      <div className="card-container flex gap-5 items-center justify-center">
        {temples.map((temple, i) => {
          return (
            <CharDhamCard
              key={i}
              src={temple.imageUrl}
              templeName={temple.name}
              loc={temple.location}
              otherInfo={temple.deity}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CharDhamSection;
