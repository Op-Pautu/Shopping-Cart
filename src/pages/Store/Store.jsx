import React, { useState } from "react";

import "./Store.scss";
import data from "../../books";
import { Link } from "react-router-dom";

export default function Store() {
  return (
    <div className="store">
      <div className="cardContainer">
        {data.map((item) => (
          <div className="singleCard" key={item.id}>
            <Link
              to={`/store/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
