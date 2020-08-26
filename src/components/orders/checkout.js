import React from "react";

const Orders = (props) => {
  const { createOrder, handleInput, checkout } = props;
  return (
    <form className="checkout-form" onSubmit={createOrder}>
      <h1 className="heading">Checkout Form</h1>
      <ul className="form-container">
        <li>
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            onChange={handleInput}
          ></input>
        </li>
        <li>
          <label>Name</label>
          <input
            name="name"
            type="text"
            required
            onChange={handleInput}
          ></input>
        </li>
        <li>
          <label>Address</label>
          <input
            name="address"
            type="text"
            required
            onChange={handleInput}
          ></input>
        </li>
        <li>
          <button onClick={checkout} className="button primary" type="submit">
            Checkout
          </button>
        </li>
      </ul>
    </form>
  );
};

export default Orders;
