import React from "react";
import { useParams } from "react-router-dom";
import data from "../../books";
import TopBar from "../../components/TopBar/TopBar";
import "./BookPage.scss";
export default function BookPage() {
  const { id } = useParams();
  const book = data.find((item) => item.id === parseInt(id));

  return (
    <div className="bookPage">
      <TopBar />
      <div className="bookPageContainer">
        <h1 className="bookPageTitle">{book.title}</h1>
        <p className="bookPageAuthor">Author: {book.author}</p>
        <p className="bookPagePrice">Price: {book.price}</p>
        <img src={`../${book.imgSrc}`} className="bookPageImg" />
        <p>{book.description}</p>
      </div>
    </div>
  );
}
