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

export default function ColumnOne() {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <div className={classes.col}>
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          type="date"
          label="Date"
          variant="outlined"
          defaultValue=""
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          label="City"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          label="Country"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          label="Dive Site"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          label="Dive Center"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          label="Dive Instructor Name"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          id="outlined-required"
          label="Instructor Cert No."
          variant="outlined"
        />
      </div>
    </Grid>
  );
}
