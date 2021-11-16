import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../Card";

afterEach(cleanup);

const cartItems = [];


test("Not found product item", () => {
  const component = render(<Card cartItems={cartItems}  />);
  const elem = component.getByTestId("notFoundProduct");

  expect(elem.textContent).toBe("Sepetiniz boş");

});
