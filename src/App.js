import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header";
import CheckoutContainer from "./containers/checkoutContainer";
import ProductsContainer from "./containers/productsContainer";
import CartContainer from "./containers/cartContainer";

import { connect } from "react-redux";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header cartLength={this.props.cartLength} />
        <div className="main-wrapper">
          <Switch>
            <Route
              path="/checkout"
              component={(props) => <CheckoutContainer {...props} />}
            />
            <Route
              path="/cart"
              component={(props) => <CartContainer {...props} />}
            />
            <Route
              exact
              path="/products/:id"
              component={(props) => <ProductsContainer {...props} />}
            />
            <Route
              exact
              path="/products"
              component={(props) => <ProductsContainer {...props} />}
            />
            <Redirect from="/" to="/products" />
            <Route path="*" component={ProductsContainer} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartLength: state.cartState.cartLength,
  };
};

export default connect(mapStateToProps)(App);
