import React from "react";
import "./MainPage.scss";
import { Link } from "react-router-dom";
export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="mainContainer">
        <div className="leftContent">
          <h3>BEST BOOKSTORE IN THE 'HOOD</h3>
          <p>Something something knowledge is power</p>
          <div className="shopBtn">
            <Link to="/store">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="rightContent">
          <img className="bookPic" src="" alt="bookstore" />
        </div>
      </div>
    </div>
  );
}
