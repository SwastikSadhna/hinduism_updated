import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Pages/home";
import Book from "../Pages/Book";
import Books from "../Pages/Books"
import About from "../Pages/About";
import Bhakti from "../Pages/Bhakti";
import BhaktiLayout from "../Pages/BhaktiLayout";
import BhajanContent from '../Components/Bhakti/Content/BhajanContent';
import DuhaContent from '../Components/Bhakti/Content/DuhaContent';
import ChhandContent from '../Components/Bhakti/Content/ChhandContent';
import VedaContent from '../Components/Bhakti/Content/VedaContent';
import DevtasContent from '../Components/Bhakti/Content/DevtasContent' 
import Yoga from "../Pages/Yoga";
import Temple from "../Pages/Temple2"
import Shlok from "../Pages/Shlok";
import { ContentProvider } from "../Components/Bhakti/ContentContext"; // Import ContentProvider
import Templepage from "../Components/Home/Templepage";
import VishnuAvatarsApp from '../Pages/Avatar'

function App() {
  return (
    <ContentProvider>
      {" "}
      {/* Wrap the app or part of it where you need the context */}
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Routine/Yoga" element={<Yoga />} />
            <Route path="/Temple/:id" element={<Temple />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/Book/:id" element={<Book />} />
            <Route path="/About" element={<About />} />
            <Route path="/Bhakti" element={<Bhakti />} />
            <Route path="/Routine/Shlok" element={<Shlok />} />
            <Route path="/Bhakti/*" element={<BhaktiLayout />}>
              <Route path="bhajans" element={<BhajanContent />} />
              <Route path="duha" element={<DuhaContent />} />
              <Route path="chhand" element={<ChhandContent />} />
              <Route path="vedas" element={<VedaContent />} />
              <Route path="devtas" element={<DevtasContent />} />
            </Route>
            <Route path="/Templepage" element={<Templepage />} />
            <Route path="/Avatar" element={<VishnuAvatarsApp />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;
