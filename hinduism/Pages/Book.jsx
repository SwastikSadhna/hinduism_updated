"use client"

import { BookHeader } from "../Components/Book/BookHeader"
import { BookDescription } from "../Components/Book/BookDescription"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import API_CONFIG from "../src/config/api"

export default function BookDetailsPage() {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${API_CONFIG.baseUrl}/book/${id}`)
        setBook(response.data[0])
      } catch (err) {
        console.error(err)
        setError("Failed to load book details")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchBook()
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading book details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BookHeader
        title={book.title}
        author={book.author}
        coverImage={book.image}
        alt={book.title}
        backgroundImage={book.cover_image}
      />
      <BookDescription description={book.description} refLink={book.link} />
    </div>
  )
}
