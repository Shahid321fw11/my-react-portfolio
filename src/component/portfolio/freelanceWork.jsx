import backonourfeet from "../../assets/backOnOurFeet.png";
import "./portfolio.css";

const Portfolio = () => {
  const freelancerProjects = [
    {
      id: 1,
      title: "BackOnOurFeet⭐⭐⭐",
      img: backonourfeet,
      description:
        "Developed a platform to aid individuals affected by the ongoing security situation in Israel. Users can request essential items they need after being evacuated from their homes, while donors can track where their contributions are directed. Verified processes ensure assistance reaches those genuinely displaced by the conflict.",
      technologies:
        "Html, CSS, JS, jQuery, Node.js, MongoDB, Paypal Integration",
      link: "https://backonourfeet.org/",
      github: "",
    },
  ];
  return (
    <>
      <section id="portfolio">
        <div className="container portfolio__container">
          {freelancerProjects.map((pro) => (
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

export default Portfolio;
