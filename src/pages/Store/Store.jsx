import React from "react";
import { Link, redirect, Navigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import TopBar from "../../components/TopBar/TopBar";
import "./Store.scss";
import { useNavigate } from "react-router-dom";
export default function Store() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <div className="store">
      <TopBar />
      <Card handleClick={handleClick} />
    </div>
  );
}
