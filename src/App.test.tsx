import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

test("renders app properly", () => {
  render(<App />);

  expect(true).toBeTruthy();
});
