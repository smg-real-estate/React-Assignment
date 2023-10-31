import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from ".";

describe("<HomePage />", () => {
  it("should render", () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });
});
