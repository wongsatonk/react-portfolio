import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import Section from "./components/Section";
import Introduce from "./components/Introduce";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Section id="introduce" title="Me">
        <Introduce></Introduce>
      </Section>

      <Section id="education" title="Education" />
      <Section id="skills" title="Skills" />
      <Section id="experience" title="Experience" />
      <Section id="projects" title="Projects" />
      <Section id="clients" title="Clients" />
      <Section id="contact" title="Contact" />
    </ThemeProvider>
  );
}

export default App;
