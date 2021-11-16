import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardItem from "../CardItem";
import { Provider } from "react-redux";
import Modal from "../Modal";
import store from "../../store";
import Wrapper from "../Wrapper";

afterEach(cleanup);

test("Subheader title test", () => {
  const component = render(
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
  const title = component.getByTestId("subheaderTitle");

  expect(title.querySelector("h1").textContent).toBe("Tüm marka cep telefonları");
  expect(title.querySelector("span").textContent).toBe("Aranan Kelime:");
});

test("Subheader simulate select filter", () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
  const selectEl = getByTestId("subheaderFilterSelect");
  const option = getAllByTestId('subheaderFilterOption');
  fireEvent.change(selectEl, {target: {value: 'sort_news_min'}})
  
  expect(option[0].selected).toBeFalsy();
  expect(option[1].selected).toBeFalsy();
  expect(option[2].selected).toBeTruthy();
  expect(option[3].selected).toBeFalsy();
});

test("Subheader select filter testing value", () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );

  const option = getAllByTestId('subheaderFilterOption');
  
  expect(option[0].value).toBe('sort_price_min');
  expect(option[1].value).toBe('sort_price_max');
  expect(option[2].value).toBe('sort_news_min');
  expect(option[3].value).toBe('sort_news_max');
});
