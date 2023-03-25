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
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="0.69"
          d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,138.7C672,171,768,213,864,202.7C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
}
