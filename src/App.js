import React from "react";
import { Button, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <h1>My Portfolio</h1>
      <Button variant="contained">Hello World</Button>
    </ThemeProvider>
  );
}

export default App;
