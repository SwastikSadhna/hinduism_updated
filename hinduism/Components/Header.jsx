import React from "react";
import Button from "./Button";
import '../src/App.css'
const Header = () => {
  return (
    <header className="header w-full px-10 py-3 fixed z-10" style={{ backgroundColor: `rgba(255, 255, 255, 0.35)` }}>
      <nav className="w-full flex items-center justify-between">
        <div className="flex justify-center items-center text-2xl gap-3">
          <img
            src="./src/resources/logo.png"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          SANATAN
        </div>

        <div className="rounded-2xl flex items-center text-lg  text-black tracking-wide pl-10 gap-10">
          <a href="#home">Home</a>
          <a href="#books">Books</a>
          <a href="#journey">Avatar</a>
          <a href="#about">Bhakti</a>
          <a href="#guests">Granth</a>
          <a href="#guests">Routine</a>
          <Button
            text="Book Yatra"
            className="book-button bg-orange-600 border-0 py-2 px-3 rounded-sm  text-white"
          />
        </div>
      </nav>
    </header >
  );
};

export default Header;
