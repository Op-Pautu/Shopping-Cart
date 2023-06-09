import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import BookPage from "./pages/BookPage/BookPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { CartContext } from "./components/CartContext";
import Layout from "./components/Layout/Layout";

function App() {
  const [cart, setCart] = React.useState([]);
  const [totalQuantity, setTotalQuantity] = React.useState(0);
  React.useEffect(() => {
    const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const addItemToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (bookId) => {
    const bookToRemove = cart.find((book) => book.id === bookId);
    setCart(cart.filter((book) => book.id !== bookId));
  };
  const handleQuantityChange = (bookId, newQuantity) => {
    setCart(
      cart.map((book) => {
        if (book.id === bookId) {
          return { ...book, quantity: newQuantity };
        } else {
          return book;
        }
      })
    );
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleQuantityChange={handleQuantityChange}
            />
          }
        />
        <Route
          path="store/:id"
          element={
            <BookPage
              cart={cart}
              setCart={setCart}
              addItemToCart={addItemToCart}
            />
          }
        />
      </Route>
    )
  );
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, handleRemoveFromCart, totalQuantity }}
    >
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
