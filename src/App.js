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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Section id="introduce" title="Me">
        <Introduce></Introduce>
      </Section>

      <Section id="education" title="Education">
        <Education></Education>
      </Section>

      <Section id="skills" title="Skills">
        <Skills></Skills>
      </Section>

      <Section id="experience" title="Experience">
        <Experience></Experience>
      </Section>

      <Section id="projects" title="Projects">
        <Projects></Projects>
      </Section>

      <Section id="clients" title="Clients">
        <Clients></Clients>
      </Section>
      <Section id="contact" title="Contact" />
    </ThemeProvider>
  );
}

export default App;
