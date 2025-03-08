import React from "react";
import { imageDetails } from "../../resources";
export default function Content() {
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
  
          {/* Right side Bhajan Content with scrollable text */}
          <div className="w-2/3 bg-[#f5e6d3] rounded-lg p-6 shadow-sm h-[50vh] overflow-y-auto">
            <div className="space-y-4 text-gray-800">
              <p className="text-center">
                अच्युतम् केशवं कृष्ण दामोदर,
                <br />
                राम नारायण जानकी वल्लभम् ।
              </p>
              <p className="text-center">
                कौन कहता है भगवान खाते नहीं,
                <br />
                बेर शबरी के कैसे खिलाते नहीं ।
              </p>
              <p className="text-center">
                अच्युतम् केशवं कृष्ण दामोदर,
                <br />
                राम नारायण जानकी वल्लभम् ।
              </p>
              <p className="text-center">
                कौन कहता है भगवान सोते नहीं,
                <br />
                माँ यशोदा के कैसे सुलाते नहीं ।
              </p>
              <p className="text-center">
                अच्युतम् केशवं कृष्ण दामोदर,
                <br />
                राम नारायण जानकी वल्लभम् ।
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  