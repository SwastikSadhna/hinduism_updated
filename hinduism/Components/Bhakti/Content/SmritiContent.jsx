import { useEffect, useState } from 'react'
import { FaPlay, FaHeart, FaShare } from 'react-icons/fa'
import axios from "axios"
import API_CONFIG from "../../../src/config/api"
import { useContent } from '../ContentContext'
import Loading from '../../../Pages/Loading'
import ErrorPage from '../../../Pages/ErrorPage'
import { useParams } from 'react-router-dom'

export default function SmritiContent() {

  const { activeCategory, handleFilter } = useContent()
  const [bhajans, setBhajans] = new useState([])
  const [isLoading, setIsLoading] = new useState(true)
  

  useEffect(() => {
    axios.get(API_CONFIG.baseUrl + "/bhakti/type/12").then((res) => {
        console.log(res.data)
        setBhajans(res.data)
        setIsLoading(false)
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
      })
  },[])

  useEffect(() => {
      handleFilter("/bhakti/filter", setBhajans, 3)
  }, [activeCategory])

  return (
    <div className="space-y-4">
      {isLoading == true ? <Loading /> :
        bhajans?.length > 0? bhajans?.map((bhajan) => (
        <a href={`/Bhakti/View/${bhajan.id}`} >
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
        </a>
        )) : <ErrorPage code={404} message={"No Items Found"}/>
      }
    </div>
  )
}

