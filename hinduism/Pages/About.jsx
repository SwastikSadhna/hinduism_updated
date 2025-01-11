import Hero from '../Components/About/Hero'
import Features from '../Components/About/Feature'
import Team from '../Components/About/Team'
import Contact from '../Components/About/Contact'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Team />
      <Contact />
    </div>
  )
}

