import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
  };

  const [properties, setProperties] = useState(initialState.properties);

  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing/")
      .then((res) => {
        setProperties(res.data);
        console.log(res.data);
        setAlert({
          message: "",
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing/")
      .then((res) => {
        setProperties(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

  return (
    <div className="properties-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="properties-cards">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
