import React, { useEffect, useState } from "react";
import { imageDetails } from "../../resources";
import axios from "axios";
import API_CONFIG from "../../src/config/api";

export default function Content({data}) {
  // const bhajanContent = [
  //   "अच्युतम् केशवं कृष्ण दामोदर, राम नारायण जानकी वल्लभम् ।",
  //   "कौन कहता है भगवान खाते नहीं, बेर शबरी के कैसे खिलाते नहीं ।",
  //   "अच्युतम् केशवं कृष्ण दामोदर, राम नारायण जानकी वल्लभम् ।",
  //   "कौन कहता है भगवान सोते नहीं, माँ यशोदा के कैसे सुलाते नहीं ।",
  //   "अच्युतम् केशवं कृष्ण दामोदर, राम नारायण जानकी वल्लभम् ।",
  // ];

  // const author = "Sant Tulsidas"; // Set to empty string "" if no author
  // const referenceLinks = [
  //   "https://www.example.com/bhajan-source1",
  //   "https://www.example.com/bhajan-source1",
  //   "https://www.example.com/bhajan-source2",
  // ]; // Empty array [] if no links

  return (
    <div className="min-h-screen pt-11 flex flex-col items-center px-4 sm:px-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        {/* Left side Image Card */}
        <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={data?.image != "" ? `${API_CONFIG.baseUrl}/${data?.image}` :  imageDetails.Spiritual.src}
            alt="Spiritual figure silhouette"
            className="w-full h-auto object-contain rounded-md"
          />

          {/* Conditionally render Author & Reference Links */}
          {(data?.author || data?.reference_links?.length > 0) && (
            <div className="mt-4 text-center text-lg text-gray-700">
              {data?.author && <p className="font-semibold">Author: {data?.author}</p>}
              {data?.reference_links.length > 0 && (
                <div className="mt-2">
                  <p className="font-semibold">Reference Links:</p>
                  <ul className="list-disc list-inside">
                    {data?.reference_links?.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {link.slice(0,35)+"..."}
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
            data?.content?.length === 100 ? "bg-white text-gray-800" : "bg-[#f5e6d3] text-gray-800"
          }`}
        >
          {data?.content?.length > 100 ? (
            <div className="space-y-4 text-center">
              {data.content}
            </div>
          ) : (<></>)
        }
            <a href={data?.file == "null" || `${API_CONFIG.baseUrl}/${data?.file}` }>
            <button
              className={`mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ${data?.file == "null" ? "disabled" : ""}`}
              disabled={data?.file == "null" ? true : false}
            >
              Download Bhajan
            </button>
            </a>
         
        </div>
      </div>
    </div>
  );
}
