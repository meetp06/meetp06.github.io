// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "./home.css";

// IMPORT IMAGES
import profileImage from "../../assets/images/meet_profile.jpeg";

// IMPORT ICONS
import linkedinIcon from "../../assets/icons/linkedIn_icon.png";
import githubIcon from "../../assets/icons/github_icon.png";
import emailIcon from "../../assets/icons/email_icon.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={profileImage} className="home-img" alt=""></img>

      <div className="home-intro">
        <p className="home-university">Welcome!! Explore My Creative Journey</p>
        <p className="home-name">I'm Meet Patel</p>
        <p className="home-university">
          MS Data Analytics Student @San Jose State University
        </p>
        <p className="home-address">
          Ex Application Engineer & Data Scientist (Intern) - Simform Solutions, Infolabz
        </p>
        <p className="home-address">San Jose, California, USA</p>
      </div>

      <div className="home-icons-wrapper text-center">
        <ul className="list-inline">
          <li className="d-inline">
            <a
              href="https://www.linkedin.com/in/meetpatel06/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="home-icons"
                width="80px"
              />
            </a>
          </li>
          <li className="d-inline">
            <a
              href="https://github.com/meetp06"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="home-icons"
                width="80px"
              />
            </a>
          </li>
          <li className="d-inline">
            <a
              href="mailto:meetmp108@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={emailIcon}
                alt="Email"
                width="100px"
                className="home-icons"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <a href="/meet_resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
