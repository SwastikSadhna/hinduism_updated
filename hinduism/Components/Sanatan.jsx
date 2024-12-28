const Sanatan = () => {
  return (
    <section className="sanatan w-full flex flex-col gap-6 justify-center items-center h-[40vh]">
      <div className="bg-slate-100 w-[85%]  h-auto rounded-2xl flex flex-col justify-center items-center">
        <h2 className="font-bold text-6xl">सनातन क्या है?</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, omnis
          rem harum qui iure similique provident quisquam impedit voluptas
          est?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          velit! Tempore, fuga officiis vitae magnam illum eum natus laudantium
          incidunt.
        </p>
      </div>
      <img
        className="w-[60vw] rounded-lg h-32 object-fill"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJABqD-VyV2kVd8l4v5JdItfhupOIp09S8Q&s"
        alt="ahiya koi saro photo nakhi deje ghodina vinay"
      />
    </section>
  );
};

export default Sanatan;
