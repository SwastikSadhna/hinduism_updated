import { imageDetails } from "../resources";

const Sanatan = () => {
  return (
    <section className="sanatan w-full flex flex-col gap-10 justify-center items-center h-auto">
      <div className="bg-slate-100  w-[85%] h-auto rounded-2xl flex flex-col justify-center items-center mt-2 p-4">
        <h2 className="font-bold text-6xl">सनातन क्या है?</h2>
        <p className="text-center text-xl mt-4">
          The term denotes the "eternal" or absolute set of duties or religiously ordained practices incumbent upon all Hindus, regardless of class or caste.
        </p>
      </div>
      <img
        className="w-full h-[50vh] shadow-lg object-contain "
        src={imageDetails.Sanatan3.src}
        alt="An illustrative image about Sanatan Dharma"
      />
    </section>
  );
};

export default Sanatan;
