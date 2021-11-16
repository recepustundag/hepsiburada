import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardItem from "../CardItem";
import { Provider } from "react-redux";
import Modal from "../Modal";
import store from "../../store";

afterEach(cleanup);

test("remove button modal", () => {
  const component = render(<CardItem />);
  const modalButton = component.getByTestId("openModal");

  expect(modalButton.textContent).toBe("Kaldır");
});

test("Remove cart item modal", () => {
  const component = render(<Provider store={store}><Modal id="1" /></Provider>);
  const modalContainer = component.getByTestId('modalContainer'),
        closeButton = component.getByTestId("modalClosebutton"),
        titleEl = component.getByTestId("modalTitle"),
        footerCloseButton = component.getByTestId("modalFooterCloseButton"),
        removeCartItem = component.getByTestId('removeCartItem');

  expect(closeButton.textContent).toBe('Kapat');
  expect(titleEl.textContent).toBe('Ürünü silmek istediğinize emin misiniz?');
  expect(footerCloseButton.textContent).toBe('Hayır');
  expect(removeCartItem.textContent).toBe('Evet');

  fireEvent.click(removeCartItem)

  expect(modalContainer.hidden).toBe(false);
  
});
