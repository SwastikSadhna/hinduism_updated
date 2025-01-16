import { useLocation } from 'react-router-dom'

export default function ContentLayout({ children }) {
  const location = useLocation()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold capitalize">
          {location.pathname.split('/')[1] || 'Home'}
        </h1>
        <input
          type="search"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg w-64"
        />
      </div>
      {children}
    </div>
  )
}

