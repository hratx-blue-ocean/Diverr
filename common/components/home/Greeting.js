import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "inline-block",
  },
}));

export default function Greeting() {
  const [showTitle, setShowTitle] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 1000);
  }, []);

  return (
    <>
      <Grow timeout={1000} in={true}>
        <Grid container justify="center">
          <Typography variant="h1">
            Welcome
            <span>&nbsp;</span>
            <Grow timeout={2000} in={true}>
              <Typography variant="h1" className={classes.title}>
                to
              </Typography>
            </Grow>
            <span>&nbsp;</span>
            <Grow timeout={2500} in={showTitle}>
              <Typography variant="h1" className={classes.title}>
                d
              </Typography>
            </Grow>
            <Grow timeout={2750} in={showTitle}>
              <Typography variant="h1" className={classes.title}>
                i
              </Typography>
            </Grow>
            <Grow timeout={3000} in={showTitle}>
              <Typography variant="h1" className={classes.title}>
                v
              </Typography>
            </Grow>
            <Grow timeout={3250} in={showTitle}>
              <Typography variant="h1" className={classes.title}>
                e
              </Typography>
            </Grow>
            <Grow timeout={3500} in={showTitle}>
              <Typography variant="h1" className={classes.title}>
                r
              </Typography>
            </Grow>
            <Grow timeout={3750} in={showTitle}>
              <Typography variant="h1" className={classes.title}>
                r
              </Typography>
            </Grow>
          </Typography>
        </Grid>
      </Grow>
    </>
  );
}
