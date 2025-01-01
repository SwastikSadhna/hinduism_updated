import { BookHeader } from '../Components/Book/BookHeader'
import { BookDescription } from '../Components/Book/BookDescription'
import Footer from '../Components/Footer'
import { imageDetails } from '../resources'

export default function BookDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className='mt-[9vh] '></div>
      <BookHeader
        title={imageDetails.Mahabharat.alt}
        author="Maharshi Ved Vyas"
        coverImage={imageDetails.Mahabharat.src}
        alt={imageDetails.Sanatan3.alt}
        backgroundImage={imageDetails.Sanatan3.src}
      />
      
      <BookDescription
        description="The Mahabharata is an ancient Indian epic where the main story revolves around two branches of a family - the Pandavas and Kauravas - who, in the Kurukshetra War, battle for the throne of Hastinapura. Interwoven into this narrative are several smaller stories about people dead or living, and philosophical discourses."
      />
      
      <div className="flex-grow" />
      
      <Footer />
    </div>
  )
}

