import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardItem from "../CardItem";
import { Provider } from "react-redux";
import HeaderSearch from "../HeaderSearch";
import store from "../../store";

afterEach(cleanup);

test("remove button modal", () => {
  const component = render(<CardItem />);
  const modalButton = component.getByTestId("openModal");

  expect(modalButton.textContent).toBe("Kaldır");
});

test("Product search testing", () => {
  const component = render(<Provider store={store}><HeaderSearch /></Provider>);
  const icon = component.getByTestId("searchInputIcon"),
        mobileButton = component.getByTestId("openSearchInput");

  expect(icon.getAttribute('alt')).toBe('search');
  expect(mobileButton.getAttribute('alt')).toBe('search');
});