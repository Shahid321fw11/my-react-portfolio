import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
// import ME from "../../assets/me.png";
import shahid from "../../assets/header.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shahid Ansari</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CTA />
        <div className="me">
          <img src={shahid} alt="ME" className="img" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
