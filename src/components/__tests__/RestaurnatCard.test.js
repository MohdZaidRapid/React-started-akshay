import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
  const mockData = {
    info: MOCK_DATA,
  };
  render(<RestaurantCard resData={mockData} />);

  // Destructure resData to access info directly
  const { info } = mockData;

  // Query for elements using info properties
  const name = screen.getByText(info.name);

  // Log the value of name
  console.log(name.textContent);

  expect(name).toBeInTheDocument();
});
