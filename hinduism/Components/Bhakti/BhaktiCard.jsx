"use client"

import { FaHeart, FaShare, FaUser, FaEye } from "react-icons/fa"
import { useState } from "react"

export default function BhaktiCard({ type, description, count, path, image, author }) {
const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 hover:-translate-y-1">
      <div className="flex p-3 gap-4">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src={image || "https://i.pinimg.com/736x/af/78/0a/af780ac1996043be49d38abf728aae7d.jpg"}
              alt={type}
              className="w-20 rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {count || 0}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors duration-200 line-clamp-1 mb-1">
            {type}
          </h3>

          <div className="flex items-center gap-2 mb-2">
            <FaUser className="w-3 h-3 text-gray-400" />
            <p className="text-sm text-gray-600">{author || "Unknown"}</p>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
            {description ? description.slice(0, 100) + "..." : "No description available."}
          </p>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-1.5 rounded-lg transition-colors ${
                  isLiked ? "text-red-500 bg-red-50" : "text-gray-400 hover:text-red-500"
                }`}
              >
                <FaHeart className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-blue-500 rounded-lg transition-colors">
                <FaShare className="w-4 h-4" />
              </button>
            </div>

            <button className="flex items-center gap-1 px-4 pb-3 pt-2 bg-orange-500 text-white text-sm font-medium rounded-tl-lg hover:bg-orange-600 transition-colors -mb-8 -mr-4">
              <FaEye className="w-4 h-4" />
              Read
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// "use client"

// import { FaHeart, FaShare, FaUser, FaEye } from "react-icons/fa"
// import { useState } from "react"

// // Alternative compact variant
// export function BhaktiCardCompact({ type, description, count, path, image, author }) {
//   const [isLiked, setIsLiked] = useState(false)

//   return (
//     <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 hover:-translate-y-1">
//       <div className="flex p-4 gap-4">
//         {/* Image Section */}
//         <div className="flex-shrink-0">
//           <div className="relative">
//             <img
//               src={image || "/placeholder.svg?height=80&width=80"}
//               alt={type}
//               className="w-20 h-20 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
//               {count || 0}
//             </div>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="flex-1 min-w-0">
//           <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors duration-200 line-clamp-1 mb-1">
//             {type}
//           </h3>

//           <div className="flex items-center gap-2 mb-2">
//             <FaUser className="w-3 h-3 text-gray-400" />
//             <p className="text-sm text-gray-600">{author || "Unknown"}</p>
//           </div>

//           <p className="text-gray-600 text-sm line-clamp-2 mb-3">
//             {description ? description.slice(0, 100) + "..." : "No description available."}
//           </p>

//           {/* Actions */}
//           <div className="flex items-center justify-between">
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setIsLiked(!isLiked)}
//                 className={`p-1.5 rounded-lg transition-colors ${
//                   isLiked ? "text-red-500 bg-red-50" : "text-gray-400 hover:text-red-500"
//                 }`}
//               >
//                 <FaHeart className="w-3 h-3" />
//               </button>
//               <button className="p-1.5 text-gray-400 hover:text-blue-500 rounded-lg transition-colors">
//                 <FaShare className="w-3 h-3" />
//               </button>
//             </div>

//             <button className="flex items-center gap-1 px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded-lg hover:bg-orange-600 transition-colors">
//               <FaEye className="w-3 h-3" />
//               Read
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const BhaktiCard = ({ type, description, count, path, image, author }) => {
//   return (
//     <div>
//       <BhaktiCardCompact
//         type="Compact Card"
//         description="This is a compact card description."
//         count={10}
//         path="/compact"
//         image="/compact-image.svg"
//         author="Author Name"
//       />
//     </div>
//   )
// }

// export default BhaktiCard
