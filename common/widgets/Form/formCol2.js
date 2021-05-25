import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  col: {
    display: "inline-flex",
    flexDirection: "column",
    margin: 50,
  },
  textfield: {
    margin: 5,
  },
}));

export default function ColumnTwo() {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <div className={classes.col}>
        <TextField
          className={classes.textfield}
          required
          type="time"
          label="Time In"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          type="time"
          label="Time Out"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Start air pressure"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="End air pressure"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Maximum Depth"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Actual Bottom Time"
          variant="outlined"
          helperText="In minutes"
        />
        <TextField
          className={classes.textfield}
          label="Residual Nitrogen Time"
          variant="outlined"
          helperText="In minutes"
        />
        <TextField
          className={classes.textfield}
          label="Total Bottom Time"
          variant="outlined"
          helperText="In minutes"
        />
      </div>
    </Grid>
  );
}
