import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const Sidebar = () => {
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryString = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryString = {
      ...currentQueryString,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryString, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="side-bar">
      <div className="filter-city-container">
        <b>Filter by city</b>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Manchester" })}
            className="city-link"
          >
            Manchester
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Liverpool" })}
            className="city-link"
          >
            Liverpool
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "London" })}
            className="city-link"
          >
            London
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Leeds" })}
            className="city-link"
          >
            Leeds
          </Link>
        </div>
        <div className="city">
          <Link
            to={buildQueryString("query", { city: "Birmingham" })}
            className="city-link"
          >
            Birmingham
          </Link>
        </div>
        <div className="city">
          <Link to={`/?query={"city": "Cornwall"}`} className="city-link">
            Cornwall
          </Link>
        </div>
        <div className="sort-container">
          <b>Sort by</b>
          <div className="price">
            <Link
              to={buildQueryString("query", { price: 1 })}
              className="price-link"
            >
              Price Ascending
            </Link>
          </div>
          <div className="price">
            <Link
              to={buildQueryString("query", { price: -1 })}
              className="price-link"
            >
              Price Descending
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
