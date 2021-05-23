import { useMemo } from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Blue from "@material-ui/core/colors/Blue";
import deepOrange from "@material-ui/core/colors/deepOrange";
import Orange from "@material-ui/core/colors/Orange";
import Red from "@material-ui/core/colors/Red";
import Purple from "@material-ui/core/colors/Purple";
import Yellow from "@material-ui/core/colors/Yellow";

export default function useCustomTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    return responsiveFontSizes(
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: Blue[300],
          },
          secondary: {
            main: deepOrange[300],
          },
          warning: {
            main: Orange[500],
          },
          error: {
            main: Red[500],
          },
          info: {
            main: Purple[300],
          },
          success: {
            main: Yellow[600],
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
