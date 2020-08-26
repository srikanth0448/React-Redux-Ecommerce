import React, { Component } from "react";
import Cart from "../components/cart/cart";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class CartContainer extends Component {
  proceed = () => {
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <Cart
        cartItems={this.props.items}
        removeItem={this.props.onRemoveItem}
        proceed={this.proceed}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartState.items,
    cartLength: state.cartState.cartLength,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (product) => dispatch(actions.removeFromCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
