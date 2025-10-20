import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";  // SOLO UNA VEZ
/* import Contact from "./components/Contact"; */
import Footer from "./components/Footer";
import Mywork from "./components/Mywork";  // SOLO UNA VEZ


function App() {
  return (
    <>
      <Home />
      <Projects />
      <Mywork />
      <Skills />
      <Footer />
    </>
  );
}

export default App;


