import React from "react";
import "./Home.css";
import Hero from "../../Components/HERO_SECTION/Hero";
import About from "../../Components/ABOUT_SECTION/About";
import RecentProjects from "../../Components/RECENTPROJECT_SECTION/RecentProjects";
import MyEducation from "../../Components/EDUCATION_SECTION/MyEducation";

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
      <section className="recent-project-section">
        <RecentProjects />
        <div className="recent-green-line">
          <div className="line"></div>
        </div>
      </section>
      <section className="education-section">
        <MyEducation />
      </section>
    </div>
  );
};

export default Home;
