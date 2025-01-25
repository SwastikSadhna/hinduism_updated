import { useEffect, useState } from 'react'
import { FaQuoteLeft, FaHeart, FaShare } from 'react-icons/fa'
import axios from 'axios'
import API_CONFIG from "../../../src/config/api"
import { useContent } from '../ContentContext'
import { useRef } from 'react'
import Loading from '../../../Pages/Loading'
import ErrorPage from "../../../Pages/ErrorPage"

export default function DuhaContent() {
  // const duhas = [
  //   {
  //     text: "जो तू माने अपना, तो सबको अपना मान। सब अपना हो जायेगा, तेरा कोई न जान।",
  //     author: "कबीर दास"
  //   },
  //   {
  //     text: "दया धरम का मूल है, पाप मूल अभिमान। तुलसी दया न छोड़िये, जब लग घट में प्रान।",
  //     author: "तुलसीदास"
  //   },
  // ]

  const [duhas, setDuhas] = new useState([])
  const { activeCategory,  handleFilter } = useContent()
  const isMounted = useRef(false);
  const [isLoading, setIsLoading] = new useState(true)

  useEffect(() => { 
    axios.get(API_CONFIG.baseUrl + "/bhakti/type/2").then((res) => {
      setIsLoading(false)
      setDuhas(res.data.data)
    }).catch((err) => {
      setIsLoading(false)
    })
  }, [])
  
      
  useEffect(() => {
    if(isMounted.current)
      handleFilter("/bhakti/filter", setDuhas, 2)
    else
      isMounted.current = true
  }, [activeCategory])

  return (
    <div className="space-y-4">
      {isLoading == true? <Loading /> :duhas.length > 0 ? duhas.map((duha, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start mb-3">
            <FaQuoteLeft className="text-orange-500 mr-2 mt-1" />
            <div>
              <p className="text-gray-800 font-medium">{duha.title}</p>
              <p className="text-sm text-gray-600 mt-2">- {duha.author}</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button className="p-2 hover:text-orange-500 transition-colors">
              <FaHeart />
            </button>
            <button className="p-2 hover:text-orange-500 transition-colors">
              <FaShare />
            </button>
          </div>
        </div>
      )) : <ErrorPage /> }
    </div>
  )
}

