import React from "react";
import logo1 from "../assets/Group 73 (1).png";
import "./Features.css";
const About = () => {
  return (
    <section class="about">
      <div class="about-image">
        <div class="image-container">
          <img src={logo1} alt="" />
          <div class="border-box"></div>
        </div>
      </div>
      <div class="about-content">
        <h4>ABOUT US</h4>
        <h2>Interioris The Will of An Epoch Mextreo</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, sure there isn't anything
          embarrassing hidden the middle of text.
        </p>
        <p>
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </p>
       
         <button className="btn"> LEARN MORE</button>
      
      </div>
    </section>
  );
};
export default About;
