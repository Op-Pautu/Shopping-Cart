import React, { useState } from "react";
import Card from "../../components/Card/Card";
import TopBar from "../../components/TopBar/TopBar";
import "./Store.scss";

import Cart from "../Cart/Cart";
export default function Store() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="store">
      <TopBar />
      <Card
        handleClick={(item) => addToCart(item)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      {showCart && <Cart cartItems={cartItems} />}
    </div>
  );
}
