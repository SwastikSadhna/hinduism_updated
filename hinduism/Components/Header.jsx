import React from "react";
import Button from "./Button";
import { imageDetails } from "../resources"; // Use imageDetails for structured access
import "../src/App.css";

const Header = () => {
  return (
    <header
      className="header w-full px-10 py-3 fixed z-10"
      style={{ backgroundColor: `rgba(255, 255, 255, 0.35)` }}
    >
      <nav className="w-full flex items-center justify-between">
        <div className="flex justify-center items-center text-2xl gap-3">
          <img
            src={imageDetails.logo.src} // Use imageDetails for structured access
            className="w-10 h-10 rounded-full"
            alt={imageDetails.logo.alt} // Use descriptive alt text
          />
          SANATAN
        </div>

        <div className="rounded-2xl flex items-center text-lg text-black tracking-wide pl-10 gap-10">
          <a href="#home">Home</a>
          <a href="#books">Books</a>
          <a href="#journey">Avatar</a>
          <a href="#about">Bhakti</a>
          <a href="#guests">Granth</a>
          <a href="#routine">Routine</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
