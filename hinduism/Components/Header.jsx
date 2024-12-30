import React from "react";
import { Link } from "react-router-dom"; 
import Button from "./Button";
import { imageDetails } from "../resources"; 
import "../src/App.css";

const Header = () => {
  return (
    <header
      className="header w-full px-10 py-3 fixed z-10"
      style={{ backgroundColor: `rgba(255, 255, 255, 0.35)` }}
    >
      <nav className="w-full flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex justify-center items-center text-2xl gap-3">
          <img
            src={imageDetails.logo.src} 
            className="w-10 h-10 rounded-full"
            alt={imageDetails.logo.alt} 
          />
          SANATAN
        </div>

        <div className="rounded-2xl flex items-center text-lg text-black tracking-wide pl-10 gap-10">
          <Link to="/">Home</Link> 
          <Link to="/Book">Books</Link> 
          <Link to="">Avatar</Link> 
          <Link to="">Bhakti</Link> 
          <Link to="">Granth</Link> 
          <Link to="">Routine</Link> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
