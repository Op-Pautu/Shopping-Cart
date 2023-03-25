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
          <h2>Architecture </h2>
          <h4>
            <i>The Art Of Epic Structures</i>
          </h4>
          <p>Christian A. Jones</p>
        </div>
      </div>
    </div>
  );
}
