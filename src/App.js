import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import Section from "./components/Section";
import Introduce from "./components/Introduce";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Section id="introduce" title="Me">
        <Introduce />
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="clients" title="Clients">
        <Clients />
      </Section>

      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </ThemeProvider>
  );
}

export default App;
