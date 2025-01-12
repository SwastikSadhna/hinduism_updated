import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"; // Added FaChevronDown icon
import { imageDetails } from "../resources";
import "../src/App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle
  const [isRoutineOpen, setIsRoutineOpen] = useState(false); // State for Routine dropdown

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the Routine dropdown
  const toggleRoutine = () => {
    setIsRoutineOpen(!isRoutineOpen);
  };

  return (
    <header
      className="header w-full px-6 py-3 shadow-md z-20"
      style={{ backgroundColor: `#FFF7ED` }}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center text-2xl gap-3">
          <img
            src={imageDetails.logo.src}
            className="w-10 h-10 rounded-full"
            alt={imageDetails.logo.alt}
          />
          SANATAN
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex rounded-2xl items-center text-lg text-[#33281E] tracking-wide gap-10">
          <Link to="/" className="hover:text-[#FF7722]">Home</Link>
          <Link to="/Book" className="hover:text-[#FF7722]">Books</Link>
          <Link to="" className="hover:text-[#FF7722]">Avatar</Link>
          <Link to="/Bhakti" className="hover:text-[#FF7722]">Bhakti</Link>
          <Link to="" className="hover:text-[#FF7722]">Granth</Link>
          <div className="relative group">
            <button onClick={toggleRoutine} className="hover:text-[#FF7722] flex items-center gap-1">
              Routine <FaChevronDown />
            </button>
            {isRoutineOpen && (
              <div className="absolute top-full left-0 bg-[#FFF7ED] shadow-md rounded-md mt-2">
                <Link to="/Routine/Yoga" className="block px-4 py-2 hover:bg-gray-200">Yoga</Link>
                <Link to="/Routine/Shlok" className="block px-4 py-2 hover:bg-gray-200">Shlok</Link>
              </div>
            )}
          </div>
          <Link to="/About" className="hover:text-[#FF7722]">About Us</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-[#33281E] focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF7ED] w-full absolute top-16 left-0 shadow-lg rounded-b-xl">
          <ul className="flex flex-col items-center gap-5 py-5 text-lg text-[#33281E]">
            <li>
              <Link to="/" onClick={toggleMenu} className="hover:text-[#FF7722]">Home</Link>
            </li>
            <li>
              <Link to="/Book" onClick={toggleMenu} className="hover:text-[#FF7722]">Books</Link>
            </li>
            <li>
              <Link to="" onClick={toggleMenu} className="hover:text-[#FF7722]">Avatar</Link>
            </li>
            <li>
              <Link to="/Shlok" onClick={toggleMenu} className="hover:text-[#FF7722]">Bhakti</Link>
            </li>
            <li>
              <Link to="" onClick={toggleMenu} className="hover:text-[#FF7722]">Granth</Link>
            </li>
            <li>
              <button onClick={toggleRoutine} className="hover:text-[#FF7722] flex items-center gap-1">
                Routine <FaChevronDown />
              </button>
              {isRoutineOpen && (
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/Routine/Yoga" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-200">Yoga</Link>
                  </li>
                  <li>
                    <Link to="/Routine/Shlok" onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-200">Shlok</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/About" onClick={toggleMenu} className="hover:text-[#FF7722]">About</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
