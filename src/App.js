import React from "react";
import { Button, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import Section from "./components/Section";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Section
        id="education"
        title="Education"
        content="Details about your education."
      />
      <Section
        id="skills"
        title="Skills"
        content="Details about your skills."
      />
      <Section
        id="experience"
        title="Experience"
        content="Details about your experience."
      />
      <Section
        id="portfolio"
        title="Portfolio"
        content="Details about your portfolio."
      />
      <Section
        id="clients"
        title="Clients"
        content="Details about your clients."
      />
      <Section
        id="contact"
        title="Contact"
        content="Details about how to contact you."
      />
    </ThemeProvider>
  );
}

export default App;
