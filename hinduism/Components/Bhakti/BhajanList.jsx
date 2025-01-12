import { FaPlay, FaHeart, FaShare } from 'react-icons/fa'

export default function BhajanList() {
  const bhajans = [
    {
      title: 'Mere Shyam',
      type: 'Traditional',
    },
    {
      title: 'Achyutam Keshavam',
      type: 'Traditional',
    },
    {
      title: 'Krishna Govinda',
      type: 'Traditional',
    },
    {
      title: 'Om Jai Jagdish Hare',
      type: 'Traditional',
    },
    {
      title: 'Shiv Tandav Stotram',
      type: 'Ravanasura',
    },
  ]

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bhajans</h1>
        <input
          type="search"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg w-64"
        />
      </div>

      <div className="space-y-4">
        {bhajans.map((bhajan) => (
          <div
            key={bhajan.title}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <button className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <FaPlay />
              </button>
              <div>
                <h3 className="font-semibold">{bhajan.title}</h3>
                <p className="text-sm text-gray-600">{bhajan.type}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="p-2 hover:text-blue-500 transition-colors">
                <FaHeart />
              </button>
              <button className="p-2 hover:text-blue-500 transition-colors">
                <FaShare />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

