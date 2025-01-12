import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Home from "../Pages/home";
import Book from '../Pages/Book'
import About from '../Pages/About'
import Bhakti from '../Pages/Bhakti'
import Shlok from "../Pages/Shlok";
function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book"element={<Book />} />
          <Route path="/About"element={<About />} />
          <Route path="/Bhakti" element={<Bhakti />} />
          <Route path="/Routine/Shlok" element={<Shlok />}/>
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
