import React from "react";
import "./Project.css";
import MyBestWorks from "../../Components/MYBESTWORKS_SECTION/MyBestWorks";

const Project = () => {
  return (
    <div className="project-page">
      <section className="project-section">
        <MyBestWorks />
        <div className="blog-line vertical-line">
          <div className="line"></div>
        </div>
      </section>
    </div>
  );
};

export default Project;
