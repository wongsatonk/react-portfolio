import React from "react";
import { Button } from "@mui/material";
import Header from "./components/Header";

function App() {
  const theme = "primary";
  return (
    <div>
      <Header theme={theme}></Header>
      <h1>My Portfolio</h1>
      <Button variant="contained" color={theme}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
