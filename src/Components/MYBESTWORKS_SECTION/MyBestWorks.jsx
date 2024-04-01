import React from "react";
import "./MyBestWorks.css";
import img from "../../Assets/Images/travel.png";
import img2 from "../../Assets/Images/trippy.png";
import img3 from "../../Assets/Images/eizacrm.png";
import img4 from "../../Assets/Images/treehouse.png";
import img5 from "../../Assets/Images/notes.png";
import { Link } from "react-router-dom";
import Header from "../HEADER_SECTION/Header";

const cardObj = [
  {
    id: 1,
    project_name: "Travel",
    project_image: img,
    project_link: "https://travel-app-28.netlify.app/",
    project_git_link: "https://github.com/suraj-20/travel",
  },
  {
    id: 2,
    project_name: "Trippy",
    project_image: img2,
    project_link: "https://trippy-15.netlify.app/",
    project_git_link: "https://github.com/suraj-20/trippy",
  },
  {
    id: 3,
    project_name: "eizacrm",
    project_image: img3,
    project_link: "https://eizacrm.netlify.app/",
    project_git_link:
      "https://github.com/suraj-20/landing-page-for-business-crm",
  },
  {
    id: 4,
    project_name: "treehouse",
    project_image: img4,
    project_link: "https://treehouse-28.netlify.app",
    project_git_link: "https://github.com/suraj-20/treehouse",
  },
  {
    id: 5,
    project_name: "Notes app",
    project_image: img5,
    project_link: "https://noteapp-28.netlify.app/login",
    project_git_link: "https://github.com/suraj-20/notes-app",
  },
];

const MyBestWorks = () => {
  return (
    <div className="recent-project-container mybest-work-container">
      {/* <div className="project-background-image"></div> */}
      <div className="header-section">
        <Header />
      </div>
      <div className="projects-section-content container flex">
        <div className="projects-heading">
          <h1 className="heading">My Best Wroks.</h1>
        </div>
        <div className="project-cards myBest-work-card">
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
      </div>
      {/* <div className="projects-section-dot dots">
        <img src={pngwing} alt="" />
      </div>
      <div className="project-section-bg background-image">
        <div className="hero-right-container project-bg"></div>
      </div> */}
    </div>
  );
};

export default MyBestWorks;
