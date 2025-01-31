import { useState } from "react"
import { MdPlayCircleFilled, MdClose } from "react-icons/md"
import { FaHeart, FaShareAlt } from "react-icons/fa"

const vedas = [
  {
    name: "Rigveda",
    description: "The oldest of the Vedas, consisting of hymns dedicated to various deities.",
    image: "https://m.media-amazon.com/images/I/81AbS6P63mL._UF1000,1000_QL80_.jpg",
    introduction:
      "The Rigveda is the oldest known Vedic Sanskrit text. Its early layers are one of the oldest extant texts in any Indo-European language. It is a collection of 1,028 Vedic Sanskrit hymns and 10,600 verses in all, organized into ten books. The hymns are dedicated to Rigvedic deities.",
  },
  {
    name: "Yajurveda",
    description: "Primarily a collection of mantras and rituals for sacrificial ceremonies.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Yajurveda is the Veda of prose mantras. It is a compilation of ritual offering formulas that were said by a priest while an individual performed ritual actions such as those before the yajna fire. It has two primary versions: the White Yajurveda and the Black Yajurveda.",
  },
  {
    name: "Samaveda",
    description: "Contains melodies and chants, often referred to as the Veda of melodies.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Samaveda is the Veda of melodies and chants. It is an ancient Vedic Sanskrit text, and part of the scriptures of Hinduism. One of the four Vedas, it is a liturgical text which consists of 1,549 verses. All but 75 verses have been taken from the Rigveda.",
  },
  {
    name: "Atharvaveda",
    description: "Consists of spells and incantations for various aspects of daily life.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Atharvaveda is the 'knowledge storehouse of atharvāṇas, the procedures for everyday life'. The text is the fourth Veda, but has been a late addition to the Vedic scriptures of Hinduism. It is a collection of 730 hymns with about 6,000 mantras.",
  },
]

function Modal({ veda, onClose }) {
  if (!veda) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-orange-500">{veda.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <MdClose size={24} />
            </button>
          </div>
          <img
            src={veda.image || "/placeholder.svg"}
            alt={veda.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">{veda.introduction}</p>
        </div>
      </div>
    </div>
  )
}

export default function GranthPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedVeda, setSelectedVeda] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}


      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r min-h-screen">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <nav className="space-y-2">
              <a href="#" className="flex items-center px-4 py-2 text-white bg-orange-500 rounded-lg">
                <span className="mr-2">🕉️</span>
                Vedic Mantras
              </a>
              {[
                { icon: "📚", text: "Four Vedas", desc: "Rigveda, Yajurveda, Samaveda, Atharvaveda" },
                { icon: "📖", text: "18 Puranas", desc: "Vishnu Purana, Shiva Purana, Bhagavata Purana" },
                { icon: "🎵", text: "Stotra Collection", desc: "Vishnu Sahasranama, Shiva Tandava, Hanuman Chalisa" },
                { icon: "🕉️", text: "Upanishads", desc: "Isha, Kena, Katha, Prashna, Mundaka" },
                { icon: "📜", text: "Bhagavad Gita", desc: "Chapters 1-18" },
                { icon: "🎯", text: "Ramayana", desc: "Valmiki Ramayana, Ramcharitmanas" },
                { icon: "📑", text: "Mahabharata", desc: "From Adi Parva to Swargarohana Parva" },
              ].map((item) => (
                <div key={item.text} className="group">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
                    onClick={() => setSelectedCategory(item.text)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <div>
                      <div>{item.text}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-orange-500 mb-4">Sanatan Dharma Scriptures</h1>
            <p className="text-gray-600 mb-8">
              Explore the vast collection of sacred Hindu texts. Welcome to your journey of knowledge.
            </p>

            {selectedCategory === "Four Vedas" ? (
              <div>
                <h2 className="text-2xl font-semibold mb-4">The Four Vedas</h2>
                <p className="text-gray-600 mb-6">
                  The Vedas are the oldest sacred texts of Hinduism, composed in Vedic Sanskrit. They are the oldest
                  known Sanskrit texts and are considered the foundation of Hindu philosophy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {vedas.map((veda) => (
                    <div
                      key={veda.name}
                      className="bg-white rounded-lg border hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
                      onClick={() => setSelectedVeda(veda)}
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={veda.image || "/placeholder.svg"}
                          alt={veda.name}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4 flex-grow">
                        <h3 className="text-lg font-semibold mb-2">{veda.name}</h3>
                        <p className="text-sm text-gray-600">{veda.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  {
                    title: "Bhagavad Gita",
                    desc: "Divine knowledge imparted by Lord Krishna to Arjuna",
                    chapters: "18 Chapters",
                  },
                  {
                    title: "Vishnu Sahasranama",
                    desc: "One thousand sacred names of Lord Vishnu",
                    chapters: "142 Verses",
                  },
                  {
                    title: "Sundarkand",
                    desc: "Hanuman's journey to Lanka from the Ramayana",
                    chapters: "68 Dohas",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <MdPlayCircleFilled className="h-6 w-6 text-orange-500" />
                        </div>
                        <div className="ml-4">
                          <h2 className="text-xl font-semibold">{item.title}</h2>
                          <p className="text-gray-600">{item.desc}</p>
                          <p className="text-sm text-orange-500 mt-1">{item.chapters}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <FaHeart className="h-5 w-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <FaShareAlt className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Filter Button - Mobile Only */}
            <div className="fixed bottom-6 right-6 md:hidden">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">Filter</button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <Modal veda={selectedVeda} onClose={() => setSelectedVeda(null)} />
    </div>
  )
}

