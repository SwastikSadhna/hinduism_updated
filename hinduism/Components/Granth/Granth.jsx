"use client"

import { useState } from "react"
import { MdClose, MdZoomIn, MdZoomOut } from "react-icons/md"

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
    image: "https://nepalyogahome.com/wp-content/uploads/2021/05/Yajurveda.jpg",
    introduction:
      "The Yajurveda is the Veda of prose mantras. It is a compilation of ritual offering formulas that were said by a priest while an individual performed ritual actions such as those before the yajna fire. It has two primary versions: the White Yajurveda and the Black Yajurveda.",
  },
  {
    name: "Samaveda",
    description: "Contains melodies and chants, often referred to as the Veda of melodies.",
    image: "https://m.media-amazon.com/images/I/81eEIJGLNFL._UF894,1000_QL80_.jpg",
    introduction:
      "The Samaveda is the Veda of melodies and chants. It is an ancient Vedic Sanskrit text, and part of the scriptures of Hinduism. One of the four Vedas, it is a liturgical text which consists of 1,549 verses. All but 75 verses have been taken from the Rigveda.",
  },
  {
    name: "Atharvaveda",
    description: "Consists of spells and incantations for various aspects of daily life.",
    image: "https://m.media-amazon.com/images/I/81sIL+TK-2L._UF894,1000_QL80_.jpg",
    introduction:
      "The Atharvaveda is the 'knowledge storehouse of atharvāṇas, the procedures for everyday life'. The text is the fourth Veda, but has been a late addition to the Vedic scriptures of Hinduism. It is a collection of 730 hymns with about 6,000 mantras.",
  },
]

