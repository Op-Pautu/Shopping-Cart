import React from "react";

import Card from "../../components/Card/Card";
import TopBar from "../../components/TopBar/TopBar";
import "./Store.scss";
export default function Store() {
  return (
    <div className="store">
      <TopBar />
      <Card />
    </div>
  );
}
