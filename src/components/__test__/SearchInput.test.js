import React from "react";
import { render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchInput from "../SearchInput";

afterEach(cleanup);

test("Search Input Test", () => {
  const component = render(<SearchInput />);
  const inputEl = component.getByTestId("searchInput");

  expect(inputEl.getAttribute('placeholder')).toBe("25 milyon'dan fazla ürün içerinde ara");
});