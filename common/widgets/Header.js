import { useSession } from "next-auth/client";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LoggedOutNav from "common/components/nav/LoggedOutNav";
import LoggedInNav from "common/components/nav/LoggedInNav";
import Title from "common/components/nav/Title";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "#D1FFFC",
    minHeight: "90px",
  },
  menuItem: {
    margin: "auto",
    cursor: "pointer",
    color: theme.palette.primary.dark,
    fontWeight: 400,
  },
  menu: {
    display: "inline-block",
  },
  title: {
    color: theme.palette.primary.dark,
  },
  icon: {
    color: theme.palette.primary.dark,
  },
}));

export default function Header() {
  const [session, loading] = useSession();
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.root}
      position={"sticky"}
    >
      <Title classes={classes} />
      {session && <LoggedInNav classes={classes} />}
      {!session && <LoggedOutNav classes={classes} />}
    </Grid>
  );
}
