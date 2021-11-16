import moment from 'moment'
import * as types from "./types";

export const AddToCart = (list) => {
  list['added_date'] = moment().format('DD-MM-YYYY HH:mm:ss'); 
  return {
    type: types.ADD_TO_CART,
    payload: list,
  };
};

export const RemoveToCart = (id) => {
  return {
    type: types.REMOVE_TO_CART,
    payload: id,
  };
};