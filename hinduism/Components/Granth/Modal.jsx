"use client"

import React, { useState } from "react"
import { MdClose, MdZoomIn, MdZoomOut } from "react-icons/md"

const Modal = ({ item, onClose }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  if (!item) return null

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className={`bg-white rounded-lg ${isFullScreen ? "w-full h-full" : "max-w-2xl w-full max-h-[90vh]"} overflow-hidden`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-orange-500">{item.name || item.title}</h2>
            <div className="flex space-x-2">
              <button
                onClick={toggleFullScreen}
                className="text-gray-500 hover:text-gray-700"
                aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
              >
                {isFullScreen ? <MdZoomOut size={24} /> : <MdZoomIn size={24} />}
              </button>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close modal">
                <MdClose size={24} />
              </button>
            </div>
          </div>
          <div className={`relative ${isFullScreen ? "flex-grow" : "h-64"} mb-4`}>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name || item.title}
              className={`w-full h-full ${isFullScreen ? "object-contain" : "object-cover"} rounded-lg cursor-pointer`}
              onClick={toggleFullScreen}
            />
          </div>
          <div className={`${isFullScreen ? "hidden" : "block"}`}>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

