import React from "react";
import { Link, redirect, Navigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import TopBar from "../../components/TopBar/TopBar";
import "./Store.scss";
export default function Store() {
  const handleClick = () => {
    console.log("clicked");
    <Link to="/Cart"></Link>;
  };

  return (
    <div className="store">
      <TopBar />
      <Card handleClick={handleClick} />
    </div>
  );
}
