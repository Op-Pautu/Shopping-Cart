import React from "react";
import "./TopBar.scss";
import { FaShoppingCart } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarContainer">
        <h1 className="topBarTitle">Op's Bookstore</h1>
        <ul className="topBarItems">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li className="cart">
            <a href="/cart">
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
