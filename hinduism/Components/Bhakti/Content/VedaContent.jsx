import { FaBook, FaHeart, FaShare } from 'react-icons/fa';
import { imageDetails } from '../../../resources'
import { useEffect, useState } from 'react';
import axios from 'axios';
import API_CONFIG from "../../../src/config/api"
import { useContent } from '../ContentContext'
import { useRef } from 'react'

export default function VedaContent() {
  // const vedas = [
  //   {
  //     name: "ऋग्वेद",
  //     description: "सबसे पुराना वेद, मंत्रों का संग्रह",
  //     verses: 10552,
  //     image: `${imageDetails.Rigved.src}`,  // Replace with actual image paths
  //     details: "ऋग्वेद धार्मिक मंत्रों का संग्रह है और हिन्दू धर्म के सबसे पुराने ग्रंथों में से एक है। यह वेद प्राचीन भारतीय जीवन के बारे में जानकारी देता है।"
  //   },
  //   {
  //     name: "यजुर्वेद",
  //     description: "यज्ञ विधियों का वेद",
  //     verses: 1975,
  //     image: `${imageDetails.Yajurved.src}`,  // Replace with actual image paths
  //     details: "यजुर्वेद धार्मिक अनुष्ठानों के संचालन के लिए उपयोगी मंत्रों का संग्रह है, जिसमें यज्ञ विधियाँ और उनका महत्व बताया गया है।"
  //   },
  //   {
  //     name: "सामवेद",
  //     description: "संगीतमय मंत्रों का वेद",
  //     verses: 1875,
  //     image: `${imageDetails.Samved.src}`,  // Replace with actual image paths
  //     details: "सामवेद संगीत से संबंधित मंत्रों का संग्रह है और यह धार्मिक अनुष्ठानों में गायन और संगीत का प्रमुख स्थान है।"
  //   },
  //   {
  //     name: "अथर्ववेद",
  //     description: "जीवन के व्यावहारिक पहलुओं का वेद",
  //     verses: 5987,
  //     image: `${imageDetails.Atharvved.src}`,  // Replace with actual image paths
  //     details: "अथर्ववेद में जीवन के व्यावहारिक पहलुओं के बारे में वर्णन किया गया है, जिसमें चिकित्सा, उपचार और जीवन के अन्य पहलुओं पर ध्यान दिया गया है।"
  //   }
  // ];

  const [vedas, setVedas] = new useState([])
  const { activeCategory,  handleFilter } = useContent()
  const isMounted = useRef(false);

  useEffect(() => { 
    axios.get(API_CONFIG.baseUrl + "/bhakti/type/4").then((res) => {
      console.log(res.data)
      setVedas(res.data.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  
    
  useEffect(() => {
    if(isMounted.current)
      handleFilter("/bhakti/filter", setVedas, 4)
    else
      isMounted.current = true
  }, [activeCategory])

  return (
    <div className="space-y-4">
      {vedas.map((veda, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg flex items-center">
                <FaBook className="text-orange-500 mr-2" />
                {veda.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{veda.description}</p>
              <p className="text-sm text-gray-600 mt-1">{veda.author}</p> {/* Additional details */}
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:text-orange-500 transition-colors">
                <FaHeart />
              </button>
              <button className="p-2 hover:text-orange-500 transition-colors">
                <FaShare />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <img
              src={veda.image}
              alt={veda.title}
              className="w-40 h-42 object-contain rounded-lg"
            />
            <div>
              {/* <p className="text-gray-800">श्लोक संख्या: {veda.verses}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