const puranas = [
  {
    name: "Agni Purana",
    description: "Focuses on rituals, cosmology, and prophecy.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Agni Purana is one of the 18 major Puranas, and is dedicated to Agni, the fire god. It contains a wide range of topics including rituals, cosmology, and prophecies.",
    download: "#",
  },
  {
    name: "Bhagavata Purana",
    description: "Widely popular, focusing on the life of Krishna and bhakti yoga.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Bhagavata Purana, also known as Srimad Bhagavatam, is one of Hinduism's eighteen great Puranas. It is the most popular and widely circulated of all the Puranas, focusing on bhakti (devotion) to Supreme God Vishnu and his avatar Krishna.",
    download: "#",
  },
  {
    name: "Bhavishya Purana",
    description: "Contains prophecies about future events.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Bhavishya Purana is one of the 18 major Puranas. It is known for its content forecasting future events, and has attracted significant critical scrutiny.",
    download: "#",
  },
  {
    name: "Brahma Purana",
    description: "One of the oldest Puranas, focusing on Brahma and creation myths.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Brahma Purana is one of the oldest Mahapuranas, focusing on the god Brahma and various creation myths. It also contains geographical knowledge of ancient India.",
    download: "#",
  },
  {
    name: "Brahmanda Purana",
    description: "Deals with the origin and development of the universe.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Brahmanda Purana focuses on the origin and development of the universe, as its name suggests. It contains the well-known Lalita Sahasranama.",
    download: "#",
  },
  {
    name: "Garuda Purana",
    description: "Focuses on Vishnu and includes information about life after death.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Garuda Purana is primarily focused on Lord Vishnu and contains detailed information about life after death, funeral rites, and the structure of the cosmos.",
    download: "#",
  },
  {
    name: "Kurma Purana",
    description: "Named after Vishnu's Kurma (tortoise) avatar.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Kurma Purana is named after the Kurma (tortoise) avatar of Vishnu. It contains details about the creation of the universe and the incarnations of Vishnu.",
    download: "#",
  },
  {
    name: "Linga Purana",
    description: "Glorifies Shiva and the worship of the Linga.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Linga Purana primarily glorifies the god Shiva and the worship of the Linga. It also contains information about the creation and structure of the universe.",
    download: "#",
  },
  {
    name: "Markandeya Purana",
    description: "One of the oldest Puranas, known for the Devi Mahatmya.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Markandeya Purana is one of the oldest Puranas and is especially known for including the Devi Mahatmya, an important text in Shaktism.",
    download: "#",
  },
  {
    name: "Matsya Purana",
    description: "Named after Vishnu's Matsya (fish) avatar.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Matsya Purana is narrated by Vishnu in his Matsya (fish) avatar. It contains diverse topics including genealogies of gods and sages, and descriptions of cosmology.",
    download: "#",
  },
  {
    name: "Narada Purana",
    description: "Focuses on devotion to Vishnu and includes many stories.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Narada Purana emphasizes devotion to Vishnu and contains many stories and religious observances. It's named after the sage Narada.",
    download: "#",
  },
  {
    name: "Padma Purana",
    description: "One of the largest Puranas, focusing on the worship of Vishnu.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Padma Purana is one of the largest Puranas and focuses on the worship of Vishnu. It contains diverse subjects including cosmology, philosophy, and pilgrimage guides.",
    download: "#",
  },
  {
    name: "Shiva Purana",
    description: "Glorifies Shiva and his various forms.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Shiva Purana primarily glorifies the god Shiva and his various forms. It includes cosmology, mythology, yoga, and philosophy related to Shaivism.",
    download: "#",
  },
  {
    name: "Skanda Purana",
    description: "The largest Purana, focusing on Skanda (Kartikeya) and Shiva.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Skanda Purana is the largest Purana, primarily glorifying Skanda (Kartikeya) and Shiva. It contains extensive material on temples, festivals, and pilgrimage sites.",
    download: "#",
  },
  {
    name: "Brahma Vaivarta Purana",
    description: "Focuses on Krishna and Radha, and the creation of the universe.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Brahma Vaivarta Purana focuses on Krishna and Radha, and describes the creation of the universe. It contains details about various Vaishnava sects and practices.",
    download: "#",
  },
  {
    name: "Vamana Purana",
    description: "Named after Vishnu's Vamana (dwarf) avatar.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Vamana Purana is named after the Vamana (dwarf) avatar of Vishnu. It includes stories of this incarnation and other myths related to Vishnu and Shiva.",
    download: "#",
  },
  {
    name: "Varaha Purana",
    description: "Named after Vishnu's Varaha (boar) avatar.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Varaha Purana is named after the Varaha (boar) avatar of Vishnu. It contains details about the creation and destruction of the universe, and various religious rites.",
    download: "#",
  },
  {
    name: "Vishnu Purana",
    description: "One of the most important Puranas, focusing on Lord Vishnu.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "The Vishnu Purana is one of the most important of the eighteen Mahapuranas. It primarily centers around Lord Vishnu and his various avatars, particularly Krishna. The text presents an ancient worldview and various aspects of Hindu philosophy.",
    download: "#",
  },
]

const upanishads = [
  {
    name: "Chandogya Upanishad",
    description: "One of the oldest Upanishads, part of the Sama Veda.",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1283248490i/9180861.jpg",
    introduction:
      "The Chandogya Upanishad is one of the oldest Upanishads of Hinduism. It is associated with the Samaveda and is part of the Chandogya Brahmana. The Upanishad belongs to the Tandya school of the Samaveda and is an important text in the Vedanta philosophy.",
  },
  {
    name: "Brihadaranyaka Upanishad",
    description: "One of the principal Upanishads, attached to the Yajur Veda.",
    image: "https://m.media-amazon.com/images/I/811ZoiaUK-L._UF894,1000_QL80_.jpg",
    introduction:
      "The Brihadaranyaka Upanishad is one of the principal Upanishads and one of the oldest Upanishadic scriptures of Hinduism. It is associated with the Shukla Yajurveda. The Brihadaranyaka Upanishad is estimated to have been composed about 700 BCE, excluding some parts estimated to have been composed after the Chandogya Upanishad.",
  },
]

