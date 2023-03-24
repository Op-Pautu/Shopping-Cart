import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import "./Store.scss";
export default function Store() {
  return (
    <div className="store">
      <TopBar />
      <h1>Store</h1>
      <ul>
        <li>Books</li>
        <li>Music</li>
        <li>Electronics</li>
        <li>Home</li>
        <li>Health</li>
        <li>Beauty</li>
        <li>Tools</li>
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
}
