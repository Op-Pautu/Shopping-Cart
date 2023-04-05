// import React from "react";

// export const CartContext = React.createContext({
//   cartItems: [],
//   addToCart: () => {},
//   removeFromCart: () => {},
// });

import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex((i) => i.id === item.id);

    if (itemIndex === -1) {
      setCartItems([...cartItems, item]);
      setTotalQuantity(totalQuantity + item.quantity);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += item.quantity;
      setCartItems(newCartItems);
      setTotalQuantity(totalQuantity + item.quantity);
    }
  };

  const removeFromCart = (itemId) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) return;

    const newCartItems = [...cartItems];
    const removedItem = newCartItems.splice(itemIndex, 1)[0];
    setCartItems(newCartItems);
    setTotalQuantity(totalQuantity - removedItem.quantity);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    totalQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
