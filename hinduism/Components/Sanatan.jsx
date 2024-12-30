import { imageDetails } from "../resources";

const Sanatan = () => {
  return (
    <section className="sanatan w-full flex flex-col gap-10 justify-center items-center h-auto">
      <div className="bg-gray-100 w-full h-auto flex flex-col justify-center items-center mt-2 p-4">
        <h2 className="font-bold text-6xl">What is Sanatan !</h2>
        <p className="text-center w-[95%] text-lg mt-2 text-gray-600">
          The term denotes the "eternal" or absolute set of duties or religiously ordained practices incumbent upon all Hindus, regardless of class or caste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestias temporibus corporis quos necessitatibus quis eius cupiditate velit, expedita facere id perspiciatis odit error dolores pariatur, ipsam explicabo facilis quia!
        </p>
      </div>
      <img
        className="h-[40vh] shadow-lg object-contain rounded"
        src={imageDetails.Sanatan4.src}
        alt="An illustrative image about Sanatan Dharma"
      />
    </section>
  );
};

export default Sanatan;
