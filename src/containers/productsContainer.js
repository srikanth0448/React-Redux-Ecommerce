import React, { Component } from "react";
import Products from "../components/products/products";
import ProductDetails from "../components/products/productDetails";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

class ProductsContainer extends Component {
  state = {
    product: [],
  };

  componentDidMount() {
    this.props.onfetchProducts();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.match.url === "/products" ? (
          <Products
            products={this.props.products}
            individualProduct={this.props.onProductDetails}
            addToCart={this.props.onAddToCart}
            buyNow={this.props.onBuyNow}
          />
        ) : (
          <ProductDetails
            product={this.state.product}
            singleProduct={this.props.singleProduct}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsState.products,
    singleProduct: state.productsState.singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onfetchProducts: () => dispatch(actions.fetchProducts()),
    onProductDetails: (product) => dispatch(actions.productDetails(product)),
    onAddToCart: (item) => dispatch(actions.addToCart(item)),
    onBuyNow: (item) => dispatch(actions.buyNow(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
