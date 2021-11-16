import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../store";

afterEach(cleanup);

test("Logo test", () => {
  const component = render(<Provider store={store}><Header /></Provider>);
  const logo = component.getByTestId("logo");

  expect(logo.getAttribute('alt')).toBe("logo");

});

