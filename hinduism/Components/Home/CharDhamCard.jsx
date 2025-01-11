import React from "react";

const CharDhamCard = ({ src, templeName, loc, otherInfo, className = " " }) => {
  return (
    <div className="card bg-white rounded-lg overflow-hidden border-0 flex flex-col justify-start gap-6 items-start w-72 h-72">
      <img
        src={src}
        alt={src}
        className={className + "object-fill w-full"}
        style={{
          minHeight: "70%",
          maxHeight: "71%",
        }}
      />
      <div className="about pl-3 ">
        <h4>{templeName}</h4>
        <h5>{loc}</h5>
        <h6>{otherInfo}</h6>
      </div>
    </div>
  );
};

export default CharDhamCard;
