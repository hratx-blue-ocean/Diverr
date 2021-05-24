import Image from "next/image";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    message: {
      fontWeight: 700,
    },
  };
});

export default function Error404({ timer }) {
  const classes = useStyles();
  return (
    <>
      <Typography color="error" variant="h1">
        404
      </Typography>
      <Grid container direction="column" alignItems="center">
        <Typography color="error" variant="body1" className={classes.message}>
          Whoops! Looks like you're in a little too deep. Let's send you back to
          shore in... {timer}
        </Typography>
        <Image
          src="/drowning-drown-svgrepo-com.svg"
          width={300}
          height={300}
          alt="drowning"
        />
      </Grid>
    </>
  );
}
