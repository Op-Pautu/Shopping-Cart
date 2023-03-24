import React from "react";
import "./TopBar.scss";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarContainer">
        <h1 className="topBarTitle">Op's Bookstore</h1>
        <ul className="topBarItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Shop</Link>
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
