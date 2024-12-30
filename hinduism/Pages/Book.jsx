import React from "react";
import BookHeader from "../Components/Book/BookHeader";
import BookDescription from "../Components/Book/BookDescription";
import ActionButtons from "../Components/Book/ActionButtons";
import Footer from "../Components/Book/Footer";
import { imageDetails } from "../resources";
const Book = () => {
  const bookData = {
    image: imageDetails.BhagvadGeeta.src,
    title: "Book Name",
    author: "Book Author",
    description: `Book Description here. Book Description here. Book Description here.
      Book Description here. Book Description here. Book Description here.`,
  };

  const handleView = () => {
    console.log("View Book Clicked");
  };

  const handleDownload = () => {
    console.log("Download Clicked");
  };

  return (
    <div className="book-page bg-gray-100 min-h-screen flex flex-col items-center m-auto">
        <div className="h-[8vh]"></div>
      <BookHeader
        image={bookData.image}
        title={bookData.title}
        author={bookData.author}
      />
      <BookDescription description={bookData.description} />
      <ActionButtons onView={handleView} onDownload={handleDownload} />
      <Footer />
    </div>
  );
};

export default Book;
