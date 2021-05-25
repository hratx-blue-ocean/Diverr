import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { useFormik } from 'formik';

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


export default function ColumnThree({formik}) {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <div className={classes.col}>
        <TextField
          className={classes.textfield}
          label="Visibility"
          name="visibility"
          value={formik.values.visibility}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          label="Air Temperature"
          name="airTemp"
          value={formik.values.airTemp}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          label="Water Temperature"
          name="waterTemp"
          value={formik.values.waterTemp}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          label="Weight"
          name="weight"
          value={formik.values.weight}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          multiline
          rows={14}
          label="Notes"
          name="notes"
          value={formik.values.notes}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </div>
    </Grid>
  );
}
