import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  singleProduct: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        error: false,
      };
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        error: true,
      };
    case actionTypes.PRODUCT_DETAILS:
      return {
        ...state,
        singleProduct: action.product,
      };
  }
  return state;
};

export default reducer;
