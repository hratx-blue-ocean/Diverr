import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      backgroundImage: "linear-gradient(#DEF2FD, #89DCFF, #74C6BE, #88E2DA)",
    },
    message: {
      fontWeight: 700,
    },
  };
});

export default function FourOhFour() {
  const classes = useStyles();
  const router = useRouter();
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer((prev) => prev - 1), 1000);
    timer === 0 && router.push("/");
  }, [timer]);
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Typography color="error" variant="h1">
          404
        </Typography>
        <Grid container direction="column" alignItems="center">
          <Typography color="error" variant="body1" className={classes.message}>
            Whoops! Looks like you're in a little too deep. Let's send you back
            to shore in... {timer}
          </Typography>
          <Image
            src="/drowning-drown-svgrepo-com.svg"
            width={300}
            height={300}
            alt="drowning"
          />
        </Grid>
      </Grid>
    </>
  );
}
