import React from "react";

const BookDescription = ({ description }) => {
  return (
    <section className="description w-[80%] max-w-6xl bg-white rounded-lg shadow-md p-10 mt-5 text-center">
      <p className="text-lg text-gray-700 leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default BookDescription;
