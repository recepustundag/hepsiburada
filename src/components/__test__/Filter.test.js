import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import Filter from "../Filter";
import store from "../../store";

afterEach(cleanup);

test("Filter mobile icon title", () => {
  const component = render(<Provider store={store}><Filter /></Provider>);
  const filterMobileIcon = component.getByTestId("filterMobileIcon");

  expect(filterMobileIcon.textContent).toBe("Filtrele");

});