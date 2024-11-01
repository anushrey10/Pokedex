import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/ai.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi we are Ishika and Anushrey</h1>
      <h2 className="profile-text">The creators of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created by Ishika and Anushrey "AI"
      </h4>
      <div className="profile-links">
        <a href="https://github.com/anushrey10">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/anushrey-shubham-1060b7315">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ishiiii10">
          <FaGithub />
        </a>
        <a href="www.linkedin.com/in/ishika-gupta-242792303">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
