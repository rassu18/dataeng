import "./App.css";
import React from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Home from "./pages/home.js";
import DataInside from "./pages/dataInside.js";
import { Navbar } from "./pages/nav.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/dataInside" element={<DataInside />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
          <NavLink className="mx-2" to="/">Home</NavLink>
          </li>
         <li>
           <NavLink   className="mx-2" to="/about">About</NavLink></li>
           <li>
           <NavLink  className="mx-2" to="/contact">Contact</NavLink></li>
        </ul>
        <p className="text-center text-muted">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}

export default App;
