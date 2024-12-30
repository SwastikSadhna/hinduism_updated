import React from "react";

const ActionButtons = ({ onView, onDownload }) => {
  return (
    <div className="actions flex gap-5 mt-5 mb-5">
      <button
        className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600"
        onClick={onView}
      >
        View Book
      </button>
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600"
        onClick={onDownload}
      >
        Download
      </button>
    </div>
  );
};

export default ActionButtons;
