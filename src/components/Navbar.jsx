import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <h2 className="logo">RecipeMaster</h2>
        <button className="toggle-btn" onClick={toggleMenu}>
          <IoMenuOutline />
        </button>
        <ul className={`nav-links ${isMenuOpen ? "show-links" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="aboutus" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="favorites" onClick={() => setIsMenuOpen(false)}>
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
