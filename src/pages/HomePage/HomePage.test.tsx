import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import HomePage from ".";
jest.mock('assets/listings.json', () => ([
  { id: '1', title: 'Listing One', description: 'desc', images: ['img1'] },
  { id: '2', title: 'Listing Two', description: 'desc', images: ['img2'] },
]));

describe("<HomePage />", () => {
  it("renders listings as cards with links", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByText('Listing One')).toBeInTheDocument();
    expect(screen.getByText('Listing Two')).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/details/1');
    expect(links[1]).toHaveAttribute('href', '/details/2');
  });
});
