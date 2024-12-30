import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../Components/Header'
import Home from "../Pages/home";
import Book from '../Pages/Book'
// import Footer from '../Components/Footer'
function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book"element={<Book />} />
        </Routes>
        {/* <Footer />  */}
      </div>
    </Router>
  );
}

export default App;
