"use client"

import { useEffect, useState } from "react"
import { MdClose, MdZoomIn, MdZoomOut } from "react-icons/md"
import axios from "axios"
import API_CONFIG from "../../src/config/api"
import Sidebar from "./Sidebar"
import ItemCard from "./ItemCard"
import Modal from "../Granth/Modal"
import Loading from "../../Pages/Loading"

export default function ShlokaPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [granth, setGranth] = useState({});
  const [granthitem, setGranthItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Left) */}
      <Sidebar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        setGranth={setGranth}
        setGranthItem={setGranthItem}
        setIsLoading={setIsLoading}
      />

      {/* Main Content (Right) */}
      {isLoading ? <div className="block w-full"><Loading /></div> : <main className="flex-1 p-8 overflow-y-auto w-full">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">{granth?.title}</h1>
          <p className="text-gray-600 mb-8">
            {granth?.description}
          </p>

          {/* List of Granth Items */}
          {granthitem?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {granthitem?.map((item) => (
                <ItemCard item={item} setSelectedItem={setSelectedItem} key={item.id}/>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Select a category to see the granth items.</p>
          )}
        </div>
      </main>}

      {/* Modal */}
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}


