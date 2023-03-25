import React from "react";
import "./Card.scss";

import { useNavigate } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";

export default function Card({ handleClick }) {
  const navigate = useNavigate();
  const addToCart = (item) => {
    handleClick(item);
    navigate("/cart");
  };

  return (
    <>
      <SingleCard />
    </>
  );
}
