import React from "react";
import "./Cart.scss";
import TopBar from "../../components/TopBar/TopBar";
export default function Cart({ cartItems }) {
  return (
    <div className="cart">
      <TopBar />

      <div className="cartContainer">
        <div className="singleCart">
          <div className="cartImg">
            <img src="src/images/Black & Yellow Modern Architecture Book Cover.jpg" />
          </div>
        </div>
        {/* {cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.imgSrc} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        ))} */}
        <input type="number" min="0" value="1" />
        <button>Remove</button>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
