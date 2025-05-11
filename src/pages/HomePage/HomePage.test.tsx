import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import HomePage from ".";

describe("<HomePage />", () => {
  it("should render", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
});
