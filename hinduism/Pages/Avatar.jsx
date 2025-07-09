import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaStar, FaCrown, FaFire, FaEye } from "react-icons/fa"

const vishnuAvatars = [
  {
    name: "Matsya",
    title: "The Fish Avatar",
    description: "The first avatar who saved the world from the great deluge and preserved the Vedas.",
    era: "Satya Yuga",
    symbolism: "Preservation of knowledge and life",
    iconColor: "from-blue-500 to-cyan-500",
    image: "/src/Resources/Avatars/Matsya-avatar.png",
  },
  {
    name: "Kurma",
    title: "The Turtle Avatar",
    description: "The turtle who supported Mount Mandara during the churning of the ocean (Samudra Manthan).",
    era: "Satya Yuga",
    symbolism: "Support and stability",
    iconColor: "from-green-500 to-emerald-500",
    image: "/src/Resources/Avatars/Kurma-avatar.png",
  },
  {
    name: "Varaha",
    title: "The Boar Avatar",
    description: "The boar who rescued Earth (Bhudevi) from the demon Hiranyaksha who had hidden her in the ocean.",
    era: "Satya Yuga",
    symbolism: "Protection of Earth",
    iconColor: "from-amber-500 to-orange-500",
    image: "/src/Resources/Avatars/Varaha-avatar.png",
  },
  {
    name: "Narasimha",
    title: "The Lion-Man Avatar",
    description: "Half-man, half-lion who destroyed the demon Hiranyakashipu to protect devotee Prahlada.",
    era: "Satya Yuga",
    symbolism: "Divine protection of devotees",
    iconColor: "from-yellow-500 to-orange-500",
    image: "/src/Resources/Avatars/Narasimha-avatar.png",
  },
  {
    name: "Vamana",
    title: "The Dwarf Avatar",
    description: "The dwarf Brahmin who defeated the demon king Bali through his humility and divine power.",
    era: "Treta Yuga",
    symbolism: "Humility conquering pride",
    iconColor: "from-purple-500 to-pink-500",
    image: "/src/Resources/Avatars/Vamana-avatar.png",
  },
  {
    name: "Parashurama",
    title: "The Warrior Sage",
    description: "The axe-wielding avatar who eliminated corrupt Kshatriya rulers to restore dharma.",
    era: "Treta Yuga",
    symbolism: "Justice and righteousness",
    iconColor: "from-red-500 to-orange-500",
    image: "/src/Resources/Avatars/Parsuram-avatar.png",
  },
  {
    name: "Rama",
    title: "The Ideal King",
    description: "The prince of Ayodhya, hero of Ramayana, embodiment of dharma, duty, and righteousness.",
    era: "Treta Yuga",
    symbolism: "Ideal conduct and dharma",
    iconColor: "from-green-600 to-blue-500",
    image: "/src/Resources/Avatars/Ram-avatar.png",
  },
  {
    name: "Krishna",
    title: "The Divine Cowherd",
    description: "The eighth avatar, teacher of Bhagavad Gita, who established dharma in Dvapara Yuga.",
    era: "Dvapara Yuga",
    symbolism: "Divine love and wisdom",
    iconColor: "from-blue-600 to-purple-600",
    image: "/src/Resources/Avatars/Krishna-avatar.png",
  },
  {
    name: "Buddha",
    title: "The Enlightened One",
    description: "The compassionate teacher who showed the path to liberation from suffering.",
    era: "Kali Yuga",
    symbolism: "Compassion and enlightenment",
    iconColor: "from-yellow-400 to-orange-400",
    image: "/src/Resources/Avatars/Krishna-darshan.jpg",
  },
  {
    name: "Kalki",
    title: "The Future Avatar",
    description: "The prophesied final avatar who will appear at the end of Kali Yuga to restore righteousness.",
    era: "End of Kali Yuga",
    symbolism: "Renewal and restoration",
    iconColor: "from-indigo-500 to-purple-500",
    image: "/src/Resources/Avatars/Kalki-avatar.png",
  },
]

