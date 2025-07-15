import { ActionButton } from "./ActionButtons"

export function BookDescription({ description, refLink }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 md:flex">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">About This Book</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {description || "No description available for this book."}
              </p>
            </div>
          </div>
        </div>
        
          {/* Action Buttons */}
          <div className="flex sm:flex-row gap-3 mt-6 ml-3 justify-center md:justify-start">
            <a
              href={refLink || "#"}
              target={refLink ? "_blank" : "_self"}
              rel={refLink ? "noopener noreferrer" : undefined}
              className="inline-block"
            >
              <ActionButton variant="primary">View&nbsp;Book</ActionButton>
            </a>
            <a
              href={refLink || "#"}
              target={refLink ? "_blank" : "_self"}
              rel={refLink ? "noopener noreferrer" : undefined}
              className="inline-block"
            >
              <ActionButton variant="secondary">Download</ActionButton>
            </a>
          </div>
      </div>
      
          {/* Additional Info Section */}
          <div className="py-4 border-t border-gray-200 px-5 max-w-5xl mx-auto">
            <div className="sm:flex justify-between space-y-5 sm:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Format</h3>
                <p className="text-gray-600">Digital & Print</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Language</h3>
                <p className="text-gray-600">English</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-semibold text-gray-900 mb-1">Availability</h3>
                <p className="text-gray-600">Available Now</p>
              </div>
            </div>
          </div>
    </div>
  )
}
