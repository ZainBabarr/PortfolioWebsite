import React, { useState } from "react";
import './App.css';
import "./index.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Preloader from "./components/Preloader";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  return (
    <div className="container">
      {!navbarVisible && <Preloader setNavbarVisible={setNavbarVisible} />}
      {navbarVisible && <Navbar />}
      <Intro />
      <AboutMe />
      <Projects />
      <Contact />
      <p className="footer">Built by Zain Babar using React.js</p>
    </div>
  );
}

export default App;
