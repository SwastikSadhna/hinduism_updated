import { About } from "../Components/Temple/TempleAbout"
// import { Footer } from "@/components/footer"
import { Header } from "../Components/Temple/TempleHeader"
import { ImageSlider } from "../Components/Temple/TempleFeatureImage"
import { TempleSpecialityGrid } from "../Components/Temple/TempleDetail"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <ImageSlider />
      <TempleSpecialityGrid />
      {/* <Footer /> */}
    </div>
  )
}

