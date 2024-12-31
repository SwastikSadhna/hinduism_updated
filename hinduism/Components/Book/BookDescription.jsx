export function BookDescription({ description }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About the Book</h2>
        <div className="prose prose-lg">
          <p className="text-gray-700 leading-relaxed text-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

