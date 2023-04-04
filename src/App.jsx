import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import BookPage from "./pages/BookPage/BookPage";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import { CartContext } from "./components/CartContext";
function App() {
  const [cart, setCart] = React.useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItemToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    const newTotalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalQuantity(newTotalQuantity);
  };

  const handleRemoveFromCart = (bookId) => {
    const bookToRemove = cart.find((book) => book.id === bookId);
    setCart(cart.filter((book) => book.id !== bookId));
    const newTotalQuantity =
      totalQuantity - (bookToRemove ? bookToRemove.quantity : 0);
    setTotalQuantity(newTotalQuantity);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, handleRemoveFromCart }}>
      <div className="App">
        <TopBar totalQuantity={totalQuantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/store/:id"
            element={
              <BookPage
                cart={cart}
                setCart={setCart}
                addItemToCart={addItemToCart}
              />
            }
          />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
