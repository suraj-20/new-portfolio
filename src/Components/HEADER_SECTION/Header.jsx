import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:suraaj0015@gmail.com?subject=Subject%20Here&body=Body%20Here"
  }
  return (
    <div className="header-container flex">
      <div className="logo">
        <Link to={"/"}>
          <h3 className="heading">PORTFOLIO.</h3>
        </Link>
      </div>
      <div className="social-icons-to-connet-me flex">
        <div className="contact-me">
          <p>Contact Me</p>
        </div>
        <div className="social-icons">
          <div className="icons flex">
            <Link
              onClick={handleEmailClick}
            >
              <i  class="fa-solid fa-envelope"></i>
            </Link>
            <Link to={"https://github.com/suraj-20"}>
              {" "}
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link to={"https://www.linkedin.com/in/suraj-47333521b/"}>
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
