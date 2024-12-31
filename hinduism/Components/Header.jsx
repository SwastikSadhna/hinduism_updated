import React from "react";
import { Link } from "react-router-dom"; 
import Button from "./Button";
import { imageDetails } from "../resources"; 
import "../src/App.css";
// rgba(255, 255, 255, 0.35)
const Header = () => {
  return (
    <header
      className="header w-full px-10 py-3 fixed z-10"
      style={{ backgroundColor: `#FFF7ED` }}
    >
      <nav className="w-full flex items-center justify-between">
        <div className="flex justify-center items-center text-2xl gap-3">
          <img
            src={imageDetails.logo.src} 
            className="w-10 h-10 rounded-full"
            alt={imageDetails.logo.alt} 
          />
          SANATAN
        </div>

        <div className="rounded-2xl flex items-center text-lg text-[#33281E] tracking-wide pl-10 gap-10 ">
          <Link to="/" className="hover:text-[#FF7722]">Home</Link> 
          <Link to="/Book"  className="hover:text-[#FF7722]">Books</Link> 
          <Link to=""  className="hover:text-[#FF7722]">Avatar</Link> 
          <Link to=""  className="hover:text-[#FF7722]">Bhakti</Link> 
          <Link to=""  className="hover:text-[#FF7722]">Granth</Link> 
          <Link to=""  className="hover:text-[#FF7722]">Routine</Link> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