const ramayana = [
  {
    name: "Bala Kanda",
    description: "The book of youth, origin of Rama and his brothers.",
    image: "https://images-eu.ssl-images-amazon.com/images/I/816gCNo6i1L._AC_UL210_SR210,210_.jpg",
    introduction:
      "Bala Kanda, or the Book of Youth, is the first book of the Ramayana. It narrates the birth of Rama and his brothers, their education and marriages.",
  },
  {
    name: "Ayodhya Kanda",
    description: "The book of Ayodhya, Rama's preparation for coronation and exile.",
    image: "https://images-eu.ssl-images-amazon.com/images/I/A1axmu0VHtL._AC_UL210_SR210,210_.jpg",
    introduction:
      "Ayodhya Kanda describes the preparations for Rama's coronation in Ayodhya and his subsequent exile to the forest.",
  },
  {
    name: "Aranya Kanda",
    description: "The book of the forest, life in exile and Sita's abduction.",
    image: "https://m.media-amazon.com/images/I/81gEz9QUTSL._UF894,1000_QL80_.jpg",
    introduction:
      "Aranya Kanda narrates Rama's life in the forest, his encounters with various sages, and the abduction of Sita by Ravana.",
  },
  {
    name: "Kishkindha Kanda",
    description: "The book of the monkey kingdom, alliance with Sugriva.",
    image: "https://m.media-amazon.com/images/I/810-WWwoyyL._AC_UF1000,1000_QL80_.jpg",
    introduction:
      "Kishkindha Kanda tells the story of Rama's alliance with Sugriva and the search for Sita with the help of Hanuman and other vanaras.",
  },
]

const mahabharata = [
  {
    name: "Adi Parva",
    description: "The book of the beginning, origins of the Kuru dynasty.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "Adi Parva is the first of eighteen books of the Mahabharata. It describes the origins of the Kuru dynasty and sets the stage for the great epic.",
  },
  {
    name: "Sabha Parva",
    description: "The book of the assembly hall, including the game of dice.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "Sabha Parva narrates the construction of the royal court (Sabha) at Indraprastha and the infamous game of dice that leads to the exile of the Pandavas.",
  },
  {
    name: "Vana Parva",
    description: "The book of the forest, detailing the Pandavas' exile.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "Vana Parva describes the twelve years of exile of the Pandavas in the forest, filled with numerous sub-stories and philosophical discussions.",
  },
  {
    name: "Virata Parva",
    description: "The book of Virata, the year of hiding for the Pandavas.",
    image: "/placeholder.svg?height=300&width=400",
    introduction:
      "Virata Parva narrates the thirteenth year of exile, where the Pandavas live in disguise in the kingdom of Virata.",
  },
]

