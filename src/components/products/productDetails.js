import React from "react";

const ProductDetails = ({ singleProduct }) => {
  if (!singleProduct.title) {
    return <div className="cart-empty">Page Not Found</div>;
  }
  let authorsList = singleProduct.authors;
  authorsList = authorsList.join(", ");
  // if (isArray(singleProduct.authors)) {
  //   singleProduct.authors = singleProduct.authors;
  // }
  return (
    <div>
      <div className="product-info">
        <div className="product-image">
          <img src={singleProduct.thumbnailUrl} alt="" />
        </div>
        <div className="product-details">
          <h3>{singleProduct.title}</h3>
          <p>Pages: {singleProduct.pageCount}</p>
          <p>Price: {singleProduct.price}</p>
          <p>Authors: {authorsList}</p>
          <p>Status: {singleProduct.status}</p>
        </div>
      </div>
      <div className="product-desc">{singleProduct.longDescription}</div>
    </div>
  );
};

export default ProductDetails;
