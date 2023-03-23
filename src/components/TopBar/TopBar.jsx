import React from "react";
import "./TopBar.scss";
export default function TopBar() {
  return (
    <div className="topBar">
      <ul className="topBarItems">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
