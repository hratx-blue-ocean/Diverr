import { Typography, Grid, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tags from "common/components/dashboard/Tags.js";

const useStyles = makeStyles((theme) => ({
  root: {},
  itemOne: {
    padding: "8px",
    minHeight: "25%",
  },
  itemTwo: {
    padding: "8px",
    minHeight: "25%",
  },
  itemThree: {
    padding: "8px",
    minHeight: "35%",
  },
  spacer: {
    height: "10px",
  },
}));

export default function logDisplayColumn1({ log }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.itemOne}>
        <Typography variant="body1" data-testid="date">
          Date: {new Date(log.date).toDateString()} Dive Number: {log.id}
        </Typography>
        <Typography variant="body1" data-testid="location">
          {log.dive_site}, {log.city}, {log.country} {"\n"}
        </Typography>
        <Typography variant="body1" data-testid="instructor">
          {log.dive_center}, {log.dive_instructor}, {log.instructor_cert}
        </Typography>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.itemTwo}>
        <Typography variant="body1" data-testid="rnt">
          {" "}
          RNT {log.rnt}
        </Typography>
        <Typography variant="body1" data-testid="abt">
          {" "}
          ABT {log.abt}
        </Typography>
        <Typography variant="body1" data-testid="tbt">
          {" "}
          TBT {log.tbt}
        </Typography>
        <Typography variant="body1" data-testid="cumulative">
          {" "}
          Cumulative Time: FILL THIS OUT WITH NEW DATA
        </Typography>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.itemThree}>
        <Typography variant="h6" data-testid="notes">
          Notes:{" "}
        </Typography>
        <Typography variant="body1" data-testid="notes-text">
          {log.notes}
          <Tags log={log} />
        </Typography>
      </Card>
    </>
  );
}
