import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../components/CartContext";
import { Link } from "react-router-dom";
import "./Cart.scss";

export default function Cart() {
  const { cart, handleRemoveFromCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setTotalQuantity(
      Object.values(quantities).reduce((acc, val) => acc + val, 0)
    );
  }, [quantities]);

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities({
      ...quantities,
      [itemId]: Math.max(1, Math.min(Number(quantity), 999)),
    });
  };

  const getTotal = () => {
    let total = 0;

    cart.forEach((item) => {
      const quantity = quantities[item.id] || item.quantity;
      const itemTotal = item.price * quantity;

      if (isNaN(itemTotal)) {
        console.error(`Invalid price for item ${item.id}: ${item.price}`);
        return;
      }

      total += itemTotal;
    });

    return total.toFixed(2);
  };

  const total = getTotal();

  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="cartHeader">
          <h2>Your Cart</h2>
        </div>

        <div className="cartItems">
          {cart.length === 0 ? (
            <div className="emptyCart">Your cart is empty</div>
          ) : (
            cart.map((item) => (
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

        <hr className="line" />

        <div className="cartTotal">
          <h3>Total</h3>
          <p>{`$${total}`}</p>
          <Link to="/store" className="continueShopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
