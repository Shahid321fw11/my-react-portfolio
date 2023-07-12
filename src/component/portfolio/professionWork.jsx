import React from "react";
// import img1 from "../../assets/portfolio1.jpg";
import meesho from "../../assets/meesho.png";
import maxFashion from "../../assets/MaxFashion.png";
import GoFundMe from "../../assets/GoFundMe.png";
import Weather from "../../assets/Weather.png";
import "./portfolio.css";

const Portfolio = () => {
  const professionalProjects = [
    {
      id: 1,
      title: "4Climate⭐",
      img: '',
      description:
        "Completed phase one, solved bugs. User components trigger hydroponic plant actions, real-time results on dashboard. Websockets enable efficient state management. Promoting sustainability and empowering users.",
      technologies: "React | Websockets",
      link: "https://test.4climate.in/",
      github: "",
    },
    {
      id: 2,
      title: "NemaAI⭐",
      img: '',
      description:
        "NemaAI is a project that involved updating the existing code and implementing significant changes. Leveraging HTML, CSS, JavaScript, Bootstrap, and OwlCarousel, I have successfully accomplished the required modifications and enhancements for our client.",
      technologies: "HTML | CSS | JavaScript | Bootstrap | OwlCarousel",
      link: "https://nemaai.com/index.html",
      github: "",
    },
    {
      id: 3,
      title: "MERN Weather App ⭐",
      img: Weather,
      description:
        "With the help of React, Node, Express, MongoDB, Bootstrap CSS I build this Mern Weather App. A User can access main weather page only after Successful Authentication.",
      technologies: "React | Node | Express | MongoDB | JWT | Bootstrap  ",
      link: "https://mern-react-weather-app.netlify.app/",
      github: "https://github.com/Shahid321fw11/React_Weather_App_Mern_Hosted",
    },
    {
      id: 4,
      title: "GoFundMe Clone",
      img: GoFundMe,
      description:
        "A web application that helps to fund raise for needy persons. Using HTML, CSS, and JavaScript we built a clone of Gofund ME in 5 day.",
      technologies: "HTML | CSS | JavaScript | Git",
      link: "https://gofundmeclone.netlify.app/",
      github: "https://github.com/Anshuman-K/ConstructWeek-Unit-2",
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
