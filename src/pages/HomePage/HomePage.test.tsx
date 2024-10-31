import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import HomePage from ".";

describe("<HomePage />", () => {
  it("should render", () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });
});
