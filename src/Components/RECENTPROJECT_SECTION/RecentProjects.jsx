import React, { useEffect } from "react";
import "./RecentProjects.css";
import img from "../../Assets/Images/Screenshot 2024-02-27 165642.png";
import img2 from "../../Assets/Images/Chat App Ss.png";
import img3 from "../../Assets/Images/Dashboard-ss.png";
import pngwing from "../../Assets/Images/pngwing.com (1).png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const cardObj = [
  {
    id: 1,
    project_name: "Char App",
    project_image: img2,
    project_link: "https://chat-app-vert-eta.vercel.app/login",
    project_git_link: "https://github.com/suraj-20/Chat-App",
  },
  {
    id: 2,
    project_name: "Shopify",
    project_image: img,
    project_link: "https://shopify-28.netlify.app/",
    project_git_link: "https://github.com/suraj-20/frontend",
  },
  {
    id: 3,
    project_name: "Dashboard",
    project_image: img3,
    project_link: "https://data-visualization-dashboard-eight.vercel.app/",
    project_git_link: "https://github.com/suraj-20/Data-Visualization-Dashboard",
  },
];

const RecentProjects = () => {
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
    <div className="recent-project-container">
      {/* <div className="project-background-image"></div> */}
      <div className="project-section-content container flex">
        <div className="project-heading">
          <h1 data-aos="fade-up" className="heading">
            Recent Projects
          </h1>
        </div>
        <div className="project-cards">
          {cardObj.map((card, i) => {
            return (
              <div
                data-aos="fade-right"
                key={card.id}
                className="card-container card"
              >
                <Link
                  to={card.project_link}
                  target="_black"
                  className="project-image"
                >
                  <img src={card.project_image} alt="" />
                </Link>
                <div className="card-contents">
                  <div className="project-name">
                    <h2 className="">{card.project_name}</h2>
                    <p className="pera">Portfolio 2024.</p>
                  </div>
                  <div className="project-link">
                    <Link target="_black" to={card.project_git_link}>
                      <i class="fa-solid fa-code"></i>
                    </Link>
                    <Link target="_black" to={card.project_link}>
                      <i class="fa-solid fa-link"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link data-aos="fade-right" to={"/projects"} className="project-btn">
          <button onClick={handleScrollToTop} className="secondary-btn">
            More Projects
          </button>
        </Link>
      </div>
      <div className="project-section-dot dots">
        <img src={pngwing} alt="" />
      </div>
    </div>
  );
};

export default RecentProjects;
