import { BookCover } from './BookCover'
import { ActionButton } from './ActionButtons'

export function BookHeader({ title, author, coverImage, backgroundImage, alt }) {
  return (
    <div className="relative min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0 ">
        <img
          src={backgroundImage}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center  gap-6">
          <BookCover imageUrl={coverImage} alt={title} />
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {title}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Author : {author}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <ActionButton variant="primary">View Book</ActionButton>
              <ActionButton variant="secondary">Download</ActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

