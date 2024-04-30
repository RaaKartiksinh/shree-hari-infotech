import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // backgroundColor: "red", // Default color
          color: "white", // Default text color
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#FAF8F6", // white
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#F6F8FA",
    },
    background: {
      default: "#F6F8FA",
      sidebackground: "linear-gradient(195deg, #42424a, #191919)",
    },
  },
});

export default theme;
