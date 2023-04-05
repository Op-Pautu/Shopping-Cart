import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../components/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

export default function Cart(props) {
  // const { cart, handleRemoveFromCart } = useContext(CartContext);
  const { cart, handleRemoveFromCart, handleQuantityChange } = props;

  // const getTotal = () => {
  //   let total = 0;

  //   cart.forEach((item) => {
  //     const quantity = quantities[item.id] || item.quantity;
  //     const itemTotal = item.price * quantity;

  //     if (isNaN(itemTotal)) {
  //       console.error(`Invalid price for item ${item.id}: ${item.price}`);
  //       return;
  //     }

  //     total += itemTotal;
  //   });

  //   return total.toFixed(2);
  // };

  // const total = getTotal();
  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="cartHeader">
          <h2>Your Cart</h2>
        </div>

        <div className="cartItems">
          {cart.length === 0 ? (
            <div className="emptyCart">Cart is empty</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cartItem">
                <div className="cartImg">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <div className="cartItemInfo">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <div className="cartQuantity">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
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

        <hr className="line" />

        <div className="cartTotal">
          <div className="totalDiv">
            <h3>Total</h3>
            <p>{`$${total}`}</p>
          </div>
          <Link to="/store" className="continueShopping">
            <button>Shop More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
