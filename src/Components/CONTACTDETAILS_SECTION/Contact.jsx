import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import img from "../../Assets/Images/undraw_mobile_content_xvgr.svg";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Email sended.");

    emailjs
      .sendForm(
        "service_uwichbi",
        "template_03ah1vm",
        e.target,
        "rlY-YE4GvwkqshyyU"
      )
      .then((result) => {
        alert(result.text);
      })
      .catch((error) => {
        alert(error.text);
      });
  };
  return (
    <div className="contact-details-container">
      <div className="contact-section-content container flex">
        <div data-aos="fade-up" className="contact-heading">
          <h1>Contact Me.</h1>
        </div>
        <div  className="contact-form-container">
          <div data-aos="fade-right" className="left-content-container">
            <img src={img} alt="" />
          </div>
          <div className="vertical-line">
            <div className="line"></div>
          </div>
          <div data-aos="fade-right" className="right-content-container">
            <form ref={form} action="" onSubmit={sendEmail}>
              <div className="form-content">
                <div className="input-field name-input">
                  <span>
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                  />
                </div>
                <div className="input-field email-input">
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>
                <div className="input-field phone-input">
                  <span>
                    <i class="fa-solid fa-phone"></i>
                  </span>
                  <input
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    name=""
                    id=""
                    placeholder="Phone"
                  />
                </div>
                <div className="input-field">
                  <span>
                    <i class="fa-solid fa-message"></i>
                  </span>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name=""
                    id=""
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="submitBtn">
                <button type="submit" className="primary-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
