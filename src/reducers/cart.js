import Moment from "moment";
import * as types from "../actions/types";

const initialState = {
  cart: (localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const index = state.cart.findIndex((item) => item.id === action.payload.id);

      if (index === -1) {
        state.cart = [...state.cart, action.payload];
        let storeCard = JSON.parse(localStorage.getItem("cart") ?? "[]");
        storeCard.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(storeCard.sort((a, b) => new Moment(b.added_date, "YYYY-MM-DD HH:mm:ss") - new Moment(a.added_date, "YYYY-MM-DD HH:mm:ss"))));
      } else {
        state.cart = [...state.cart];
        localStorage.setItem("cart", JSON.stringify(state.cart.sort((a, b) => new Moment(b.added_date, "YYYY-MM-DD HH:mm:ss") - new Moment(a.added_date, "YYYY-MM-DD HH:mm:ss"))));
      }

      return {
        ...state,
        cart: state.cart.sort((a, b) => new Moment(b.added_date, "YYYY-MM-DD HH:mm:ss") - new Moment(a.added_date, "YYYY-MM-DD HH:mm:ss")),
      };
    case types.REMOVE_TO_CART:
      localStorage.setItem("cart", JSON.stringify(state.cart.filter((item) => item.id !== action.payload)));
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
