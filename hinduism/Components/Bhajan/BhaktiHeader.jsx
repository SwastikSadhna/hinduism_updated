import { IoInformationCircleOutline } from "react-icons/io5"

export default function Header() {
  return (
    <div className="top-0 left-0 right-0 bg-white z-10 p-4 border-b">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-2">Bhakti Title</h1>
        <p className="text-gray-600 text-center text-sm mb-2">Bhajan short description. About the bhajan or content.</p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
          <span>Key Words</span>
          <IoInformationCircleOutline className="text-gray-400" />
          <span className="mx-2">•</span>
          <span>Type</span>
        </div>
      </div>
    </div>
  )
}

