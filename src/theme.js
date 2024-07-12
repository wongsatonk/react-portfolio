import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#282C34",
    },
    secondary: {
      main: "#61DAFB",
    },
    background: {
      default: "#21252B",
    },
    text: {
      primary: "#ABB2BF",
    },
    accent: {
      main: "#C678DD",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
