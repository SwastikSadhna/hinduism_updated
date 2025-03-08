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

  // Sample author and reference link (can be null or empty)
  const author = "Sant Tulsidas";
  const referenceLink = "https://www.example.com/bhajan-source";

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
    <div className="min-h-screen pt-11 flex flex-col items-center">
      <div className="w-[80%] max-w-5xl flex gap-6">
        {/* Left side Image Card */}
        <div className="w-100 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={imageDetails.Spiritual.src}
            alt="Spiritual figure silhouette"
            className="w-full h-auto object-contain rounded-md"
          />

          {/* Display author & reference link only if available */}
          {author || referenceLink ? (
            <div className="mt-4 text-center text-lg text-gray-700">
              {author && <p className="font-semibold">Author: {author}</p>}
              {referenceLink && (
                <p>
                  Reference Link:{" "}
                  <a
                    href={referenceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {referenceLink}
                  </a>
                </p>
              )}
            </div>
          ) : null}
        </div>

        {/* Right side Bhajan Content */}
        <div
          className={`w-100 rounded-lg p-6 shadow-sm h-[50vh] overflow-y-auto flex flex-col items-center transition-all duration-300 ${
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
