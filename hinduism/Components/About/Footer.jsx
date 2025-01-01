export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold">YCS Group</h3>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} YCS Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  