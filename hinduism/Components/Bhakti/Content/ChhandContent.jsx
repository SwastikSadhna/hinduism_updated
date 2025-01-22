import { useEffect, useState } from 'react'
import { FaMusic, FaHeart, FaShare } from 'react-icons/fa'
import axios from "axios"
import API_CONFIG from "../../../src/config/api"

export default function ChhandContent() {
  // const chhands = [
  //   {
  //     name: "दोहा",
  //     example: "चिंता ऐसी दाखिनी, उपजै घट माहिं। बालक वृद्ध न चोर कोइ, सबको डरपावै जाहिं।",
  //     description: "दो पंक्तियों का छंद, प्रत्येक पंक्ति में 24 मात्राएँ"
  //   },
  //   {
  //     name: "चौपाई",
  //     example: "जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर।",
  //     description: "चार पंक्तियों का छंद, प्रत्येक पंक्ति में 16 मात्राएँ"
  //   },
  // ]

  const [chhands, setChhand] = new useState([])

  useEffect(() => {
    axios.get(API_CONFIG.baseUrl + "/bhakti/type/1").then((res) => {
      setChhand(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <div className="space-y-4">
      {chhands.map((chhand, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-lg flex items-center">
                <FaMusic className="text-orange-500 mr-2" />
                {chhand.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{chhand.description}</p>
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
          <p className="text-gray-800 font-medium mt-2">{chhand?.keyword?.join(" , ")}</p>
        </div>
      ))}
    </div>
  )
}

