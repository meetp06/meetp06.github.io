// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "./resume.css";

const Resume = () => {
  const experiences = [
    {
      id: 1,
      company: "Infolabz, Gujarat, India",
      title: "Trainee",
      date: "January 2024 - July 2024",
      skills: "(Python, AI/ML, ML Algorithams, Power BI)",
      content:
        "Creating meaningful Dashboard in Power BI, Create ML model using python and it's libraries",
      link: "https://www.linkedin.com/company/infolabz/mycompany/",
    },
    {
      id: 2,
      company: "Simform Solutions (CMMI Level 3), Gujarat, India",
      title: "Apprenticeship (React-Native)",
      date: "February 2023 - July 2023",
      skills:
        "(React Native, Typescript, Redux, Mobile Design, Debugging)",
      content: "Engineering Mobile App services in Fintech domain",
      link: "https://www.linkedin.com/company/simform/posts/?feedView=all",
    },
  ];

  const education = [
    {
      id: 1,
      school: "San Jose State University",
      degree: "Master of Science, Data Analytics",
      date: "August 2024 - Present",
      content: "Spartan Leader, Member of GDG San Jose",
      link: "https://www.sjsu.edu/",
    },
    {
      id: 2,
      school: "Gandhinagar Institute of Technology, Gujarat, India",
      degree: "Bachelor of Engineering, Information Technology",
      date: "August 2019 - August 2023",
      cgpa: "7.72 / 10.0",
      content:
        "Student Teaching Assistant",
      link: "https://www.gandhinagaruni.ac.in/institute-git-home/",
    },
    {
      id: 3,
      school: "Gaytri Vidhyalaya, Ahmedabad, Gujarat, India",
      degree: "Higher Secondary school",
      date: "March 2017 - May 2019",
    },
  ];

  return (
    <div className="container my-5 d-block">
      <div className="row">
        <div className="col-12 text-center my-4">
          <a href="/meet_resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Experience</h2>
        </div>
      </div>

      <div className="timeline">
        {experiences.map((job) => (
          <div className="timeline-item" key={job.id}>
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5 className="timeline-title">
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  {job.company}
                </a>
              </h5>
              <h6 className="text-muted">{job.title}</h6>
              <small className="text-muted">{job.date}</small>
              <p>
                <b>Skills</b>: {job.skills}
                <br />
                {job.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="text-center my-4">Education</h2>
        </div>
      </div>

      <div className="timeline">
        {education.map((edu) => (
          <div className="timeline-item" key={edu.id}>
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5 className="timeline-title">
                {edu.link ? (
                  <a href={edu.link} target="_blank" rel="noopener noreferrer">
                    {edu.school}
                  </a>
                ) : (
                  edu.school
                )}
              </h5>
              <h6 className="text-muted">{edu.degree}</h6>
              <small className="text-muted">{edu.date}</small>
              <p>
                {edu.cgpa && (
                  <>
                    <b>CGPA</b>: {edu.cgpa}
                    <br />
                  </>
                )}
                {edu.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
