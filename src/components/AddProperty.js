import React, { useState } from "react";
import "../styles/add-property.css";
import Alert from "./Alert";
import postProperty from "../requests/postProperty";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    postProperty(fields, setAlert);
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty} className="add-property-container">
        <Alert message={alert.message} success={alert.isSuccess} />
        <label htmlFor="title">
          Property Description
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="flat">Flat</option>
            <option value="detached">Detached</option>
            <option value="semi-detached">Semi-Detached</option>
            <option value="terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            placeholder="Number of bedrooms"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            placeholder="Number of bathrooms"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            placeholder="Price (£)"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Liverpool">Liverpool</option>
            <option value="London">London</option>
            <option value="Leeds">Leeds</option>
          </select>
        </label>
        <label htmlFor="email">
          Email
          <input
            placeholder="example@gmail.com"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
