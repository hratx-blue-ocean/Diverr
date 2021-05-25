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

export default function ColumnThree() {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <div className={classes.col}>
        <TextField
          className={classes.textfield}
          label="Visibility"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          label="Air Temperature"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          label="Water Temperature"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          label="Weight"
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          multiline
          rows={10}
          label="Notes"
          variant="outlined"
        />
      </div>
    </Grid>
  );
}
