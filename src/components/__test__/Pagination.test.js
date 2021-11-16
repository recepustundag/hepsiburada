import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import Pagination from "../Pagination";
import store from "../../store";
import list from '../../utils/products';

afterEach(cleanup);

test("Pagination prev next button", () => {
  const component = render(<Provider store={store}><Pagination /></Provider>);
  const prevLink = component.getByTestId("paginationPrevLink"),
        nextLink = component.getByTestId("paginationNextLink");

  expect(prevLink.textContent).toBe(" < ");
  expect(nextLink.textContent).toBe(" > ");

});

test("Pagination change page", () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <Pagination data={list} />
    </Provider>
  );

  const link = getAllByTestId('paginationPageLink');
  fireEvent.click(link[1]);
  expect(link[0].className).toBe('link');
  expect(link[1].className).toBe('link active');
  expect(link[2].className).toBe('link');
});
