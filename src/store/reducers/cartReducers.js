import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: [],
  cartLength: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const cartItems = state.items;
      let alreadyExists = false;
      cartItems.forEach((x) => {
        if (x.isbn === action.cartItems.isbn) {
          alreadyExists = true;
          x.count++;
        }
      });
      if (!alreadyExists) {
        cartItems.push({ ...action.cartItems, count: 1 });
      }
      return {
        ...state,
        items: cartItems,
        cartLength: state.items.length,
      };
    case actionTypes.REMOVE_FROM_CART:
      const updatedCart = [...state.items];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.isbn === action.cartItems.isbn
      );

      updatedCart.splice(updatedItemIndex, 1);

      return {
        ...state,
        items: updatedCart,
        cartLength: state.items.length - 1,
      };
    case actionTypes.CLEAN_CART:
      alert("Successfully Order Created");
      return {
        ...state,
        items: [],
        cartLength: "",
      };
    default:
      return state;
  }
};

export default reducer;
