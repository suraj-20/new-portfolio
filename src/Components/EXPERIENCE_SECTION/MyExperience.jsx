import React, { useEffect } from "react";
import "./MyExperience.css";
import Aos from "aos";
import "aos/dist/aos.css"

const MyExperience = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div className="experience-container">
            <div data-aos="fade-up" className="experience-section-content container flex">
                <div className="experience-heading">
                    <h1>Experience.</h1>
                </div>
                <div className="experience-cards">
                    <div className="experience-card-container">
                        <div className="experience-name">
                            <h2>Saurashtra Tech Innovations</h2>
                        </div>
                        <div className="work-duration">
                            <p>Frontend Developer</p>
                            <span>|</span>
                            <p>Aug 2024 - Feb 2025</p>
                        </div>
                        <div className="key-points mt-3">
                            <ul style={{ listStyleType: "unset !important" }}>
                                <li>Developed a script to compress images during the upload process, optimizing storage and improving application performance.</li>
                                <li>Designed and implemented a cron job-based notification system, creating an API to schedule and send real-time notifications to app users.</li>
                                <li>Integrated various APIs and automated workflows to enhance platform efficiency and user experience.</li>
                                <li>Gained hands-on experience in full-stack web development, focusing on scalable and client-centric solutions.</li>
                                <li>Built an API to track video progress similar to Udemy, enabling mentors to monitor student engagement and dynamically calculate mentor payouts based on progress.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyExperience;
