import "./index.css";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Sanatan from "../Components/Sanatan";
import Benefits from "../Components/Benefits";
import CharDhamSection from "../Components/CharDhamSection";
import PrayingSection from "../Components/PrayingSection";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Sanatan />
      <Benefits />
      <CharDhamSection />
      <PrayingSection />
    </div>
  );
}

export default App;
