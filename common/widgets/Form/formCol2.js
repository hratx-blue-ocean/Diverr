import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField, FormRow } from "@material-ui/core";
import { useFormik } from "formik";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  col: {
    backgroundColor: "white",
  },
  textfield: {
    marginRight: 5,
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
  spacer: {
    height: 60,
  },
}));

export default function ColumnTwo({ formik }) {
  const classes = useStyles();

  return (
    <>
      <Grid
        item
        xs={6}
        container
        alignItems="center"
        style={{ padding: "7px" }}
      >
        <TextField
          className={classes.textfield}
          required
          type="time"
          aria-label="Time In"
          name="timeIn"
          helperText="Time In"
          FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.timeIn}
          onChange={formik.handleChange}
          InputLabelProps={{
            shrink: true,
            classes: { notchedOutline: classes.input },
            className: classes.text,
          }}
          variant="outlined"
          fullWidth={true}
          color="secondary"
          InputLabelProps={{ style: { color: "#E9F7F9" } }}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #E9F7F9, rgba(0, 0, 20, 0.1))",
          }}
        />
      </Grid>
      <Grid item xs={6} container alignItems="center">
        <TextField
          className={classes.textfield}
          required
          type="time"
          aria-label="Time Out"
          name="timeOut"
          helperText="Time Out"
          FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.timeOut}
          onChange={formik.handleChange}
          InputLabelProps={{
            shrink: true,
            classes: { notchedOutline: classes.input },
            className: classes.text,
          }}
          variant="outlined"
          fullWidth={true}
          color="secondary"
          InputLabelProps={{ style: { color: "#E9F7F9" } }}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #E9F7F9, rgba(0, 0, 20, 0.5))",
          }}
        />
      </Grid>
      <Grid item xs={6} container alignItems="center">
        <TextField
          className={classes.textfield}
          required
          label="Start Air Pressure"
          name="startPressure"
          // helperText="Start Air Pressure"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.startPressure}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="secondary"
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
          required
          label="End Air Pressure"
          name="endPressure"
          // helperText="End Air Pressure"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.endPressure}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="secondary"
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
          required
          label="Maximum Depth"
          name="depth"
          // helperText="Maximum Depth"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.depth}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="secondary"
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
          required
          label="Actual Bottom Time"
          name="abt"
          // helperText="Actual Bottom Time (minutes)"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.abt}
          onChange={formik.handleChange}
          variant="outlined"
          fullWidth={true}
          color="secondary"
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
          label="Residual Nitrogen Time"
          name="rnt"
          // helperText="Residual Nitrogen Time (minutes)"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.rnt}
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
          label="Total Bottom Time"
          name="tbt"
          // helperText="Total Bottom Time (minutes)"
          // FormHelperTextProps={{ classes: { root: classes.text } }}
          value={formik.values.tbt}
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
