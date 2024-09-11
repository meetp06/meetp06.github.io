import React from "react";
import "./about.css";

import LinkedInRecos from "../../sections/recommendation/recommendation";

const About = () => {
  return (
    <div className="container my-5 d-block">
      <div className="row">
        <div className="col-12">
          <h1 className="my-4">About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="about-details">
            Welcome to my portfolio! I am Meet Patel, a passionate and
            dedicated Data Scientist based in San Jose, CA. With a robust
            educational background and diverse professional experience as intern, I am
            currently pursuing a Master of Science in Data Analytics at
            San Jose State University. I am an active member of GDG San Jose.
          </p>
          <p className="about-details">
            My journey began at Gandhinagar Institute of Technology in
            Gandhinagar, Gujarat, where I earned my Bachelor of Engineering in
            Information Technology. During my undergraduate studies, I
            participated in the GDG Gandhinagar and Delhi and consistently achieved
            high academic honors.
          </p>
          <p className="about-details">
            I am a dedicated and passionate developer with one year of hands-on experience gained through
            internships at Simform Solutions and Infolabz. During my 6-month internship at Simform Solutions,
            I honed my skills in mobile application development using React Native, focusing on API integration and
            creating seamless user experiences. Following this, I spent another 6 months at Infolabz, where I
            delved into the world of data science and analytics. I developed a strong foundation in Python,
            working with libraries such as NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, and Keras.
            My work included creating insightful dashboards with Power BI and developing machine learning
            models for various applications, including image processing for bone fracture detection and
            vegetable condition assessment. My diverse experience has equipped me with a unique blend of
            skills in both mobile development and data
            science, enabling me to approach problems with a innovative perspective.
          </p>
          <p className="about-details">
            I look forward to giving back to the community in any way possible.
            Driven by a commitment to excellence and continuous learning, I am
            always eager to take on new challenges and contribute to innovative
            solutions. Connect with me on LinkedIn or explore my projects on
            GitHub.
          </p>
          <p className="about-details">
            Besides my ability to drive innovation and collaborate, I enjoy
            listening to music and mountain hiking. I am always excited to meet
            new people and make friends. Feel free to drop me a note on
            LinkedIn, and let's arrange a coffee chat!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <LinkedInRecos />
        </div>
      </div>
    </div>
  );
};

export default About;
