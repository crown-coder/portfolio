import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Me from "../Assets/me.png";

const HeroSection = () => {
  return (
    <section id="home" className="hero__section">
      <div className="left__section">
        <h1>Hi, I'm Abubakar Sadiq - A passionate Frontend Developer</h1>
        <p>
          I specialize in building responsive, user-friendly web applications
          <br />
          with modern technologies like React.js. And i have little experience
          <br />
          with backend development
        </p>
        <div className="hero-buttons">
          <button>View my work</button>
          <button className="purple-btn">Contact Me</button>
        </div>
        <div className="social-icons">
          <button>
            <a href="https://github.com/crown-coder" target="_blank">
              <FaGithub />
            </a>
          </button>
          <button>
            <FaLinkedinIn />
          </button>
          <button>
            <FaWhatsapp />
          </button>
          <button>
            <FaFacebook />
          </button>
        </div>
      </div>
      <div className="right__section">
        <img src={Me} />
      </div>
    </section>
  );
};

export default HeroSection;
