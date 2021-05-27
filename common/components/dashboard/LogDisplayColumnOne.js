import React, { useState } from "react";
import { Typography, Grid, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    height: "25%",
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
        <Typography variant="body1" data-testid="date">
          Date: {log.date} Dive Number: {log.id}
        </Typography>
        <Typography variant="body1" data-testid="location">
          {log.dive_site}, {log.city}, {log.country} {"\n"}
        </Typography>
        <Typography variant="body1" data-testid="instructor">
          {log.dive_center}, {log.dive_instructor}, {log.instructor_cert}
        </Typography>
      </Card>
      <Box className={classes.spacer} />
      <Card className={classes.item}>
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
      <Card className={classes.item}>
        <Typography variant="h6" data-testid="notes">
          Notes:{" "}
        </Typography>
        <Typography variant="body1" data-testid="notes-text">
          {log.notes}
        </Typography>
      </Card>
    </>
  );
}
