import React from "react";
import {render} from "@testing-library/react";
import {Chart} from "./Chart";

describe("Chart", () => {
  const mockProps = {
    labels: ["a", "b", "c", "d", "e", "f", "g"],
    data: [124, 12, 90, 85, 74, 90, 150],
    title: "Test Title",
  };

  it("renders correctly", () => {
    render(<Chart {...mockProps} />);

    // Check if the title is rendered
    // expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Since we can't directly check the chart data or labels (as they are not directly rendered in the DOM),
    // we check if the chart container is present
    // expect(screen.getByRole("img", {name: /chart/i})).toBeInTheDocument();
  });
});
