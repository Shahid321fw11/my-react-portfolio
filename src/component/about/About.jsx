import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import s4 from "../../assets/s4.jpeg";
import "./about.css";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={s4} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ year</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Personal Projects</h5>
                <small>10+ Completed Projects</small>
              </article>
            </div>
            <p>
              Enthusiastic, self-motivated web developer with experience
              building web platforms. Curious self-learner, with specialization
              in MERN stack. I've spent several months as an Jr. Frontend
              Developer in Z1 Media. Working on landing pages, fixing bugs to
              creating new Advertising units. Apart from this, I learn MERN
              Stack developement from Masai School. Looking for a challenging
              opportunity in a fast-paced organization.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
