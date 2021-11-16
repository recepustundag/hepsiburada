import React from "react";
import BadgeButton from "../BadgeButton";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("basket count initialize", () => {
  const component = render(<BadgeButton />);
  const spanEl = component.getByTestId("basketCount");

  expect(spanEl.textContent).toBe("0");
});

test("basket button click", () => {
  const component = render(<BadgeButton />);
  const buttonEl = component.getByTestId("basketButton");

  expect(buttonEl.className).toBe("button-badge");
  
});
