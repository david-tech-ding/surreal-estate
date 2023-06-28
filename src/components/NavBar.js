import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <img src="../../images/town.png" alt="house-logo" />
        <ul className="navbar-links">
          <li className="navbar-links-item">View Properties</li>
          <li className="navbar-links-item">Add a Property</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
