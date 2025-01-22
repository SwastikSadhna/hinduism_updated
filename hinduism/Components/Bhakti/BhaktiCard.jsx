import { FaPlay, FaHeart, FaShare } from 'react-icons/fa'

export default function BhaktiCard({ type, description, count, path, image, author }) {

  return (
    <div
              key={type}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <img src={image} className='w-[15%] md:w-[15%] lg:w-[20%]'></img>
                <div>
                  <h3 className="font-semibold">{type}</h3>
                  <p className='text-sm text-gray-600 mb-2'>{author? author: "Unknown"}</p>
                  <p className="text-[12px] text-gray-500">{description.slice(0, 100) + "..."}</p>
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

