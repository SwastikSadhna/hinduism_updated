import { FaBook, FaHeart, FaShare } from 'react-icons/fa'

export default function VedaContent() {
  const vedas = [
    {
      name: "ऋग्वेद",
      description: "सबसे पुराना वेद, मंत्रों का संग्रह",
      verses: 10552
    },
    {
      name: "यजुर्वेद",
      description: "यज्ञ विधियों का वेद",
      verses: 1975
    },
    {
      name: "सामवेद",
      description: "संगीतमय मंत्रों का वेद",
      verses: 1875
    },
    {
      name: "अथर्ववेद",
      description: "जीवन के व्यावहारिक पहलुओं का वेद",
      verses: 5987
    }
  ]

  return (
    <div className="space-y-4">
      {vedas.map((veda, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-lg flex items-center">
                <FaBook className="text-orange-500 mr-2" />
                {veda.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{veda.description}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:text-orange-500 transition-colors">
                <FaHeart />
              </button>
              <button className="p-2 hover:text-orange-500 transition-colors">
                <FaShare />
              </button>
            </div>
          </div>
          <p className="text-gray-800 mt-2">श्लोक संख्या: {veda.verses}</p>
        </div>
      ))}
    </div>
  )
}

