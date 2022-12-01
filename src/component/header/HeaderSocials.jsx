import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/shahid-ansari-7387521b1/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Shahid321fw11"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="mailto:sidansari20@gmail.com" target="_blank" rel="noreferrer">
        <MdEmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
