import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Product from "../Product";

afterEach(cleanup);

const startingState = {};

function reducer(state = startingState, action) {}

function renderWithRedux(component, { initialState, store = createStore(reducer, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

const product = {
  title: "iphone 11",
  image: "example url",
  price: 0,
  brand: "iphone",
  color: "siyah",
  discount_price: 10,
};

test("Product text test", () => {
  const component = renderWithRedux(<Product product={product} />);
  const title = component.getByTestId("productTitle"),
    image = component.getByTestId("productImage"),
    price = component.getByTestId("productPrice"),
    brand = component.getByTestId("productBrand"),
    color = component.getByTestId("productColor");

  expect(title.textContent).toBe(product.title);
  expect(image.getAttribute("src")).toBe(product.image);
  expect(price.textContent).toBe(`${product.price} TL`);
  expect(color.textContent).toBe(`Renk: ${product.color}`);
  expect(brand.textContent).toBe(`Marka: ${product.brand}`);
});

test("Add to cart button not clicked", () => {
  const component = renderWithRedux(<Product product={product} isCart={-1} />);
  const btnEl = component.getByTestId("addProduct");

  expect(btnEl.textContent).toBe("Sepete Ekle");

});

test("Add to cart button clicked", () => {
  const component = renderWithRedux(<Product product={product} isCart={0} />);
  const btnEl = component.getByTestId("addProduct");

  expect(btnEl.textContent).toBe("Bu ürünü sepete ekleyemezsiniz");
  expect(btnEl.className).toBe("added");

});

