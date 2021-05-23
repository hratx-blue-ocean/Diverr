import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </main>
  );
}

export default MyApp;
