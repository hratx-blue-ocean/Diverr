import Head from "next/head";
import Image from "next/image";
import AddButton from "common/components/buttons/AddButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Header from "common/widgets/Header";
import { useSession } from "next-auth/client";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
});

export default function Home() {
  const classes = useStyles();
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>Caspian</title>
        <meta name="home" content="caspian-holder" />
      </Head>
      <Header />
      <Grid
        className={classes.root}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <AddButton text={"Log Dive"} />
        <Typography variant="h2" color="primary">
          {loading && "Loading..."}
          {session && `Hello, ${session.user.email}`}
          {!session && !loading && "Please sign in"}
        </Typography>
      </Grid>
    </div>
  );
}
