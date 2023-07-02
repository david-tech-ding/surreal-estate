import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="filter-city-container">
        Filter by city
        <div className="city">
          <Link to={`/?query={"city": "Manchester"}`} className="city-link">
            Manchester
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Liverpool"}`} className="city-link">
            Liverpool
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "London"}`} className="city-link">
            London
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Leeds"}`} className="city-link">
            Leeds
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Birmingham"}`} className="city-link">
            Birmingham
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Cornwall"}`} className="city-link">
            Cornwall
          </Link>
        </div>
        <div className="sort-container">
          Sort by
          <div className="price">
            <Link to="/" className="price-link">
              Price Ascending
            </Link>
          </div>
          <div className="price">
            <Link to="/" className="price-link">
              Price Descending
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
