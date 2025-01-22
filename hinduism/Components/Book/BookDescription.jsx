import { ActionButton } from './ActionButtons'

export function BookDescription({ description, refLink }) {
  return (
    <div className="container mx-auto py-7">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Introduction</h2>
        <div className="prose prose-lg">
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
          <div className="my-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href={ refLink? refLink: "#"} target='_blank'><ActionButton variant="primary">View Book</ActionButton></a>
              <a href={ refLink? refLink: "#"} target='_blank'><ActionButton variant="secondary">Download</ActionButton></a>
            </div>
      </div>
    </div>
  )
}

