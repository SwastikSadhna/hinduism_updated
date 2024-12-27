import React from "react";
import Button from "./Button";
const Header = () => {
  return (
    <header className="header rounded-2xl w-full h-auto px-20 py-3 fixed z-10 bg-white">
      <nav className="w-full flex items-center justify-between h-20">
        <div className="flex justify-center items-center text-2xl gap-3">
          <img
            src="./src/resources/logo.png"
            className="w-20 h-20 rounded-full"
            alt=""
          />
          SANATAN
        </div>

        <div className="bg-slate-50 rounded-2xl flex items-center text-lg font-bold text-slate-500 pl-10 gap-10">
          <a href="#home">Home</a>
          <a href="#books">Books</a>
          <a href="#journey">Avatar</a>
          <a href="#about">Bhakti</a>
          <a href="#guests">Granth</a>
          <a href="#guests">Routine</a>
          <Button
            text="Book Yatra"
            className="book-button bg-orange-600 border-0 text-white"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
