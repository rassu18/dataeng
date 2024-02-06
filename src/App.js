import "./App.css";
//import hero from "./images/hero.jpg";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about/about.js";
import Contact from "./contact/contact.js";
import Home from "./home/home.js";
function App() {
  const [selectedItem, setselectedItem] = useState(null);
  const handleItemClick = (item) => {
    setselectedItem(item);
  };
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand navbaralign" href="/">
              DigiSite
            </a>
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
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className={`nav-item ${
                    selectedItem === " home" ? " active" : ""
                  }`}
                >
                  <a
                    className="nav-link"
                    href="/"
                    onClick={() => handleItemClick("home")}
                  >
                    Digital Engineering Services
                  </a>
                </li>
                <li
                  className={`nav-item ${
                    selectedItem === " about" ? " active" : ""
                  }`}
                >
                  <a
                    className="nav-link"
                    href="/about"
                    onClick={() => handleItemClick("about")}
                  >
                    About
                  </a>
                </li>
                <li
                  className={`nav-item ${
                    selectedItem === " contact" ? " active" : ""
                  }`}
                >
                  <a
                    className="nav-link"
                    href="/contact"
                    onClick={() => handleItemClick("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="/" className="nav-link px-2 ">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link px-2 ">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link px-2">
                  Contact
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">© 2023 Company, Inc</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
