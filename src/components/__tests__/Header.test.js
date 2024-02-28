import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button");
  //   multiple button we wnat to find specially one button
  const loginButton = screen.getByRole("button", { name: "Login" });
  // for all button getAllByRol
  //   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button");
  //   multiple button we wnat to find specially one button
  const cartItems = screen.getByText(/Cart/);
  // for all button getAllByRol
  //   const loginButton = screen.getByText("Login");

  expect(cartItems).toBeInTheDocument();
});

// it("Should changed  Login button to Logout on click ", () => {
//   const loginButton = screen.getByRole("button", { name: "Login" });

//   fireEvent.click(loginButton);

//   const logoutButton = screen.getByRole("button", { name: "Logout" });

//   console.log(logoutButton);

//   expect(logoutButton).toBeInTheDocument();
// });
