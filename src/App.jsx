import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import BookPage from "./pages/BookPage/BookPage";
import { Route, Routes } from "react-router-dom";
function App() {
  const [cart, setCart] = React.useState([]);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleRemoveFromCart = (bookId) => {
    setCart(cart.filter((book) => book.id !== bookId));
  };
  return (
    <div className="App">
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
          element={<BookPage handleAddToCart={handleAddToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
