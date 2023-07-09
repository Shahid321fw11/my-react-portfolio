import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import s4 from "../../assets/me_about.jpeg";
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
                <h5>Personal & Professional Projects</h5>
                <small>10+ Completed Projects</small>
              </article>
            </div>
            {/* <p>
              Enthusiastic, self-motivated web developer with experience
              building web platforms. Curious self-learner, with specialization
              in MERN stack. I've spent several months as an Jr. Frontend
              Developer in Z1 Media. Working on landing pages, fixing bugs to
              creating new Advertising units. Apart from this, I learn MERN
              Stack developement from Masai School. Looking for a challenging
              opportunity in a fast-paced organization.
            </p> */}
            <p>
            Hello! I'm an enthusiastic and self-motivated web developer with experience in building web platforms. Specializing in the MERN stack, I gained valuable skills through training at Masai School. As a Jr. Frontend Developer at Z1 Media, I worked on diverse projects including landing pages and advertising units. In my recent role at Cybernauts, I contributed to various projects and honed my skills in a fast-paced environment. Now, I'm seeking a new opportunity to utilize my expertise and passion for web development. I thrive on self-improvement and look forward to making a valuable contribution to your organization.
            </p>
            <div>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
