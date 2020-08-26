import * as actionTypes from "./actionTypes";

export const addToCart = (cartItems) => {
  return {
    type: actionTypes.ADD_TO_CART,
    cartItems: cartItems,
  };
};

export const buyNow = (cartItems) => {
  return {
    type: actionTypes.BUY_NOW,
    cartItems: cartItems,
  };
};

export const removeFromCart = (cartItems) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    cartItems: cartItems,
  };
};

export const cleanCart = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAN_CART,
  });
};
