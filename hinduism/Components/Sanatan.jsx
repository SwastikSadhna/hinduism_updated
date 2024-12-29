const Sanatan = () => {
  return (
    <section className="sanatan w-full flex flex-col gap-10 justify-center items-center h-[45vh]">
      <div className="bg-slate-100 w-[85%]  h-auto rounded-2xl flex flex-col justify-center items-center mt-2">
        <h2 className="font-bold text-6xl">सनातन क्या है?</h2>
        <p className="text-center text-xl mt-4">
        The term denotes the "eternal" or absolute set of duties or religiously ordained practices incumbent upon all Hindus, regardless of class, caste
        </p>
      </div>
      <img
        className="w-[60vw] rounded-lg h-40 object-fill"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJABqD-VyV2kVd8l4v5JdItfhupOIp09S8Q&s"
        alt="ahiya koi saro photo nakhi deje ghodina vinay"
      />
    </section>
  );
};

export default Sanatan;
