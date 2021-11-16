import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store";
import FilterItem from "../FilterItem";

afterEach(cleanup);

const filterItemData = [
  {
    id: "Samsung",
    name: "Samsung",
  },
  {
    id: "Nokia",
    name: "Nokia",
  },
  {
    id: "Apple",
    name: "Apple",
  },
  {
    id: "LG",
    name: "LG",
  },
  {
    id: "Huawei",
    name: "Huawei",
  },
  {
    id: "Xiaomi",
    name: "Xiaomi",
  },
  {
    id: "General Mobile",
    name: "General Mobile",
  },
];

test("Filter mobile icon title", () => {
  const component = render(<Provider store={store}><FilterItem title="example title" /></Provider>);
  const filterMobileIcon = component.getByTestId("filterItemTitle");

  expect(filterMobileIcon.textContent).toBe("example title");

});

test("Filter items testing value", () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <FilterItem items={filterItemData} />
    </Provider>
  );

  const filterItemsList = getAllByTestId('filterItemsList');
  expect(filterItemsList.length).toBe(7);
  expect(filterItemsList[0].textContent).toBe('Samsung(9)');
});

test("Filter items event testing", () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <FilterItem items={filterItemData} />
    </Provider>
  );

  const filterItemsList = getAllByTestId('filterItemsList');
  fireEvent.click(filterItemsList[0]);
  expect(filterItemsList[0].className).toBe('active');
});