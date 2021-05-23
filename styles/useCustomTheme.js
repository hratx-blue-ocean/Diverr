import { useMemo } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";
import yellow from "@material-ui/core/colors/yellow";

export default function useCustomTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    return responsiveFontSizes(
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: blue[300],
          },
          secondary: {
            main: deepOrange[300],
          },
          warning: {
            main: orange[500],
          },
          error: {
            main: red[500],
          },
          info: {
            main: purple[300],
          },
          success: {
            main: yellow[600],
          },
        },
        typography: {
          fontFamily: ["Rajdhani", "sans-serif"],
        },
        "@overrides": {
          MuiCssBaseLine: {
            "@global": {
              "@font-face": ["Rajdhani"],
            },
          },
        },
      })
    );
  }, [prefersDarkMode]);

  return theme;
}