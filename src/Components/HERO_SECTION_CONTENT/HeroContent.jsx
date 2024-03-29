import React from "react";
import "./HeroContent.css";
import { Link } from "react-router-dom";
import img1 from "../../Assets/Images/suraj passport image.jpg";

const HeroContent = () => {
  return (
    <div className="hero-section-container container">
      <div className="hero-left-content">
        <div className="hero-heading heading flex">
          <h4>Hello Everyone.</h4>
          <h1>I'm Suraj</h1>
          <h2>
            I'm a Web <span>Developer</span>.
          </h2>
        </div>
        <Link
          to={
            "https://drive.google.com/file/d/1DX1LHXKFGjqCt4UcmeNl8wxw3y1i1f3i/view?usp=drive_link"
          }
          className="anchor"
        >
          <button className="aboutBtn secondary-btn">
            Download CV <i class="fa-solid fa-arrow-down"></i>
          </button>
        </Link>
      </div>
      <div className="hero-right-content">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default HeroContent;
