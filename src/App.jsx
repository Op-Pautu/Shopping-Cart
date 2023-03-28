import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import BookPage from "./pages/BookPage/BookPage";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
function App() {
  const [cart, setCart] = React.useState([]);

  const handleRemoveFromCart = (bookId) => {
    setCart(cart.filter((book) => book.id !== bookId));
  };
  const addItemToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
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
  );
}

export default App;
