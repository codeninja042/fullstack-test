import React from "react";
import {render, screen} from "@testing-library/react";
import {Chart} from "./Chart"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

// Mocking `react-apexcharts`
jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: ({options, series}) => (
    <div role="chart">
      <h2>{options.title.text}</h2>
      <ul>
        {series[0].data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  ),
}));

describe("Chart Component", () => {
  const mockProps = {
    labels: ["a", "b", "c", "d", "e", "f", "g"],
    data: [124, 12, 90, 85, 74, 90, 150],
    title: "Test Title",
  };

  it("renders without crashing", () => {
    render(<Chart {...mockProps} />);
  });

  it("renders the title correctly", () => {
    render(<Chart {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("renders the correct number of data points", () => {
    render(<Chart {...mockProps} />);
    const dataPoints = screen.getAllByRole("listitem");
    expect(dataPoints.length).toBe(mockProps.data.length);
  });
});
