import React from "react";
import "./MyBestWorks.css"
// import img from "../../Assets/Images/Screenshot 2024-02-27 165642.png";
// import img2 from "../../Assets/Images/todoapp ss.png";
// import img3 from "../../Assets/Images/wowfare.png";
// import { Link } from "react-router-dom";
import pngwing from "../../Assets/Images/pngwing.com (1).png";
import Header from "../HEADER_SECTION/Header";

// const cardObj = [
//   {
//     id: 1,
//     project_name: "Shopify",
//     project_image: img,
//     project_link: "https://shopify-28.netlify.app/",
//     project_git_link: "https://github.com/suraj-20/frontend",
//   },
//   {
//     id: 2,
//     project_name: "Todos",
//     project_image: img2,
//     project_link: "https://todos-28.netlify.app/login",
//     project_git_link: "https://github.com/suraj-20/todo-frontend",
//   },
//   {
//     id: 3,
//     project_name: "wowfare",
//     project_image: img3,
//     project_link: "https://client-puce-ten.vercel.app/",
//     project_git_link: "https://github.com/suraj-20/client",
//   },
// ];

const MyBestWorks = () => {
  return (
    <div className="recent-project-container">
      {/* <div className="project-background-image"></div> */}
      <div className="header-section">
        <Header />
      </div>
      <div className="projects-section-content container flex">
        <div className="projects-heading">
          <h1 className="heading">Recent Projects</h1>
        </div>
      </div>
      <div className="projects-section-dot dots">
        <img src={pngwing} alt="" />
      </div>
      <div className="project-section-bg background-image">
        <div className="hero-right-container project-bg"></div>
      </div>
    </div>
  );
};

export default MyBestWorks;
