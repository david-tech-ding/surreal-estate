import React from "react";
import "../styles/navbar.css";
import houseLogo from "../images/house.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <img src={houseLogo} alt="house-logo" />
        <ul className="navbar-links">
          <li className="navbar-links-item">View Properties</li>
          <li className="navbar-links-item">Add a Property</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
