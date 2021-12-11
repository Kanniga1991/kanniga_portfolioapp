import React from "react";
import { Element } from "react-scroll";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <Element id = "about">
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello , Iam{" "}
              <span className="highlighted-text"> Kanniga Manivannan </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 🌐",
                    1000,
                    "React Dev 📲",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a
              href="KANNIGA(Developer_resume).pdf"
              download="KANNIGA(Developer_resume).pdf"
            >
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
    </Element>
  );
}
