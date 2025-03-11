import React from "react"

const ItemCard = ({ item, setSelectedItem }) => {
  return (
    <div
      className="bg-white rounded-lg border hover:shadow-lg transition-shadow flex flex-col cursor-pointer"
      onClick={()=>setSelectedItem(item)}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex-grow flex gap-2 flex-col">
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-sm text-gray-600">
          {item.description.length > 35 ? `${item.description.slice(0, 35)}...` : item.description}
        </p>
        {item.author && <p className="text-sm text-gray-600">{item.author}</p>}
        {item.year && <p className="text-sm text-gray-600">{item.year}</p>}
        {item.link && (
          <a
            href={item.link}
            className="text-orange-500 hover:text-orange-600 text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        )}
      </div>
    </div>
  )
}

export default ItemCard

