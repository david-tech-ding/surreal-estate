import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const fields = {
    title: "test title",
    city: "test city",
    type: "test type",
    bathrooms: "2",
    bedrooms: "1",
    price: "8888",
    email: "test@email.com",
  };

  return (
    <>
      <div className="properties">Properties Page</div>
      <PropertyCard fields={fields} />
    </>
  );
};

export default Properties;
