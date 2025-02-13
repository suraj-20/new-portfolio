import React, { useEffect } from "react";
import "./About.css";
import img from "../../Assets/Images/suraj passport image.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:suraaj0015@gmail.com";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+9182871-46841";
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="about-container container">
      <div className="about-contents">
        <div data-aos="fade-right" className="about-left-content">
          <img src={img} alt="" />
        </div>
        <div data-aos="fade-right" className="about-right-content">
          <div className="about-me-heading">
            <h1>About Me.</h1>
          </div>
          <div className="about-me-pera">
            <p>
              Passionate and dedicated Web Developer with a strong foundation in building responsive, user-friendly
              websites and dashboards. Skilled in solving <strong> Data Structures and Algorithms (DSA)</strong> problems, with over
              <strong> 200+ solutions on GeeksforGeeks (GFG)</strong> and <strong>100+ solutions on LeetCode</strong>. Actively seeking
              opportunities to contribute technical expertise, drive innovation, and deliver impactful web solutions. Proven
              ability to adapt and excel in challenging environments, with a continuous focus on learning and growth.
            </p>
          </div>
          <div className="contact-details flex">
            <p onClick={handleCallClick}>
              <span>Phone: </span>{" "}
              <Link style={{ color: "black" }}>+91 82871-46841 </Link>
            </p>
            <p>
              <span>Email: </span>{" "}
              <Link
                style={{ color: "black" }}
                onClick={handleEmailClick}
                target="_blank"
              >
                suraaj0015@gmail.com{" "}
              </Link>
            </p>
            <p>
              <span>Address: </span>{" "}
              <Link
                style={{ color: "black" }}
                to={
                  "https://www.google.com/maps/place/Ashok+Vihar+Phase+3/@28.4723522,77.0733027,12z/data=!4m6!3m5!1s0x390d19efaaf1d83b:0xaa0ab713913b9def!8m2!3d28.4988813!4d77.0246456!16s%2Fg%2F11g9jd_qbs?authuser=0&entry=ttu"
                }
                target="_blank"
              >
                Gurgaon, Haryana-122001{" "}
              </Link>{" "}
            </p>
          </div>
          <div className="btns">
            <Link to={""}>
              <button className="hire-me-btn primary-btn">Hire Me</button>
            </Link>
            <Link
              to={
                "https://drive.google.com/file/d/1bQcxkoZ964qdyfJdeKWqhWopAydU05n9/view?usp=sharing"
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
