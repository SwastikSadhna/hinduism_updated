import { useEffect, useState } from 'react'
import { FaPlay, FaHeart, FaShare } from 'react-icons/fa'
import axios from "axios"
import API_CONFIG from "../../../src/config/api"
import { useContent } from '../ContentContext'


export default function BhajanContent() {
  // const bhajans = [
  //   { title: 'Mere Shyam', type: 'Traditional' },
  //   { title: 'Achyutam Keshavam', type: 'Traditional' },
  //   { title: 'Krishna Govinda', type: 'Traditional' },
  //   { title: 'Om Jai Jagdish Hare', type: 'Traditional' },
  //   { title: 'Shiv Tandav Stotram', type: 'Ravanasura' },
  // ]

  const { activeCategory, setActiveCategory } = useContent()

  const [bhajans, setBhajans] = new useState([])

  useEffect(() => {
    axios.get(API_CONFIG.baseUrl + "/bhakti/type/3").then((res) => {
      setBhajans(res.data.data)
    })
  },[])


  useEffect(() => {
    if (activeCategory) {
      let query = ""
      for (const key in activeCategory) {
        if (activeCategory[key].length > 0) {
          query += `&${key}=${activeCategory[key].join(',')}`
        }
      }
      const url = `${API_CONFIG.baseUrl}/bhakti/type/3?${query.slice(1)}`
      console.log(url)
      axios.get(url).then((res) => {
        setBhajans(res.data.data)
        console.log("got filtered bhajans")
        console.log(res.data.data)
      })
    }
  }, [activeCategory])

  return (
    <div className="space-y-4">
      {bhajans.map((bhajan) => (
        <div
          key={bhajan.title}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
              <FaPlay />
            </button>
            <div>
              <h3 className="font-semibold">{bhajan.title}</h3>
              <p className="text-sm text-gray-600">{bhajan.description}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="p-2 hover:text-orange-500 transition-colors">
              <FaHeart />
            </button>
            <button className="p-2 hover:text-orange-500 transition-colors">
              <FaShare />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

