import React from "react";
import { useParams } from "react-router-dom";
import data from "../../books";

import "./BookPage.scss";
export default function BookPage({ cart, setCart, addItemToCart }) {
  const { id } = useParams();
  const book = data.find((item) => item.id === parseInt(id));

  const handleAddToCart = (book) => {
    const existingItem = cart.findIndex((item) => item.id === book.id);
    if (existingItem !== -1) {
      // Update the quantity of the existing item in the cart
      const updatedItem = {
        ...cart[existingItem],
        quantity: cart[existingItem].quantity + 1,
      };
      setCart([
        ...cart.slice(0, existingItem),
        updatedItem,
        ...cart.slice(existingItem + 1),
      ]);
    } else {
      // Add a new item to the cart
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };
  const handleClick = () => {
    handleAddToCart(book);
    console.log(book);
  };
  return (
    <div className="bookPage">
      <div className="bookPageContainer">
        <img src={`../${book.imgSrc}`} className="bookPageImg" />
        <div className="bookPageRight">
          <div className="bookInfo">
            <h2 className="bookPageTitle">{book.title}</h2>
            <span className="bookPageAuthor">By {book.author}</span>
          </div>
          <div className="bookPriceCart">
            <p>
              {book.description} for a fair price of ${book.price}
            </p>
            <button onClick={handleClick}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
