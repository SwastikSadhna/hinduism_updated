import CharDhamCard from "./CharDhamCard";
const CharDhamSection = () => {
  return (
    <section className="char-dham bg-orange-50 p-10 flex flex-col gap-10 items-center justify-center">
      <h2 className="text-3xl font-bold">भारत के चार धाम</h2>
      <div className="card-container flex gap-5 items-center justify-center">
        <CharDhamCard
          src={"./src/IMG/Daily-Routine/sunrise-1695469_1280.jpg"}
          templeName={"द्वारकाधीश मंदिर"}
          loc={"Rameshwaram, Tamil nadu"}
          otherInfo={"Deity : Lord Krishnas"}
        />
        <CharDhamCard
          src={"./src/IMG/Daily-Routine/sunrise-1695469_1280.jpg"}
          templeName={"द्वारकाधीश मंदिर"}
          loc={"Rameshwaram, Tamil nadu"}
          otherInfo={"Deity : Lord Krishnas"}
        />
        <CharDhamCard
          src={"./src/IMG/Daily-Routine/sunrise-1695469_1280.jpg"}
          templeName={"द्वारकाधीश मंदिर"}
          loc={"Rameshwaram, Tamil nadu"}
          otherInfo={"Deity : Lord Krishnas"}
        />
        <CharDhamCard
          src={"./src/IMG/Daily-Routine/sunrise-1695469_1280.jpg"}
          templeName={"द्वारकाधीश मंदिर"}
          loc={"Rameshwaram, Tamil nadu"}
          otherInfo={"Deity : Lord Krishnas"}
        />
      </div>
    </section>
  );
};

export default CharDhamSection;
