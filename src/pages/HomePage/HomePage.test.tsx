import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import HomePage from ".";

describe("<HomePage />", () => {
  it("should render", () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
    expect(screen.getByRole('heading', { name: /Switzerland's smartest property search/i })).toBeInTheDocument();
  });
});
