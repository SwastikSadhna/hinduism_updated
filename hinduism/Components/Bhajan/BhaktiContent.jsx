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

  const author = "Sant Tulsidas"; // Set to empty string "" if no author
  const referenceLinks = [
    "https://www.example.com/bhajan-source1",
    "https://www.example.com/bhajan-source1",
    "https://www.example.com/bhajan-source2",
  ]; // Empty array [] if no links

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
    <div className="min-h-screen pt-11 flex flex-col items-center px-4 sm:px-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        {/* Left side Image Card */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={imageDetails.Spiritual.src}
            alt="Spiritual figure silhouette"
            className="w-full h-auto object-contain rounded-md"
          />

          {/* Conditionally render Author & Reference Links */}
          {(author || referenceLinks.length > 0) && (
            <div className="mt-4 text-center text-lg text-gray-700">
              {author && <p className="font-semibold">Author: {author}</p>}
              {referenceLinks.length > 0 && (
                <div className="mt-2">
                  <p className="font-semibold">Reference Links:</p>
                  <ul className="list-disc list-inside">
                    {referenceLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right side Bhajan Content */}
        <div
          className={`w-full md:w-2/3 rounded-lg p-6 shadow-sm h-[50vh] overflow-y-auto flex flex-col items-center transition-all duration-300 ${
            bhajanContent.length === 0 ? "bg-white text-gray-800" : "bg-[#f5e6d3] text-gray-800"
          }`}
        >
          {bhajanContent.length > 0 ? (
            <div className="space-y-4 text-center">
              {bhajanContent.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          ) : (
            <button
              onClick={handleDownload}
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Download Bhajan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
