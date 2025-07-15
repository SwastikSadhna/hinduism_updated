const Card = ({ title, description, image }) => {
  return (
    <div className="group relative bg-white rounded-tl-full rounded-br-full hover:rounded-br-3xl hover:rounded-tl-3xl shadow-lg hover:shadow-2xl transition-all duration-100 transform hover:-translate-y-2 overflow-hidden max-w-sm pt-32 hover:pt-10 -mt-10">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=256&width=384"}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{description}</p>
      </div>

      <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default Card
