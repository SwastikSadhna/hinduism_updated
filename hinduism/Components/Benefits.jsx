import Card from "./Card";
const Benefits = () => {
  return (
    <section className="services justify-between p-10 items-center gap-10 flex flex-col h-auto w-full">
      <div className="flex gap-9 w-[65%]">
        <h2 className="w-4/5 tracking-tight text-3xl font-bold">
          Something about Sanatan dharm
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque
          sint error a saepe quas non temporibus blanditiis delectus. Ratione
          eveniet vel doloribus illo totam, accusamus mollitia
        </p>
      </div>
      <div className=" flex gap-9">
        <Card
          title={"title"}
          description={"Description"}
          image={"Description"}
        />
        <Card
          title={"title"}
          description={"Description"}
          image={"Description"}
        />
        <Card
          title={"title"}
          description={"Description"}
          image={"Description"}
        />
      </div>
    </section>
  );
};

export default Benefits;
