import React from "react";
import "./cart.css";

const Cart = (props) => {
  const { cartItems, removeItem, proceed } = props;
  if (cartItems.length === 0) {
    return <div className="cart-empty">Cart is empty</div>;
  }
  return (
    <div className="cart-wrapper">
      <h3 className="heading">Cart</h3>
      <table border="1">
        <thead>
          <tr>
            <th colSpan="2">Item</th>
            <th>Price(Rs.)</th>
            <th>Count</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.isbn}>
                <td className="img-td">
                  <img src={item.thumbnailUrl} />
                </td>
                <td>
                  <h4>{item.title}</h4>
                </td>
                <td>{item.price ? item.price : "500"}</td>
                <td>{item.count}</td>
                <td>
                  <span
                    className="cart-remove"
                    onClick={() => removeItem(item)}
                  >
                    Remove
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div style={{ marginTop: "20px" }}>
        Total: {(cartItems.reduce((a, c) => a + c.price * c.count, 0), 0)}
      </div> */}

      <div>
        <button onClick={proceed} className="proceed-now-btn">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Cart;
