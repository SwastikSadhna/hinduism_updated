import { BookCover } from "./BookCover"

export function BookHeader({ title, author, coverImage, backgroundImage, alt }) {
  return (
    <div className="relative">
      {/* Background Image Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backgroundImage || "/placeholder.svg?height=500&width=1200"}
            alt={alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
              {/* Book Cover */}
              <div className="flex-shrink-0">
                <BookCover imageUrl={coverImage} alt={title} />
              </div>

              {/* Book Info */}
              <div className="text-center md:text-left md:pb-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                  {title || "Book Title"}
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-200">
                  <span className="text-sm uppercase tracking-wider font-medium">Author</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-lg md:text-xl font-medium">{author || "Unknown Author"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
