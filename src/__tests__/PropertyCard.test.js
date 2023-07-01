import React from "react";
import { render, screen } from "@testing-library/react";
import ReactTestRenderer from "react-test-renderer";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    _id: "test id",
    title: "test title",
    city: "test city",
    type: "test type",
    bathrooms: "2",
    bedrooms: "1",
    price: "8888",
    email: "test@email.com",
  };

  test("it renders correctly", () => {
    const rendered = ReactTestRenderer.create(
      <PropertyCard fields={validProps} />
    );
    expect(rendered).toMatchSnapshot();
  });

  test("renders correct props values", () => {
    render(<PropertyCard fields={validProps} />);
    expect(screen.getByText("test title")).toHaveClass("property-card-title");

    expect(screen.getByText("test type - test city")).toHaveClass(
      "property-card-type-city"
    );

    expect(screen.getByText("2")).toHaveClass("property-card-bathrooms");

    expect(screen.getByText("1")).toHaveClass("property-card-bedrooms");

    expect(screen.getByText("8888")).toHaveClass("property-card-price");

    expect(screen.getByText("Email")).toHaveClass("email-button");

    expect(screen.getByTestId("bathroom-icon")).toHaveClass("bathIcon");

    expect(screen.getByTestId("bedroom-icon")).toHaveClass("bedIcon");

    expect(screen.getByTestId("email-icon")).toHaveClass("emailIcon");
  });
});
