import React from "react";
import "./products.css";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { products, individualProduct, addToCart, buyNow } = props;
  return (
    <div className="product-wrapper">
      {products.map((product) => {
        return (
          <div className="product-div" key={product.isbn}>
            <img src={product.thumbnailUrl} />
            <Link to={`/products/${product.isbn}`}>
              <h3 onClick={() => individualProduct(product)}>
                {product.title}
              </h3>
            </Link>
            <button
              className="add-cart-btn btn"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
