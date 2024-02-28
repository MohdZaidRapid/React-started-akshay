import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";

import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (17)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(17);

  expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  //   console.log(addBtns.length);
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart -(1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart -(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(19);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(17);

  expect(screen.getByText("Cart is empty. Add item to cart!"));
});
