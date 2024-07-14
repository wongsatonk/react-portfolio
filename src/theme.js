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
      paper: "#282C34",
    },
    text: {
      primary: "#ABB2BF",
    },
    accent: {
      main: "#C678DD",
    },
    divider: {
      main: "#C678DD",
    },
    icon: {
      main: "#ABB2BF",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: "400",
          margin: "auto",
          boxShadow: 3,
          borderRadius: 2,
          "&:hover": {
            boxShadow: 6,
            transform: "scale(1.03)",
          },
          transition: "transform 0.3s, box-shadow 0.3s",
        },
      },
    },
  },
});

export default theme;
