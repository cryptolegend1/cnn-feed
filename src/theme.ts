import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: "42px",
      fontWeight: 700,
      color: "#191919",
      "@media (max-width:600px)": {
        fontSize: "22px",
        lineHeight: "28px",
      },
    },
    h2: {
      fontSize: "22px",
      lineHeight: "28px",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "16px",
        lineHeight: "20px",
      },
    },
    h5: {
      fontSize: "14px",
      lineHeight: "20px",
      color: "#292929",
      "@media (max-width:600px)": {
        fontSize: "13px",
        lineHeight: "16px",
      },
    },
    h6: {
      fontSize: "13px",
      lineHeight: "20px",
      color: "#757575",
      fontWeight: 400,
    },
    body1: {
      fontSize: "20px",
      lineHeight: "32px",
      color: "#292929",
      letterSpacing: "-0.003em",
      fontFamily: "charter, Georgia, Cambria, 'Times New Roman', Times, serif",
      "@media (max-width:600px)": {
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#292929",
      fontFamily: "charter, Georgia, Cambria, 'Times New Roman', Times, serif",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          lineHeight: "20px",
          fontWeight: 400,
          height: "28px",
          maxWidth: "200px",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "center",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        },
      },
    },
  },
});

export default theme;
