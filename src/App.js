import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import PortfolioPersonal from "./component/portfolio/personalWork";
import PortfolioProfessional from "./component/portfolio/professionWork";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <PortfolioProfessional /> */}
      <PortfolioProfessional />
      <PortfolioPersonal />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
