import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="header-div">
        <div className="logo-div">
          <a className="logo">Shoping Cart</a>
        </div>

        <div className="navbar">
          <ul className="menu-ul">
            <li>
              <NavLink className="nav-item" to="/products">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item" to="/cart">
                Cart {props.cartLength ? "(" + props.cartLength + ")" : ""}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
