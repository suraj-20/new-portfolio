import React from "react";
import "./Contact.css";
import img from "../../Assets/Images/undraw_mobile_content_xvgr.svg";

const Contact = () => {
  return (
    <div className="contact-details-container">
      <div className="contact-section-content container flex">
        <div className="contact-heading">
          <h1>Contact Me.</h1>
        </div>
        <div className="contact-form-container">
          <div className="left-content-container">
            <img src={img} alt="" />
          </div>
          <div className="vertical-line">
            <div className="line"></div>
          </div>
          <div className="right-content-container">
            <form action="">
              <div className="form-content">
                <div className="input-field name-input">
                  <span>
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <input type="text" name="" id="" placeholder="Name" />
                </div>
                <div className="input-field email-input">
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <input type="email" name="" id="" placeholder="Email" />
                </div>
                <div className="input-field phone-input">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <input type="tel" name="" id="" placeholder="Phone" />
                </div>
                <div className="input-field">
                  <span>
                    <i class="fa-solid fa-message"></i>
                  </span>
                  <textarea name="" id="" placeholder="Message"></textarea>
                </div>
              </div>
              <div className="submitBtn">
                <button type="submit" className="primary-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
