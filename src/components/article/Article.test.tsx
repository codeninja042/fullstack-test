import React from "react";
import {render, screen} from "@testing-library/react";
import {Article} from "./Article";

describe("Article", () => {
  const mockProps = {
    author: "Test Author",
    url: "https://test.com",
    image: "https://test.com/image.jpg",
    traffic: 123,
  };

  it("renders correctly", () => {
    render(<Article {...mockProps} />);

    expect(screen.getByText(mockProps.url)).toBeInTheDocument();
    expect(screen.getByText(mockProps.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.traffic.toString())).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockProps.image);
  });
});
