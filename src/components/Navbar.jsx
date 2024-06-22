import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="aboutus">About Us</Link>
          </li>
          <li>
            <Link to="favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
