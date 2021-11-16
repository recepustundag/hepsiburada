import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardItem from "../CardItem";
import { Provider } from "react-redux";
import store from "../../store";

afterEach(cleanup);

test("remove button modal", () => {
  const component = render(<CardItem />);
  const modalButton = component.getByTestId("openModal");

  expect(modalButton.textContent).toBe("Kaldır");
});

test("cart item title", () => {
  const component = render(<Provider store={store}><CardItem title="example text with testing" /></Provider>);
  const itemTitle = component.getByTestId("cartItemTitle");

  expect(itemTitle.textContent).toBe('example text with testing');
  
});
