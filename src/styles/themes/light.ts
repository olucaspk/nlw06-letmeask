import { createMuiTheme } from "@material-ui/core";
import { Shadows } from "@material-ui/core/styles/shadows";

const lightTheme = createMuiTheme({
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    type: "light",
    background: {
      default: "#f8f8f8",
    },
    primary: {
      main: "rgba(131, 90, 253, 1)",
    },
    secondary: {
      main: "#E73F5D",
    },
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontWeight: "bold",
      fontSize: 36,
    },

    h2: {
      fontFamily: "Poppins",
      fontWeight: "bold",
      fontSize: 24,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: 18,
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#f8f8f8",
        },
      },
    },
    MuiButton: {
      root: {
        height: 48,
        fontSize: 16,
        "& svg": {
          margin: "0 10px",
        },
        "& img": {
          margin: "0 10px",
        },
      },
      contained: {
        paddingRight: 32,
        paddingLeft: 32,
        color: "rgba(115, 115, 128, 1)",
      },
      label: {
        textTransform: "none",
        fontWeight: "bold",
      },
      sizeSmall: {
        height: 40,
        fontSize: 14,
      },
    },
    MuiDialog: {
      paper: {
        padding: 24,
      },
    },
  },
});

export default lightTheme;
