import React from "react";
import { useParams } from "react-router-dom";
import data from "../../books";
import TopBar from "../../components/TopBar/TopBar";
import "./BookPage.scss";
export default function BookPage({ handleAddToCart }) {
  const { id } = useParams();
  const book = data.find((item) => item.id === parseInt(id));

  const handleClick = () => {
    handleAddToCart(book);
    console.log(book);
  };
  return (
    <div className="bookPage">
      <TopBar />
      <div className="bookPageContainer">
        <img src={`../${book.imgSrc}`} className="bookPageImg" />
        <div className="bookPageRight">
          <div className="bookInfo">
            <h2 className="bookPageTitle">{book.title}</h2>
            <span className="bookPageAuthor">By {book.author}</span>
          </div>
          <div className="bookPriceCart">
            <p>
              {book.description} for a fair price of {book.price}
            </p>
            <button onClick={handleClick}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
