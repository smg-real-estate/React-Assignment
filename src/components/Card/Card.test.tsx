import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from ".";

describe("<Card />", () => {
  it("truncates long descriptions to 100 characters", () => {
    const long = "x".repeat(150);
    render(
      <MemoryRouter>
        <Card title="Title" description={long} />
      </MemoryRouter>
    );
    const paragraph = screen.getByText(/x{100}…/);
    expect(paragraph).toBeInTheDocument();
  });

  it("wraps content in a link when 'to' is provided", () => {
    render(
      <MemoryRouter>
        <Card title="Title" to="/details/1" />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /view details/i });
    expect(link).toHaveAttribute("href", "/details/1");
  });
});
