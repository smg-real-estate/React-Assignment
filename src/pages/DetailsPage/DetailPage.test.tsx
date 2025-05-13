import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./index";

jest.mock("../../assets/listings.json", () => [
  {
    id: "1",
    title: "Weitsicht in die Berge",
    description: "Test description for Weitsicht.",
    images: [
      "image1.jpg",
      "image2.jpg"
    ],
  },
], { virtual: true });

describe("<DetailPage />", () => {
  it("should render listing details when found", () => {
    render(
      <MemoryRouter initialEntries={["/listing/1"]}>
        <Routes>
          <Route path="/listing/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Weitsicht in die Berge/i })).toBeInTheDocument();
    expect(screen.getByText(/Test description for Weitsicht./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to Home/i })).toBeInTheDocument();
  });

  it("should render 'Listing not found' when ID is invalid", () => {
    render(
      <MemoryRouter initialEntries={["/listing/invalid-id"]}>
        <Routes>
          <Route path="/listing/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Listing not found/i })).toBeInTheDocument();
  });
});
