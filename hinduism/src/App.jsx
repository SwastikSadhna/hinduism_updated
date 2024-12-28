import "./index.css";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Sanatan from "../Components/Sanatan";
import TriMurty from "../Components/TriMurty";
import CharDhamSection from "../Components/CharDhamSection";
import PrayingSection from "../Components/PrayingSection";
import Footer from "../Components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Sanatan />
      <TriMurty />
      <CharDhamSection />
      <PrayingSection />
      <Footer />
    </div>
  );
}

export default App;
