import React from "react";
import "./Hero.css";
import Header from "../HEADER_SECTION/Header";
import HeroContent from "../HERO_SECTION_CONTENT/HeroContent";
import pngwing from "../../Assets/Images/pngwing.com (1).png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="background-image">
        <div className="hero-left-container"></div>
        <div className="hero-right-container"></div>
      </div>
      <div className="hero-contents">
        <div className="header-section">
          <Header />
        </div>
        <div className="hero-section-content">
          <HeroContent />
        </div>
      </div>
      <div className="dots">
        <img src={pngwing} alt="" />
      </div>
    </div>
  );
};

export default Hero;