const shivaAvatars = [
  {
    name: "Rudra",
    title: "The Fierce One",
    description: "The primal form of Shiva, representing the destructive aspect of time and cosmic dissolution.",
    era: "Timeless",
    symbolism: "Cosmic destruction and renewal",
    iconColor: "from-red-600 to-orange-600",
    image: "/src/Resources/Avatars/Rudra.jpg",
  },
  {
    name: "Nataraja",
    title: "The Cosmic Dancer",
    description: "The dancing form of Shiva who performs the cosmic dance of creation, preservation, and destruction.",
    era: "Eternal",
    symbolism: "Cosmic rhythm and balance",
    iconColor: "from-purple-600 to-pink-600",
    image: "/src/Resources/Avatars/sunatnartak.jpg",
  },
  {
    name: "Ardhanarishvara",
    title: "The Half-Woman Lord",
    description: "The composite form of Shiva and Parvati, representing the unity of masculine and feminine principles.",
    era: "Transcendent",
    symbolism: "Unity of opposites",
    iconColor: "from-pink-500 to-purple-500",
    image: "/src/Resources/Avatars/sureshwar.jpg",
  },
  {
    name: "Dakshinamurti",
    title: "The Supreme Teacher",
    description: "The form of Shiva as the ultimate guru, teaching through silence and embodying supreme knowledge.",
    era: "Eternal",
    symbolism: "Divine wisdom and teaching",
    iconColor: "from-yellow-600 to-orange-600",
    image: "/src/Resources/Avatars/Yatinath.jpg",
  },
  {
    name: "Bhairava",
    title: "The Fierce Protector",
    description: "The terrifying form of Shiva who destroys evil and protects devotees from negative forces.",
    era: "Timeless",
    symbolism: "Protection and fearlessness",
    iconColor: "from-red-700 to-black",
    image: "/src/Resources/Avatars/kalbhairava.jpg",
  },
  {
    name: "Hanuman",
    title: "The Devoted Servant",
    description: "The monkey deity known for his unwavering devotion to Lord Rama and incredible strength.",
    era: "Treta Yuga",
    symbolism: "Devotion and strength",
    iconColor: "from-orange-500 to-red-500",
    image: "/src/Resources/Avatars/Hanuman.jpg"
  },
]

const AvatarIcon = ({ avatar }) => {
  const icons = {
    Matsya: <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">🐟</div>,
    Kurma: <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">🐢</div>,
    Varaha: <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">🐗</div>,
    Narasimha: <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">🦁</div>,
    Vamana: <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">👤</div>,
    Parashurama: <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">⚔️</div>,
    Rama: <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">🏹</div>,
    Krishna: <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">🪶</div>,
    Buddha: <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">☸️</div>,
    Kalki: <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">🗡️</div>,
    Rudra: <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">🔱</div>,
    Nataraja: <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">💃</div>,
    Ardhanarishvara: <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">⚊</div>,
    Dakshinamurti: <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">🧘</div>,
    Bhairava: <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">👹</div>,
    Hanuman: <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">🐒</div>,
  }
  return icons[avatar.name] || <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
}

export default function AvatarsPage() {
  const [selectedTab, setSelectedTab] = useState("vishnu")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-800 mb-4 flex items-center justify-center gap-2">
            <FaStar className="text-yellow-500" />
            Divine Avatars
            <FaStar className="text-yellow-500" />
          </h1>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            Explore the divine manifestations of the Supreme, each appearing to restore dharma and guide humanity through different ages.
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="vishnu" className="text-lg">
              <FaCrown className="mr-2 h-5 w-5" />
              Vishnu Avatars
            </TabsTrigger>
            <TabsTrigger value="shiva" className="text-lg">
              <FaFire className="mr-2 h-5 w-5" />
              Shiva Avatars
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vishnu">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vishnuAvatars.map((avatar, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={avatar.image} 
                      alt={avatar.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="text-xs bg-white/90">
                        {avatar.era}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <AvatarIcon avatar={avatar} />
                    </div>
                    <CardTitle className="text-xl text-orange-800 group-hover:text-orange-600 transition-colors">
                      {avatar.name}
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-medium">
                      {avatar.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {avatar.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FaEye className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium text-orange-700">
                          Symbolism:
                        </span>
                        <span className="text-sm text-gray-600">
                          {avatar.symbolism}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shiva">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shivaAvatars.map((avatar, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={avatar.image} 
                      alt={avatar.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="text-xs bg-white/90">
                        {avatar.era}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <AvatarIcon avatar={avatar} />
                    </div>
                    <CardTitle className="text-xl text-purple-800 group-hover:text-purple-600 transition-colors">
                      {avatar.name}
                    </CardTitle>
                    <CardDescription className="text-purple-600 font-medium">
                      {avatar.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {avatar.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FaEye className="h-4 w-4 text-purple-500" />
                        <span className="text-sm font-medium text-purple-700">
                          Symbolism:
                        </span>
                        <span className="text-sm text-gray-600">
                          {avatar.symbolism}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}