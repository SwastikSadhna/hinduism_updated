export function BookCover({ imageUrl, alt }) {
  return (
    <div className="relative group">
      <div className="w-48 h-72 md:w-56 md:h-80 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
        <img
          src={imageUrl || "/placeholder.svg?height=320&width=224"}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
