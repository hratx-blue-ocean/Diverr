import splitArrayRows from "common/utils/splitArray.js";
import { Box, Grid, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    padding: "8px",
  },
  spacer: {
    height: "10px",
  },
}));

export default function logDisplayColumn1({ log }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.item}>
        <Typography variant="h6">Dive Conditions</Typography>
        <Typography variant="body1">Visibility: {log.visibility}</Typography>
        <Typography variant="body1">Air Temp: {log.air_temp}</Typography>
        <Typography variant="body1">Water Temp: {log.water_temp}</Typography>
        <Typography variant="body1">
          Conditions: {log.salt_water ? "Salt-Water" : "Fresh-Water?"},{" "}
          {log.boat ? "Boat" : "No Boat"},{" "}
          {log.current ? "Current" : "No Current"}
        </Typography>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.item}>
        <Typography variant="h6">Dive Gear</Typography>
        <Typography variant="body1">
          {log.wetsuit ? "Wet Suit" : "Dry Suit"}
        </Typography>
        <Typography variant="body1">
          {log.hood ? "Hood, " : "No Hood,"}
          {log.gloves ? "Gloves " : "No Gloves"}
        </Typography>
        <Typography variant="body1">{log.weight}</Typography>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.item}>
        <Typography variant="h6">Dive Metrics</Typography>
        <Typography variant="body1">
          Start Pressure: {log.start_pressure}
        </Typography>
        <Typography variant="body1">
          End Pressure: {log.end_pressure}
        </Typography>
        <Typography variant="body1">Start Time: {new Date(log.time_in).toTimeString()}</Typography>
        <Typography variant="body1">End Time: {new Date(log.time_out).toTimeString()}</Typography>
      </Card>
    </>
  );
}
