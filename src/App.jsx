import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";

import Certifications from "./components/Certifications";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
       <Projects />
      <Skills />
      <Education />
      <Achievements />
     
      <Certifications />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;