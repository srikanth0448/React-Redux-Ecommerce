import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};

export const fetchProductsFailed = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED,
  };
};

export const productDetails = (product) => {
  return {
    type: actionTypes.PRODUCT_DETAILS,
    product: product,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://api.jsonbin.io/b/5f45e8d8514ec5112d0e72aa", {
        headers: {
          "secret-key":
            "$2b$10$sa4115YFvIlKJPuv2OWyV.aj0/20AIkekgNyPj3MSLBK0i3XTWE7q",
        },
      })
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        dispatch(fetchProductsFailed());
      });
  };
};
