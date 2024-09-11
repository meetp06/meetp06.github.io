import React, { useState } from "react";
import "./recommendation.css";
import Chintan from "../../assets/images/chintan_profile.jpeg";
import Twinkle from "../../assets/images/twinkle_profile.jpeg";
import Ravi from "../../assets/images/ravi_profile.jpeg";
import Harsh from "../../assets/images/harsh_profile.jpeg";
import Hiren from "../../assets/images/hiren_profile.jpeg";

const recommendations = [
  {
    id: 1,
    name: "Chintan Nagrecha",
    image: Chintan,
    text: `Working with Meet has been an exceptional experience. As a skilled data analyst, Meet brings a unique blend of technical expertise and analytical thinking to every project. With a solid foundation in Python and proficiency in libraries like NumPy, Pandas, and TensorFlow, Meet has a natural ability to transform complex data into actionable insights.`,
    link: "https://www.linkedin.com/in/chintan-nagrecha-96384730/",
  },
  {
    id: 2,
    name: "Twinkle shah",
    image: Twinkle,
    text: `Beyond technical skills, Meet is a team player who is always eager to collaborate, learn, and contribute to the team’s success. His passion for data and his ability to apply it to solve challenging problems make him an invaluable asset to any project.`,
    link: "https://www.linkedin.com/in/twinkleshahprofile/",
  },
  {
    id: 3,
    name: "Ravi Rupareliya ",
    image: Ravi,
    text: `Meet is an exceptional React Native developer with a keen eye for user experience. Their ability to build seamless, high-performing mobile applications is impressive, and their expertise in API integration ensures that every app functions flawlessly. Meet consistently delivers top-quality work, making them a go-to developer for any mobile project. `,
    link: "https://www.linkedin.com/in/ravi-rupareliya/",
  },
  {
    id: 4,
    name: "Harsh Ughreja",
    image: Harsh,
    text: `Working with Meet on mobile app development has been a great experience. Their mastery of React Native and their commitment to creating smooth, intuitive user interfaces set them apart. Meet is highly skilled at integrating complex APIs, making sure that the end product is both functional and user-friendly.`,
    link: "https://www.linkedin.com/in/harsh-ughreja-468216230/",
  },
  {
    id: 5,
    name: "HIREN LALAKIYA",
    image: Hiren,
    text: `Meet is a standout mobile app developer specializing in React Native. His work is characterized by clean code, efficient API integration, and a strong focus on user-centric design. Meet's dedication to quality and innovation makes him a valuable asset to any development team.`,
    link: "https://www.linkedin.com/in/hiren-lalakiya-65a64b71/",
  },
];

const Recommendations = () => {
  const [currentRecommendation, setCurrentRecommendation] = useState(1);
  const recommender_st = 1;
  const recommender_en = recommendations.length;

  return (
    <div className="container my-5 d-block">
      <div className="row">
        <h2 className="text-center mb-4">Hear from the Awesome Crowd!</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12">
          {recommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className={`card mb-4 ${
                currentRecommendation === recommendation.id
                  ? "d-block"
                  : "d-none"
              }`}
            >
              <div className="card-body text-center">
                <img
                  src={recommendation.image}
                  alt={recommendation.name}
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px" }}
                />
                <p className="card-text">
                  <em>{recommendation.text}</em>
                  <br />
                  <span className="attrib">
                    <a
                      href={recommendation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - {recommendation.name}
                    </a>
                  </span>
                </p>
                <div className="d-flex justify-content-between">
                  {currentRecommendation > recommender_st && (
                    <i
                      className="fas fa-arrow-left"
                      onClick={() =>
                        setCurrentRecommendation(
                          Math.max(recommender_st, currentRecommendation - 1)
                        )
                      }
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                  {currentRecommendation < recommender_en && (
                    <i
                      className="fas fa-arrow-right"
                      onClick={() =>
                        setCurrentRecommendation(
                          Math.min(currentRecommendation + 1, recommender_en)
                        )
                      }
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
