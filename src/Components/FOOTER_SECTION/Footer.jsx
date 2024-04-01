import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:suraaj0015@gmail.com";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+9182871-46841";
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="footer-section">
      <div className="footer-container container flex">
        <div className="footer-contents flex">
          <div
            data-aos="fade-up"
            className="footer-content footer-left-content"
          >
            <h2 className="heading">Suraj Portfolio</h2>
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="footer-content footer-right-content"
          >
            <h2 className="heading">Contact Details</h2>
            <div className="contact-details flex">
              <p onClick={handleCallClick}>
                <span>Phone: </span> <Link to={""}>+91 82871-46841 </Link>
              </p>
              <p>
                <span>Email: </span>{" "}
                <Link onClick={handleEmailClick} target="_blank">
                  suraaj0015@gmail.com{" "}
                </Link>
              </p>
              <p>
                <span>Address: </span>{" "}
                <Link
                  to={
                    "https://www.google.com/maps/place/Ashok+Vihar+Phase+3/@28.4723522,77.0733027,12z/data=!4m6!3m5!1s0x390d19efaaf1d83b:0xaa0ab713913b9def!8m2!3d28.4988813!4d77.0246456!16s%2Fg%2F11g9jd_qbs?authuser=0&entry=ttu"
                  }
                  target="_blank"
                >
                  Gurgaon, Haryana-122001{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="footer-content footer-mid-content">
            <h2 className="heading">Quick Links</h2>
            <div className="links">
              <ul className="flex">
                <Link onClick={handleScrollToTop} to={"/"}>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                  <li>Home</li>
                </Link>
                <Link onClick={handleScrollToTop} to="#about">
                  <i class="fa-solid fa-circle-chevron-right"></i>
                  <li>About</li>
                </Link>
                <Link onClick={handleScrollToTop} to={"/projects"}>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                  <li>Projects</li>
                </Link>
                <Link onClick={handleScrollToTop} to={"/blogs"}>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                  <li>Blogs</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr data-aos="fade-up" />
        <div className="copy-right">
          <p>
            Designed with ❤️ by{" "}
            <Link to={"https://www.linkedin.com/in/suraj-47333521b/"}>
              Suraj
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
