import React from "react";
import { imageDetails } from "../../resources";

export default function Content() {
  const bhajanContent = [
    "अच्युतम् केशवं कृष्ण दामोदर, राम नारायण जानकी वल्लभम् ।",
    "कौन कहता है भगवान खाते नहीं, बेर शबरी के कैसे खिलाते नहीं ।",
    "अच्युतम् केशवं कृष्ण दामोदर, राम नारायण जानकी वल्लभम् ।",
    "कौन कहता है भगवान सोते नहीं, माँ यशोदा के कैसे सुलाते नहीं ।",
    "अच्युतम् केशवं कृष्ण दामोदर, राम नारायण जानकी वल्लभम् ।",
  ];

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([bhajanContent.join("\n")], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "bhajan.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center">
      <div className="w-[80%] max-w-3xl flex gap-6">
        {/* Left side Image */}
        <div className="w-1/3">
          <img
            src={imageDetails.Devtas.src}
            alt="Spiritual figure silhouette"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right side Bhajan Content with dynamic background */}
        <div
          className={`w-2/3 rounded-lg p-6 shadow-sm h-[50vh] overflow-y-auto flex flex-col items-center transition-all duration-300 ${
            bhajanContent.length === 0 ? "text-white" : "bg-[#f5e6d3] text-gray-800"
          }`}
        >
          <div className="space-y-4 text-center">
            {bhajanContent.length > 0 ? (
              bhajanContent.map((line, index) => <p key={index}>{line}</p>)
            ) : (
              <button
                onClick={handleDownload}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Download Bhajan
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
