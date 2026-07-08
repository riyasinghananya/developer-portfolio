import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certificates from "./components/certificates";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates/>
      <Contact/>
    </>
  );
}

export default App;