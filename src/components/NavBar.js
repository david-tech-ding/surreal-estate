import React from "react";
import "../styles/navbar.css";
import houseLogo from "../images/house.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={houseLogo} alt="house-logo" className="navbar-logo" />
      <h2 className="navbar-title">Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
