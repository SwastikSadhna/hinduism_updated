import { FaQuoteLeft, FaHeart, FaShare } from 'react-icons/fa'

export default function DuhaContent() {
  const duhas = [
    {
      text: "जो तू माने अपना, तो सबको अपना मान। सब अपना हो जायेगा, तेरा कोई न जान।",
      author: "कबीर दास"
    },
    {
      text: "दया धरम का मूल है, पाप मूल अभिमान। तुलसी दया न छोड़िये, जब लग घट में प्रान।",
      author: "तुलसीदास"
    },
  ]

  return (
    <div className="space-y-4">
      {duhas.map((duha, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start mb-3">
            <FaQuoteLeft className="text-orange-500 mr-2 mt-1" />
            <div>
              <p className="text-gray-800 font-medium">{duha.text}</p>
              <p className="text-sm text-gray-600 mt-2">- {duha.author}</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button className="p-2 hover:text-orange-500 transition-colors">
              <FaHeart />
            </button>
            <button className="p-2 hover:text-orange-500 transition-colors">
              <FaShare />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

