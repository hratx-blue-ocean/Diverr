import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  col: {
    backgroundColor: "white",
  },
  textfield: {
    margin: 5,
  },
  text: {
    color: theme.palette.lightBlue.main,
    fontSize: "1rem",
  },
  input: {
    borderWidth: "2px",
    borderColor: "#E9F7F9",
  },
  helper: {
    fontSize: "1rem",
  },
}));

export default function ColumnThree({ formik }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={6} container alignItems="center">
        <TextField
          className={classes.textfield}
          label="Visibility"
          name="visibility"
          // helperText="Visibility"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.visibility}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="primary"
          InputProps={{
            classes: { notchedOutline: classes.input },
            className: classes.text,
          }}
          InputLabelProps={{ style: { color: "#E9F7F9" } }}
        />
      </Grid>
      <Grid item xs={6} container alignItems="center">
        <TextField
          className={classes.textfield}
          label="Air Temperature"
          name="airTemp"
          // helperText="Air Temperature"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.airTemp}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="primary"
          InputProps={{
            classes: { notchedOutline: classes.input },
            className: classes.text,
          }}
          InputLabelProps={{ style: { color: "#E9F7F9" } }}
        />
      </Grid>
      <Grid item xs={6} container alignItems="center">
        <TextField
          className={classes.textfield}
          label="Water Temperature"
          name="waterTemp"
          // helperText="Water Temperature"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.waterTemp}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="primary"
          InputProps={{
            classes: { notchedOutline: classes.input },
            className: classes.text,
          }}
          InputLabelProps={{ style: { color: "#E9F7F9" } }}
        />
      </Grid>
      <Grid item xs={6} container>
        <TextField
          className={classes.textfield}
          label="Weight"
          name="weight"
          // helperText="Weight"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.weight}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="primary"
          InputProps={{
            classes: { notchedOutline: classes.input },
            className: classes.text,
          }}
          InputLabelProps={{ style: { color: "#E9F7F9" } }}
        />
      </Grid>
      <Grid item xs={6} container alignItems="center">
        <TextField
          className={classes.textfield}
          multiline
          rows={14}
          label="Notes"
          // helperText="Notes"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          name="notes"
          value={formik.values.notes}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="primary"
          InputProps={{
            classes: { notchedOutline: classes.input },
            className: classes.text,
          }}
          InputLabelProps={{ style: { color: "#E9F7F9" } }}
        />
      </Grid>
    </>
  );
}
