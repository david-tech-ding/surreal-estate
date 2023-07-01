import React from "react";
import "../styles/property-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({ fields }) => {
  const { title, city, type, bathrooms, bedrooms, price, email } = fields;

  return (
    <div className="property-card">
      <div className="property-card-title">{title}</div>
      <div className="property-card-type-city">
        {type} - {city}
      </div>
      <div className="property-card-bathrooms">
        <FontAwesomeIcon
          icon={faBath}
          className="bathIcon"
          data-testid="bathroom-icon"
        />
        {bathrooms}
      </div>
      <div className="property-card-bedrooms">
        <FontAwesomeIcon
          icon={faBed}
          className="bedIcon"
          data-testid="bedroom-icon"
        />
        {bedrooms}
      </div>
      <div className="property-card-price">
        <FontAwesomeIcon
          icon={faSterlingSign}
          className="priceIcon"
          data-testid="price-icon"
        />
        {price}
      </div>
      <a href={`mailto:${email}`} className="property-card-email">
        <button type="submit" className="email-button">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="emailIcon"
            data-testid="email-icon"
          />
          Email
        </button>
      </a>
    </div>
  );
};

export default PropertyCard;
