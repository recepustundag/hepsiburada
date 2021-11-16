import * as types from "./types";

export const getProduct = () => {
  return {
    type: types.GET_PRODUCTS,
  };
};

export const searchProduct = (search) => {
  return {
    type: types.SEARCH_TO_PRODUCT,
    payload: search,
  };
};

export const addFilter = (value) => {
  if (value.type === "order") {
    return {
      type: types.ADD_TO_SORT,
      payload: value,
    };
  } else {
    return {
      type: types.ADD_TO_FILTER,
      payload: value,
    };
  }
};

export const setPaginate = (page) => {
  return {
    type: types.SET_PAGINATE,
    payload: page,
  };
};
