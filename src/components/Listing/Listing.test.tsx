import { render, screen } from "@testing-library/react";

import Listing from ".";

describe("<Listing />", () => {
  const defaultProps = {
    imgSrc: "src",
    title: "A new listing",
  };

  it("should render", () => {
    render(<Listing {...defaultProps} />);
    // This is a basic check to ensure the component is rendered. 
    // For more specific checks, you can query elements inside the component.
    expect(screen.getByText('A new listing')).toBeTruthy();
  });
});
