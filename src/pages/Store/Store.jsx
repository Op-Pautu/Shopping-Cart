import React, { useState } from "react";

import TopBar from "../../components/TopBar/TopBar";
import "./Store.scss";
import data from "../../books";
import { Link } from "react-router-dom";

export default function Store() {
  return (
    <div className="store">
      <TopBar />
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
              <button>Add to Cart</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
