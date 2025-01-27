import { BookHeader } from '../Components/Book/BookHeader'
import { BookDescription } from '../Components/Book/BookDescription'
import { imageDetails } from '../resources'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import API_CONFIG from '../src/config/api';

export default function BookDetailsPage() {

  const [book, setBook] = new useState({})
  const { id } = useParams();

  useEffect(() => {
    axios.get(API_CONFIG.baseUrl + `/book/${id}`).then((res) => {
      setBook(res.data.data[0])
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col">
      <BookHeader
        title={book.title}
        author={book.author}
        coverImage={book.image}
        alt={book.title}
        backgroundImage={book.cover_image}
        
      />
      
      <BookDescription
        description={book.description}
        refLink={book.link}
      />
      
      <div className="flex-grow" />
      
    </div>
  )
}