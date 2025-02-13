import React from "react";
import "./Home.css";
import Hero from "../../Components/HERO_SECTION/Hero";
import About from "../../Components/ABOUT_SECTION/About";
import RecentProjects from "../../Components/RECENTPROJECT_SECTION/RecentProjects";
import MyEducation from "../../Components/EDUCATION_SECTION/MyEducation";
import Skills from "../../Components/SKILLS_SECTION/Skills";
import Contact from "../../Components/CONTACTDETAILS_SECTION/Contact";
import MyExperience from "../../Components/EXPERIENCE_SECTION/MyExperience";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Hero />
      </section>
      <section id="about" className="about-section">
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
      <section className="experience-section">
        <MyExperience />
      </section>
      <section className="education-section">
        <MyEducation />
      </section>
      <section className="skill-section">
        <Skills />
      </section>
      <section className="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
