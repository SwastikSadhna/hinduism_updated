import { BookCover } from './BookCover'


export function BookHeader({ title, author, coverImage, backgroundImage, alt }) {
  return (
    <div className="relative h-[300px] flex items-center">
      <div className="absolute inset-0 z-0 ">
        <img
          src={backgroundImage}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>
      
      <div className="relative z-10 container px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <BookCover imageUrl={coverImage} alt={title} />
          <div className="md:absolute text-center md:text-left md:bottom-5 md:left-[30%] lg:left-[20%]">
            <h1 className="text-4xl tracking-wide md:text-5xl font-bold text-white mb-2">
              {title}
            </h1>
            <p className="text-right tracking-wide text-gray-400 text-xl text-gray-200 mb-6">
              <span className='text-sm'>Author :</span> {author}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

