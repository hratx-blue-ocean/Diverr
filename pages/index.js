import Head from "next/head";
import Image from "next/image";
import AddButton from "common/components/buttons/AddButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Diverr</title>
        <meta name="home" content="caspian-holder" />
      </Head>
      <Grid
        className={classes.root}
        container
        justify="center"
        alignItems="center"
      >
        <div>Test</div>
        <AddButton text={"Log Dive"} />
      </Grid>
    </div>
  );
}
