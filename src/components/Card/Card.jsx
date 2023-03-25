import React from "react";
import "./Card.scss";
export default function Card() {
  return (
    <div className="card">
      <div className="cardContainer">
        <div className="cardImg">
          <img src="src/images/Black & Yellow Modern Architecture Book Cover.jpg" />
        </div>
        <div className="cardTitle">
          <h2>The Art Of Epic Structures </h2>

          <span>Christian A. Jones</span>
        </div>
        <div className="cardPrice">
          <p>$19.99</p>
        </div>
      </div>
    </div>
  );
}
