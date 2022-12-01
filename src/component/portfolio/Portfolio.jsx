import React from "react";
// import img1 from "../../assets/portfolio1.jpg";
import meesho from "../../assets/meesho.png";
import maxFashion from "../../assets/MaxFashion.png";
import GoFundMe from "../../assets/GoFundMe.png";
import ShopperStop from "../../assets/ShopperStop.png";
import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Meesho Clone",
      img: meesho,
      description:
        "A complete single handed, MERN stack, e-commerce website that contains a wide range of apparel, cosmetics, household items, and many more categories.",
      technologies: "React | Redux | NodeJS | ExpressJS | Mongodb ",
      link: "https://meesho-by-shahid.netlify.app/",
      github: "https://github.com/Shahid321fw11/Meesho_Clone",
    },
    {
      id: 2,
      title: "Max Fashion Clone",
      img: maxFashion,
      description:
        "With the help of HTML, CSS, JavaScript and Tailwind CSS I build the clone of Max fashion in 5 days. A shopping website that offers clothes for kids, men, and women from different popular brands.",
      technologies: "HTML | CSS | JavaScript | TailwindCSS | Git",
      link: "https://max-fashion-clone.netlify.app/",
      github: "https://github.com/Shahid321fw11/maxFashion_Clone_Project",
    },
    {
      id: 3,
      title: "GoFundMe Clone",
      img: GoFundMe,
      description:
        "A web application that helps to fund raise for needy persons. Using HTML, CSS, and JavaScript we built a clone of Gofund ME in 5 day.",
      technologies: "HTML | CSS | JavaScript | Git",
      link: "https://gofundmeclone.netlify.app/",
      github: "https://github.com/Anshuman-K/ConstructWeek-Unit-2",
    },
    {
      id: 4,
      title: "ShopperStop Clone",
      img: ShopperStop,
      description:
        "Clone of ShopperStop with the help of HTML, CSS, JavaScript Nodejs, MongoDB. A fully functional and responsive website where a user can use to see product page and add into the cart.",
      technologies: "HTML | CSS | JavaScript | NodeJS | MongoDB",
      link: "https://shopper-stop-clone.herokuapp.com/",
      github: "https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public",
    },
  ];
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {soloProjects.map((pro) => (
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
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
