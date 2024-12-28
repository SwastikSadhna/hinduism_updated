import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="card bg-sky-800 rounded-lg flex flex-col p-6 justify-start gap-6 items-start w-72 h-64">
      <h3 className="font-bold text-xl text-white"> - {title}</h3>
      <p className="text-lg text-white">{description}</p>
    </div>
  );
};

export default Card;
