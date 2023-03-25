import React from "react";
import TopBar from "../../components/TopBar/TopBar";

import {
  FaTwitter,
  FaGithub,
  FaInstagramSquare,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import "./About.scss";
export default function About() {
  return (
    <div className="about">
      <TopBar />
      <div className="aboutContainer">
        <div className="aboutText">
          <h1>We're a for-profit store looking to earn a living</h1>
          <p>Please help us by buying our books. And so on and so forth</p>
          <p>
            We are a small business that is trying to make a living. We are not
            trying to make a profit. <br />
            We are trying to make a living. We are not trying to make a profit.{" "}
            <br /> We are trying to make a living. We are not trying to make a
            profit. We are trying to make a living. <br />
            We are not ....
          </p>
          <br />
          <br />
          <div className="location">
            <p>
              <span>Address</span>
              <br />
              <span>The Good Place,</span>
              <br />
              <span>Heaven & Earth</span>
              <br />
              <br />
              <span>Working Hours</span>
              <br />
              <span>Monday to Friday: 8:00am - 5:00pm</span>
              <br />
              <span>Saturday: 8:00am - 12:00pm</span>
              <br />
              <span>Sunday: Closed</span>
              <br />
              <br />
              <span>Contact</span>

              <br />
              <span>012-5042-2040</span>
            </p>
          </div>
        </div>
        <div className="aboutIcons">
          <a href="https://github.com/Op-Pautu">
            <FaGithub />
          </a>
          <a href="https://twitter.com/oppautu">
            <FaTwitter />
          </a>
          <a href="https://react-icons.github.io/react-icons/search?q=facebook">
            <FaFacebook />
          </a>

          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
            <FaInstagramSquare />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
