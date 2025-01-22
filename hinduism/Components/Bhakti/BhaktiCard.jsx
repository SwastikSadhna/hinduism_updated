import { FaPlay, FaHeart, FaShare } from 'react-icons/fa'

export default function BhaktiCard({ type, description, count, path, image }) {

  return (
    <div
              key={type}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <button className="p-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                  <FaPlay />
                </button>
                <div>
                  <h3 className="font-semibold">{type}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="p-2 hover:text-orange-500 transition-colors">
                  <FaHeart />
                </button>
                <button className="p-2 hover:text-orange-500 transition-colors">
                  <FaShare />
                </button>
              </div>
            </div>
  );
}

