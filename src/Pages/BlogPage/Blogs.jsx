import React from "react";
import "./Blogs.css";
import Header from "../../Components/HEADER_SECTION/Header";

const Blogs = () => {
  return (
    <div className="blog-page">
      <div className="header-section">
        <Header />
      </div>
      <section className="blog-section container">
        <h1 className="heading">Blogs</h1>
      </section>
      <div className="blog-line vertical-line">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Blogs;
