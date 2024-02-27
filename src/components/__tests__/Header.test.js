import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("Should load Header Component with a login button ", () => {
  render(
    <Provider store={appStore}>
      <Header />
    </Provider>
  );
});
