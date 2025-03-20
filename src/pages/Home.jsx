import React from "react";
import logo1 from "../assets/Group 63 (1).png";
import "./Home.css";
const Home = () => {
  return (
    <div className="hero">
      <div className="text-container">
        <h4>MODERN INTERIOR</h4>
        <h1>
          Create Your <br /> Interior <br /> Design.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim <br /> veniam, quis nostrud exercitation.
        </p>
        <button class="contact-button">CONTACT</button>
      </div>
      <img src={logo1} alt="" />
      <div className="salom"></div>
    </div>
  );
};
export default Home;
