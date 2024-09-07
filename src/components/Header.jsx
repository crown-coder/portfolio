import React from "react";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>
          <FaCode /> <span>Abubakar Sadiq</span>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
