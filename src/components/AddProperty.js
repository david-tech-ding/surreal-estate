import React, { useState } from "react";
import "../styles/add-property.css";

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
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <label htmlFor="city">
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
      <label htmlFor="type">
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
        <input
          placeholder="Number of bedrooms"
          id="bedrooms"
          name="bedrooms"
          value={fields.bedrooms}
          onChange={handleFieldChange}
        />
      </label>
      <label htmlFor="bathrooms">
        <input
          placeholder="Number of bathrooms"
          id="bathrooms"
          name="bathrooms"
          value={fields.bathrooms}
          onChange={handleFieldChange}
        />
      </label>
      <label htmlFor="price">
        <input
          placeholder="Price (£)"
          id="price"
          name="price"
          value={fields.price}
          onChange={handleFieldChange}
        />
      </label>
      <label htmlFor="email">
        <input
          placeholder="example@gmail.com"
          id="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
        />
      </label>
    </div>
  );
};

export default AddProperty;
