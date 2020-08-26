import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "./store/reducers/productReducers";
import cartReducer from "./store/reducers/cartReducers";

const rootReducer = combineReducers({
  productsState: productReducer,
  cartState: cartReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching ====", action);
      const result = next(action);
      console.log("[Middleware] next state ====", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
