import React from "react";
import "./Pricing.css";
const Pricing = () => {
  return (
    <div class="pricing-wrapper">
      <div className="salom">
        <h1>
          Get the right plan <br /> for future product.
        </h1>
        <button className="alik">Yearly</button>
        <button className="javob">Monthly</button>
      </div>
      <div class="pricing-box">
        <h3 class="plan-type">Starter</h3>
        <h2 class="plan-price">Free</h2>
        <ul class="plan-features">
          <li>1 Website</li>
          <li>5 GB Hosting</li>
          <li>Limited Support</li>
        </ul>
        <button class="plan-button1">Get Started</button>
      </div>

      <div class="pricing-box premium-highlight">
        <h3 class="plan-type">Premium</h3>
        <h2 class="plan-price">
          $29 <span>/month</span>
        </h2>
        <ul class="plan-features">
          <li>10 Websites</li>
          <li>15 GB Hosting</li>
          <li>Premium Support</li>
        </ul>
        <button class="plan-button">Get Started</button>
      </div>
      <div class="pricing-box">
        <h3 class="plan-type">Enterprise</h3>
        <h2 class="plan-price">
          $49 <span>/month</span>
        </h2>
        <ul class="plan-features">
          <li>Unlimited Websites</li>
          <li>50 GB Hosting</li>
          <li>Premium Support</li>
        </ul>
        <button class="plan-button2">Get Started</button>
      </div>
    </div>
  );
};
export default Pricing;
