import React from "react";
// import img1 from "../../assets/portfolio1.jpg";
// import meesho from "../../assets/meesho.png";
import NemaAI from "../../assets/nemaAI.png";
import Climate from "../../assets/4Climate.png";
import tourprabhandhak from "../../assets/tourPrabhandhak.png";
import "./portfolio.css";

const Portfolio = () => {
  const professionalProjects = [
    {
      id: 1,
      title: "4Climate⭐",
      img: Climate,
      description:
        "Completed phase one, solved bugs. User components trigger hydroponic plant actions, real-time results on dashboard. Websockets enable efficient state management. Promoting sustainability and empowering users.",
      technologies: "React",
      // technologies: "",
      link: "https://test.4climate.in/",
      github: "",
    },
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
    {
      id: 3,
      title: "Tour Prabhandhak⭐",
      img: tourprabhandhak,
      description:
        "I successfully debugged Tour Prabhandhak, a tourism website, and created new components using HTML, CSS, and JavaScript. Improved functionality, fixed errors, and enhanced user experience.",
      technologies: "HTML | CSS | JS",
      // technologies: "",
      link: "https://tourprabhandhak.com/",
      github: "",
    },
  ];
  return (
    <>
      <section id="portfolio">
        {/* <h5>My Recent Work</h5> */}
        {/* <h2>Portfolio</h2> */}
        <h2>Some Professional Projects</h2>

        <div className="container portfolio__container">
          {professionalProjects.map((pro) => (
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

                {/* <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a> */}
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

export default Portfolio;
