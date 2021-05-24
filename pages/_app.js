import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { Provider } from "next-auth/client";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <main className={classes.root}>
      <ThemeWrapper>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ThemeWrapper>
    </main>
  );
}

export default MyApp;
