import React from "react";
import NemaAI from "../../assets/nemaAI.png";
import Climate from "../../assets/4Climate.png";
import tourprabhandhak from "../../assets/tourPrabhandhak.png";
import "./portfolio.css";

const Projects = () => {
  const miniProjects = [
    {
      id: 2,
      title: "NemaAI⭐",
      img: NemaAI,
      description:
        "NemaAI is a project that involved updating the existing code and implementing significant changes. Leveraging HTML, CSS, JavaScript, Bootstrap, and OwlCarousel, I have successfully accomplished the required modifications and enhancements for our client.",
      technologies: "HTML | CSS | JavaScript | Bootstrap | OwlCarousel",
      // technologies: "",
      link: "https://nemaai.com/index.html",
      github: "",
    },
  ];
  return (
    <>
      <section id="portfolio">
        <div className="container portfolio__container">
          {miniProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className="portfolio__item-cta">
                {pro.github && (
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {pro.link && (
                  <a
                    href={pro.link}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
