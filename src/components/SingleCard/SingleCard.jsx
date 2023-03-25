import React from "react";
import data from "../../books";
import "./SingleCard.scss";
export default function SingleCard() {
  return (
    <div>
      <div className="cardContainer">
        {data.map((item, index) => {
          return (
            <div className="singleCard" key={index}>
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
