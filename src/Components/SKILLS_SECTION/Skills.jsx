import React, { useEffect } from "react";
import "./Skills.css";
import Aos from "aos";
import "aos/dist/aos.css"

const skillObj = [
  {
    id: 1,
    skill_name: "ReactJS",
    skill_icon: <i class="fa-brands fa-react"></i>,
  },
  {
    id: 2,
    skill_name: "JavaScript",
    skill_icon: <i class="fa-brands fa-js"></i>,
  },
  {
    id: 3,
    skill_name: "NodeJS",
    skill_icon: <i class="fa-brands fa-node"></i>,
  },
  {
    id: 4,
    skill_name: "ExpressJS",
    skill_icon: <i class="fa-brands fa-node-js"></i>,
  },
  {
    id: 5,
    skill_name: "MonogoDB",
    skill_icon: <i class="fa-brands fa-envira"></i>,
  },
  {
    id: 6,
    skill_name: "HTML",
    skill_icon: <i class="fa-brands fa-html5"></i>,
  },
  {
    id: 7,
    skill_name: "CSS",
    skill_icon: <i class="fa-brands fa-css3-alt"></i>,
  },
  {
    id: 8,
    skill_name: "Bootstrap",
    skill_icon: <i class="fa-brands fa-bootstrap"></i>,
  },
  {
    id: 9,
    skill_name: "Github",
    skill_icon: <i class="fa-brands fa-github"></i>,
  },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  })
  const colors = [
    "rgba(0, 162, 255, 0.79)",
    "yellow",
    "green",
    "green",
    "green",
    "orange",
    "blue",
    "purple",
    "white",
  ];
  return (
    <div className="skills-container">
      <div className="skill-section-content container flex">
        <div data-aos="fade-up" className="skill-heading">
          <h1 className="heading">Skills & Abilites.</h1>
        </div>
        <div className="skill-social-icons">
          {skillObj.map((skill, i) => {
            return (
              <div data-aos="fade-right" key={skill.id} className="social-icon-card">
                <div
                  className="social-icon"
                  style={{ color: colors[i % colors.length] }}
                >
                  {skill.skill_icon}
                </div>
                <h3 className="heading">{skill.skill_name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
