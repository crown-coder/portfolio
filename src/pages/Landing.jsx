import React from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <section>
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </section>
  );
};

export default Landing;
