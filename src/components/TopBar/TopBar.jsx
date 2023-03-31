import React from "react";
import "./TopBar.scss";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export default function TopBar({ totalQuantity }) {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "white",
  };
  return (
    <div className="topBar">
      <div className="topBarContainer">
        <h1 className="topBarTitle">Op's Bookstore</h1>
        <ul className="topBarItems">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/store"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Store
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              About Us
            </NavLink>
          </li>
          <li className="cart">
            <NavLink to="/cart">
              <FaShoppingCart />
              <span className="cartLength">{totalQuantity}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
