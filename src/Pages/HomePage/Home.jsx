import React from "react";
import "./Home.css";
import Hero from "../../Components/HERO_SECTION/Hero";
import About from "../../Components/ABOUT_SECTION/About";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Hero />
      </section>
      <section className="about-section">
        <About />
        <div className="green-line">
          <div className="line"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
