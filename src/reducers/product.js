import Moment from "moment";

import * as types from "../actions/types";
import { list } from "../utils/products";

const initialState = {
  products: list,
  searchKey: (localStorage.getItem("searchKey") && localStorage.getItem("searchKey")) || "",
  searchList: (localStorage.getItem("searchList") && JSON.parse(localStorage.getItem("searchList"))) || [],
  notFound: (localStorage.getItem("notFound") && localStorage.getItem("notFound")) || false,
  filters: (localStorage.getItem("filters") && JSON.parse(localStorage.getItem("filters"))) || { brand: "", color: "", order: "" },
  currentPage: 1,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      if (localStorage.getItem("filters")) {
        const filters = JSON.parse(localStorage.getItem("filters"));
        if (filters.color === "" && filters.brand === "" && filters.order === "") {
          state.searchList = [];
          localStorage.removeItem("searchList");
          localStorage.removeItem("notFound");
        }
      }

      return {
        ...state,
        products: state.products,
      };
    case types.SEARCH_TO_PRODUCT:
      let res = state.products;

      if (state.filters["brand"] !== "" && state.filters["color"] !== "") {
        res = res.filter((obj) => obj.color === state.filters["color"] && obj.brand === state.filters["brand"]);
      } else if (state.filters["brand"] !== "") {
        res = res.filter((obj) => obj["brand"] === state.filters["brand"]);
      } else if (state.filters["color"] !== "") {
        res = res.filter((obj) => obj["color"] === state.filters["color"]);
      }

      if (res != null) {
        res = res.filter(function (item) {
          return item.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1;
        });
      } else {
        res = state.searchList.filter(function (item) {
          return item.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1;
        });
      }

      if (res.length === 0) {
        state.notFound = true;
        localStorage.setItem("notFound", true);
      }
      localStorage.setItem("searchList", JSON.stringify(res));
      localStorage.setItem("searchKey", action.payload);
      return {
        ...state,
        searchKey: action.payload,
        searchList: res,
      };
    case types.ADD_TO_FILTER:
      if (state.filters[action.payload.type] !== "" && state.filters[action.payload.type] === action.payload.value) {
        state.filters[action.payload.type] = "";
      } else {
        state.filters[action.payload.type] = action.payload.value;
      }

      let response = null;
      if (state.filters["brand"] !== "" && state.filters["color"] !== "") {
        response = state.products.filter((obj) => obj.color === state.filters["color"] && obj.brand === state.filters["brand"]);
      } else if (state.filters["brand"] === "" && state.filters["color"] === "") {
        response = state.products;
      } else {
        if (state.filters["brand"] !== "") {
          response = state.products.filter((obj) => obj["brand"] === state.filters["brand"]);
        } else if (state.filters["color"] !== "") {
          response = state.products.filter((obj) => obj["color"] === state.filters["color"]);
        }
      }

      if (state.searchKey !== "") {
        response = response.filter((item) => item.title.toLowerCase() === state.searchKey.toLocaleLowerCase());
      }

      if (response != null && response.length === 0) {
        state.notFound = true;
        localStorage.setItem("notFound", true);
      }

      localStorage.setItem("searchList", JSON.stringify(response));
      localStorage.setItem("filters", JSON.stringify(state.filters));

      return {
        ...state,
        searchList: response,
      };
    case types.ADD_TO_SORT:
      if (state.filters[action.payload.type] !== "" && state.filters[action.payload.type] === action.payload.value) {
        state.filters[action.payload.type] = "";
      } else {
        state.filters[action.payload.type] = action.payload.value;
      }
      localStorage.setItem("filters", JSON.stringify(state.filters));

      let res_sort = null;
      if (state.filters.length > 0) {
        res_sort = state.filters;
      } else {
        res_sort = state.products;
      }

      switch (action.payload.value) {
        case "sort_price_min":
          res_sort = res_sort.sort((a, b) => (a.price > b.price ? 1 : -1));
          break;
        case "sort_price_max":
          res_sort = res_sort.sort((a, b) => (a.price < b.price ? 1 : -1));
          break;
        case "sort_news_min":
          res_sort = res_sort.sort((a, b) => (new Moment(a.date, "YYYY-MM-DD HH:mm:ss") - new Moment(b.date, "YYYY-MM-DD HH:mm:ss") ? (a.title < b.title ? 1 : -1) : -1));
          break;
        case "sort_news_max":
          res_sort = res_sort.sort((a, b) => (new Moment(a.date, "YYYY-MM-DD HH:mm:ss") - new Moment(b.date, "YYYY-MM-DD HH:mm:ss") ? (a.title > b.title ? 1 : -1) : -1));
          break;

        default:
          break;
      }

      return {
        ...state,
        searchList: res_sort,
      };

    case types.SET_PAGINATE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
