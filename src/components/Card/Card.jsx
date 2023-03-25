import React from "react";
import "./Card.scss";
import data from "../../books";
export default function Card({ handleClick }) {
  return (
    <div className="card">
      <div className="cardContainer">
        {data.map((item, index) => {
          return (
            <div className="singleCard" key={index} onClick={handleClick}>
              <div className="cardImg">
                <img src={item.imgSrc} />
              </div>
              <div className="cardTitle">
                <h2>{item.title}</h2>
                <span>{item.author}</span>
              </div>
              <div className="cardPrice">
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
