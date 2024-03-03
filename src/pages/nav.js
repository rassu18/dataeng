import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        DigiSite
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="nav-item dropdown">
          <NavLink
            className="dropdown-toggle"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            to="/"
          >
            Digital Engineering Services
          </NavLink>
          <div className="dropdown-menu">
            <NavLink to="/dataInside" className="dropdown-item">
              Data Insights
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
