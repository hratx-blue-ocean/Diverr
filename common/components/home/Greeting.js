import Grow from "@material-ui/core/Grow";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function Greeting() {
  return (
    <>
      <Grow timeout={3500} in={true}>
        <Grid container justify="center">
          <Typography variant="h1">Welcome to diverr!</Typography>
        </Grid>
      </Grow>
    </>
  );
}
