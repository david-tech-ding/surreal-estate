import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import houseLogo from "../images/house.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={houseLogo} alt="house-logo" className="navbar-logo" />
      <h2 className="navbar-title">Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
