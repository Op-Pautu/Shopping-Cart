import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../../components/MainPage/MainPage";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.scss";
export default function Home() {
  return (
    <div className="home">
      <TopBar />
      <MainPage />
      <Link to="/store">Store</Link>
    </div>
  );
}
