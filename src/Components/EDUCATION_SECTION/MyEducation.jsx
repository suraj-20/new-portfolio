import React, { useEffect } from "react";
import "./MyEducation.css";
import Aos from "aos";
import "aos/dist/aos.css"

const MyEducation = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  })
  return (
    <div className="education-container">
      <div data-aos="fade-up" className="education-section-content container flex">
        <div className="education-heading">
          <h1>Education.</h1>
        </div>
        <div className="education-cards">
          <div className="education-card-container">
            <div className="education-institue-name">
              <h2>Govt. Model Sr. Sec. School <span>|</span> BSEH</h2>
            </div>
            <div className="institue-name-or-year">
              <p>School of Commerce</p>
              <span>|</span>
              <p>2019 - 2021</p>
            </div>
          </div>
          <div className="education-card-container">
            <div className="education-institue-name">
              <h2>Bachelor Degree</h2>
            </div>
            <div className="institue-name-or-year">
              <p>Starex University</p>
              <span>|</span>
              <p>Computer Application</p>
              <span>|</span>
              <p>2021 - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
