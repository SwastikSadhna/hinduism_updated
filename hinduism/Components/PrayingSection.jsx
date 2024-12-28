import CharDhamCard from "./CharDhamCard";
const PrayingSection = () => {
  return (
    <section className="p-10">
      <h1>Praying Concept depends on Timezone.</h1>
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

export default PrayingSection;
