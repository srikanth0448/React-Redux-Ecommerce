import React, { Component } from "react";
import Order from "../components/orders/checkout";

import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class CheckoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // createOrder = (e) => {
  //   e.preventDefault();
  //   alert("Successfully Order Created");
  //   this.props.history.push("/");
  // };

  render() {
    return (
      <Order
        createOrder={this.props.onCleanCart}
        handleInput={this.handleInput}
        // checkout={this.props.onCleanCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartState.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCleanCart: () => dispatch(actions.cleanCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
