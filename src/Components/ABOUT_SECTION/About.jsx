import React from "react";
import "./About.css";
import img from "../../Assets/Images/suraj passport image.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container container">
      <div className="about-contents">
        <div className="about-left-content">
          <img src={img} alt="" />
        </div>
        <div className="about-right-content">
          <div className="about-me-heading">
            <h1>About Me</h1>
          </div>
          <div className="about-me-pera">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              illo exercitationem libero, sunt aspernatur veniam illum deserunt
              culpa nesciunt, ea at eaque minima, doloremque quae deleniti
              reprehenderit fuga aliquid pariatur! Nisi rerum quos rem aut
              officiis qui sit? Quam fugit hic est laboriosam, non dolore ea
              repellat ad provident nesciunt quod autem earum optio eos maxime
              omnis in pariatur illum.
            </p>
          </div>
          <div className="btns">
            <Link to={""}>
              <button className="hire-me-btn primary-btn">Hire Me</button>
            </Link>
            <Link
              to={
                "https://drive.google.com/file/d/1DX1LHXKFGjqCt4UcmeNl8wxw3y1i1f3i/view?usp=drive_link"
              }
            >
              <button className="download-btn secondary-btn">
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
