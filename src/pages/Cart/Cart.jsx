import React from "react";
import "./Cart.scss";

import { Link } from "react-router-dom";

export default function Cart({ cartItems, handleRemoveFromCart }) {
  const [quantities, setQuantities] = React.useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );
  console.log("number", quantities);
  const handleQuantityChange = (itemId, quantity) => {
    setQuantities({
      ...quantities,
      [itemId]: Math.max(1, Math.min(Number(quantity), 999)),
    });
  };
  const getTotal = () => {
    let total = 0;
    let totalQuantity = 0;

    cartItems.forEach((item) => {
      const quantity = quantities[item.id] || 1;
      console.log("quantity", quantity);
      const itemTotal = item.price * quantity;
      console.log("itemTotal", itemTotal);

      if (isNaN(itemTotal)) {
        console.error(`Invalid price for item ${item.id}: ${item.price}`);
        return;
      }

      total += itemTotal;
      totalQuantity += quantity;
    });

    return { total, totalQuantity };
  };
  const { total, totalQuantity } = getTotal();

  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="cartHeader">
          <h2>Your Cart</h2>
        </div>

        <div className="cartItems">
          {cartItems.length === 0 ? (
            <div className="emptyCart">Your cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cartItem">
                <div className="cartImg">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <div className="cartItemInfo">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <div className="cartQuantity">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, quantities[item.id] - 1)
                      }
                      disabled={quantities[item.id] === 1}
                    >
                      -
                    </button>
                    <span>{quantities[item.id]}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, quantities[item.id] + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="deleteBtn"
                  >
                    Delete
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <button className="checkout">Checkout</button>

        <hr className="line" />
        <div className="cartTotal">
          <h3>Total</h3>
          <p>{total} items</p>
          <Link to="/store" className="continueShopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
