import React from "react";
import "../src/css/hinduism.css";
import { imageDetails } from "../resources.js";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" id="navigation">
      <div className="container-fluid Navbar">
        <img
          src={imageDetails.logo.src}
          alt={imageDetails.logo.alt}
          height={35}
          width={35}
        />
        <h3 className="mx-auto my-auto m-lg-1 fw-bold">सनातन</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item itemlist">
              <a href="/" className="nav-link active" aria-current="page">
                मुख्य पृष्ठ
              </a>
            </li>
            <li className="nav-item itemlist">
              <a href="/shlokas" className="nav-link">
                श्लोक
              </a>
            </li>
            <li className="nav-item itemlist">
              <a href="/book_page" className="nav-link">
                भागवद गीता
              </a>
            </li>
            <li className="nav-item dropdown itemlist">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                हिंदू देवता
              </a>
              <ul className="dropdown-menu itemlist">
                <li>
                  <a href="/avatar?god=vishnu" className="dropdown-item">
                    विष्णु अवतार
                  </a>
                </li>
                <li>
                  <a href="/avatar?god=shiva" className="dropdown-item">
                    शिव अवतार <span className="badge bg-primary">New</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/avatar?god=dashmahavidhya"
                    className="dropdown-item"
                  >
                    दशमहाविद्या
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item itemlist">
              <a href="/routine-1" className="nav-link">
                सात्विक दिनचर्या
              </a>
            </li>
            <li className="nav-item dropdown itemlist">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                भजन
              </a>
              <ul className="dropdown-menu itemlist">
                <li>
                  <a href="/Bhajan(1)" className="dropdown-item">
                    भजन
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    दूहे/छंद
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    आरती
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    नैवेद्य श्लोक <span className="badge bg-primary">New</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown itemlist">
              <a
                className="nav-link dropdown-toggle"
                href="/Mantra-project/Know_sanatan"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                सनातन
              </a>
              <ul className="dropdown-menu itemlist">
                <li>
                  <a href="/4Veds" className="dropdown-item">
                    4 वेद
                  </a>
                </li>
                <li>
                  <a href="/18puran" className="dropdown-item">
                    18 पुराण
                  </a>
                </li>
                <li>
                  <a href="/33Kotidevta" className="dropdown-item">
                    33 कोटि देवता <span className="badge bg-primary">New</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    108 उपनिषद
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-red-500">hii there</h1>
    </nav>
  );
}

export default Navbar;
