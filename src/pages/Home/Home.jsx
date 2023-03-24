import React from "react";

import MainPage from "../../components/MainPage/MainPage";
import TopBar from "../../components/TopBar/TopBar";
import "./Home.scss";
export default function Home() {
  return (
    <div className="home">
      <TopBar />
      <MainPage />
    </div>
  );
}