function Modal({ item, onClose }) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  if (!item) return null

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className={`bg-white rounded-lg ${isFullScreen ? "w-full h-full" : "max-w-2xl w-full max-h-[90vh]"} overflow-hidden`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-orange-500">{item.name}</h2>
            <div className="flex space-x-2">
              <button
                onClick={toggleFullScreen}
                className="text-gray-500 hover:text-gray-700"
                aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
              >
                {isFullScreen ? <MdZoomOut size={24} /> : <MdZoomIn size={24} />}
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close modal">
                <MdClose size={24} />
              </button>
            </div>
          </div>
          <div className={`relative ${isFullScreen ? "flex-grow" : "h-64"} mb-4`}>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className={`w-full h-full ${isFullScreen ? "object-contain" : "object-cover"} rounded-lg cursor-pointer`}
              onClick={toggleFullScreen}
            />
          </div>
          <div className={`${isFullScreen ? "hidden" : "block"}`}>
            <p className="text-gray-700">{item.introduction}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GranthPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedItem, setSelectedItem] = useState(null)

  const renderContent = () => {
    if (selectedCategory === "Four Vedas") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Four Vedas</h2>
          <p className="text-gray-600 mb-6">
            The Vedas are the oldest sacred texts of Hinduism, composed in Vedic Sanskrit. They are the oldest known
            Sanskrit texts and are considered the foundation of Hindu philosophy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vedas.map((veda) => (
              <div
                key={veda.name}
                className="bg-white rounded-lg border hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
                onClick={() => setSelectedItem(veda)}
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
      )
    } else if (selectedCategory === "18 Puranas") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">The 18 Puranas</h2>
          <p className="text-gray-600 mb-6">
            The Puranas are a vast genre of Indian literature about a wide range of topics, particularly myths, legends
            and other traditional lore. There are 18 major Puranas, each focusing on different deities and aspects of
            Hindu philosophy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {puranas.map((purana) => (
              <div
                key={purana.name}
                className="bg-white rounded-lg border hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="aspect-w-16 aspect-h-9 cursor-pointer" onClick={() => setSelectedItem(purana)}>
                  <img
                    src={purana.image || "/placeholder.svg"}
                    alt={purana.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{purana.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{purana.description}</p>
                  </div>
                  <a
                    href={purana.download}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    } else if (selectedCategory === "Upanishads") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Upanishads</h2>
          <p className="text-gray-600 mb-6">
            The Upanishads are late Vedic Sanskrit texts of religious teaching and ideas still revered in Hinduism.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upanishads.map((upanishad) => (
              <div
                key={upanishad.name}
                className="bg-white rounded-lg border hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
                onClick={() => setSelectedItem(upanishad)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={upanishad.image || "/placeholder.svg"}
                    alt={upanishad.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{upanishad.name}</h3>
                  <p className="text-sm text-gray-600">{upanishad.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    } else if (selectedCategory === "Ramayana") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Ramayana</h2>
          <p className="text-gray-600 mb-6">
            The Ramayana is one of the two major Sanskrit epics of ancient India, the other being the Mahabharata. It
            tells the story of Rama, an avatar of the Hindu god Vishnu, and his quest to rescue his wife Sita from the
            demon king Ravana.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ramayana.map((kanda) => (
              <div
                key={kanda.name}
                className="bg-white rounded-lg border hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
                onClick={() => setSelectedItem(kanda)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={kanda.image || "/placeholder.svg"}
                    alt={kanda.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{kanda.name}</h3>
                  <p className="text-sm text-gray-600">{kanda.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    } else if (selectedCategory === "Mahabharata") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Mahabharata</h2>
          <p className="text-gray-600 mb-6">
            The Mahabharata is one of the two major Sanskrit epics of ancient India, the other being the Ramayana. It
            narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and
            the Pandava princes and their successors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mahabharata.map((parva) => (
              <div
                key={parva.name}
                className="bg-white rounded-lg border hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
                onClick={() => setSelectedItem(parva)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={parva.image || "/placeholder.svg"}
                    alt={parva.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{parva.name}</h3>
                  <p className="text-sm text-gray-600">{parva.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    } else {
      return (
        <div className="text-center text-gray-600">
          <p>Please select a category from the sidebar to view content.</p>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
     

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r min-h-screen">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <nav className="space-y-2">
              {[
                { icon: "📚", text: "Four Vedas", desc: "Rigveda, Yajurveda, Samaveda, Atharvaveda" },
                { icon: "📖", text: "18 Puranas", desc: "Vishnu Purana, Shiva Purana, Bhagavata Purana" },
                { icon: "🕉️", text: "Upanishads", desc: "Isha, Kena, Katha, Prashna, Mundaka" },
                { icon: "🎯", text: "Ramayana", desc: "Valmiki Ramayana, Ramcharitmanas" },
                { icon: "📑", text: "Mahabharata", desc: "From Adi Parva to Swargarohana Parva" },
              ].map((item) => (
                <div key={item.text} className="group">
                  <a
                    href="#"
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      selectedCategory === item.text ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-50"
                    }`}
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

            {renderContent()}

            {/* Filter Button - Mobile Only */}
            <div className="fixed bottom-6 right-6 md:hidden">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg">Filter</button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  )
}

