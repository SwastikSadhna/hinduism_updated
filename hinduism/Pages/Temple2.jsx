import { About } from "../Components/Temple/TempleAbout"
// import { Footer } from "@/components/footer"
import { Header } from "../Components/Temple/TempleHeader"
import { ImageSlider } from "../Components/Temple/TempleFeatureImage"
import { TempleSpecialityGrid } from "../Components/Temple/TempleDetail"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import API_CONFIG from "../src/config/api"

export default function Home() {
  const navigate = useNavigate();
  const [templeData, setTempleData] = useState([]);
  const [images, setImages] = useState([])
  const {id} = useParams()

  useEffect(() => {
      axios
        .get(`${API_CONFIG.baseUrl}/temples/${id}`)
        .then((res) => {
          setTempleData(res.data);
          setImages(res.data?.images || []);
        })
        .catch((err) => {
          console.log(err.response?.data?.message || "An error occurred");
          navigate("/")          
        })
    }, []);
  
  return (
    <div className="min-h-screen">
      <Header name={templeData?.name} location={templeData?.location} image={ templeData?.cover_image} />
      <About />
      <ImageSlider />
      <TempleSpecialityGrid />
      {/* <Footer /> */}
    </div>
  )
}

