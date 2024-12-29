import Card from "./Card";
import { imageDetails } from "../resources";
const TriMurty = () => {
  return (
    <section className="services justify-between p-10 items-center gap-10 flex flex-col h-auto w-full">
      <div className="flex flex-column gap-9 w-[85%] items-center">
        <h2 className="w-4/5 tracking-tight text-4xl font-bold text-center">
          Something about Sanatan dharm
        </h2>
        <p>
        Sanatan Dharma, known as the eternal way of life, represents the world's oldest living religion. It encompasses a rich tapestry of spiritual practices, philosophical teachings, and cultural traditions that have been preserved for thousands of years.
        </p>
      </div>
      <div className="flex gap-9">
        <Card
          title={"Brahma: The Creator of the Universe"}
          description={
            "Brahma, the God of Creation, is the first entity of the Trimurti, responsible for bringing the universe into existence. Known as the architect of reality, he designs and creates all living beings and the world they inhabit."
          }
          image={imageDetails.Brahma.src}
        />
        <Card
          title={"Vishnu: The Preserver of Cosmic Order"}
          description={
            "Vishnu, the Preserver, is the sustainer of the universe and the protector of dharma (cosmic law). He ensures harmony and balance in the cosmos through his divine interventions, often incarnating as avatars like Rama and Krishna."
          }
          image={imageDetails.Vishnu.src}
        />
        <Card
          title={"Mahesh (Shiva): The Destroyer and Transformer"}
          description={
            "Shiva, also known as Mahesh, is the destroyer and transformer within the Trimurti. His role is to dissolve the old, making way for renewal and rebirth, ensuring the eternal cycle of creation and destruction. "
          }
          image={imageDetails.Shiv.src}
        />
      </div>
    </section>
  );
};

export default TriMurty;
