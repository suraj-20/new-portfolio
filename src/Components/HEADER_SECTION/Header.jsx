import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container flex">
      <div className="logo">
        <h3 className="heading">PORTFOLIO.</h3>
      </div>
      <div className="social-icons-to-connet-me flex">
        <div className="contact-me">
          <p>Contact Me</p>
        </div>
        <div className="social-icons">
          <div className="icons flex">
            <Link to={""}><i class="fa-solid fa-envelope"></i></Link>
            <i class="fa-solid fa-phone"></i>
            <Link to={""}><i class="fa-brands fa-linkedin"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
