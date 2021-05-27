import { Typography, Grid, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  col1Container: {
    padding: "25px",
  }
}));
export default function logDisplayColumn1({ name, logs }) {
  const classes = useStyles();
  console.log(name);
  return (
    <Card className={classes.col1Item}>
          <Typography variant="h5" color="primary">
            {`Hello, ${name}`}
          </Typography>
          <Typography variant="h6">
            You've been on {logs.length} dives!
          </Typography>
          <Typography variant="h6">
            Cumulative Dive Hours: 2{/* {logs[logs.length - 1].cumulative_time} */} Hours
          </Typography>
        </Card>
  );
}
