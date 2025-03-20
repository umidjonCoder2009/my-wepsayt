import React from "react";
import logo from "../assets/Group 78.png";
import "./services.css";
function Services() {
  return (
    <div className="container">
      <div className="text-section">
        <h1 style={{ color: "#B0855B" }}>20</h1>
        <p>
          Years Of Successful <br /> Working <br /> The Market
        </p>
        <button className="read-more">READ MORE </button>
      </div>
      <div className="image-section">
        <img src={logo} alt="Decorative Wooden Shelves" />
      </div>
    </div>
  );
}
export default Services;
