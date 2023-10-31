import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailPage from ".";

jest.mock("../../assets/listings", () => [
  {
    id: "1",
    title: "Weitsicht in die Berge",
    description: "This is a description",
    images: [
      "https://test.homegate.ch/www/ftp/ipv/images/201009161631255789434.jpg",
      "https://test.homegate.ch/www/ftp/ipv/images/201009061626312369207.jpg",
      "https://test.homegate.ch/www/ftp/ipv/images/200910271509502031428.jpg",
    ],
  },
]);

describe("<DetailPage />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/details/1"]}>
        <Routes>
          <Route path="/details/:listingId" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it("should render", () => {
    // This is a basic check to ensure the component is rendered. 
    // For more specific checks, you can query elements inside the component.
    expect(screen.getByText(/Weitsicht/i)).toBeInTheDocument();
  });
});
