import { About } from "../Components/Temple/TempleAbout"
// import { Footer } from "@/components/footer"
import { Header } from "../Components/Temple/TempleHeader"
import { ImageSlider } from "../Components/Temple/TempleFeatureImage"
import { TempleSpecialityGrid } from "../Components/Temple/TempleDetail"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import API_CONFIG from "../src/config/api"
import { imageDetails } from "../resources"

export default function Home() {
  const navigate = useNavigate();
  const [templeData, setTempleData] = useState([]);
  const [images, setImages] = useState([])
  const {id} = useParams()

  useEffect(() => {
      axios
        .get(`${API_CONFIG.baseUrl}/temples/${id}`)
        .then((res) => {
          console.log(res.data[0])
          setTempleData(res.data[0]);
          setImages(res.data[0]?.images?.map(image=>`${API_CONFIG.baseUrl}/${image}`) || []);
        })
        .catch((err) => {
          console.log(err.response?.data?.message || "An error occurred");
          navigate("/")          
        })
    }, []);
  
  return (
    <div className="min-h-screen">
      <Header name={templeData?.name} location={templeData?.location} image={ `${API_CONFIG.baseUrl}/${templeData?.cover_image}`} />
      <About name={templeData?.name} description={templeData?.description} image={ templeData?.images?.length < 1? imageDetails.Temple.src: templeData?.images?.at(0) } />
      <ImageSlider images={images} />
      <TempleSpecialityGrid importance={templeData?.importance == null ? []: templeData?.importance} />
      {/* <Footer /> */}
    </div>
  )
}

