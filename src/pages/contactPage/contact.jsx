// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "./contact.css";

// IMPORT ICONS
import linkedinIcon from "../../assets/icons/linkedIn_icon.png";
import githubIcon from "../../assets/icons/github_icon.png";
import emailIcon from "../../assets/icons/email_icon.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-intro">
        <p className="contact-details">Reach out to me on:</p>
        <div className="contact-emails">
          <a
            href="mailto:meetmp108@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-email"
          >
            Email - meetmp108@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/meetpatel06/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-email"
          >
            LinkedIn - Meet Patel
          </a>
        </div>
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
                className="home-icons"
                width="80px"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
