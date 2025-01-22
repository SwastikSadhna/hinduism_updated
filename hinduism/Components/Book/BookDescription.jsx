export function BookDescription({ description }) {
  return (
    <div className="container mx-auto py-7">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Introduction</h2>
        <div className="prose prose-lg">
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

