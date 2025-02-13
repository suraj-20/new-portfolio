import React, { useEffect, useState } from "react";
import "./HeroContent.css";
import { Link } from "react-router-dom";
import img1 from "../../Assets/Images/suraj passport image.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroContent = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Full Stack dev"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 300;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="hero-section-container container">
      <div data-aos="fade-up" className="hero-left-content">
        <div className="hero-heading heading flex">
          <h4>Hello Everyone.</h4>
          <h1>I'm Suraj</h1>
          <h2>
            I'm a <span>{text}</span>.
          </h2>
        </div>
        <Link
          to={
            "https://drive.google.com/file/d/1bQcxkoZ964qdyfJdeKWqhWopAydU05n9/view?usp=sharing"
          }
          className="anchor"
        >
          <button className="aboutBtn secondary-btn">
            Download CV <i class="fa-solid fa-arrow-down"></i>
          </button>
        </Link>
      </div>
      <div data-aos="fade-up" className="hero-right-content">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default HeroContent;
