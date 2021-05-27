import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import InsertInvitationSharpIcon from "@material-ui/icons/InsertInvitationSharp";

const useStyles = makeStyles((theme) => ({
  col: {
    backgroundColor: "white",
  },
  textfield: {
    marginRight: "5px",
  },
  text: {
    color: theme.palette.lightBlue.main,
    fontSize: "1rem",
  },
  input: {
    borderWidth: "2px",
    borderColor: "white",
  },
  helper: {
    fontSize: "1rem",
  },
}));

export default function ColumnOne({ formik }) {
  const classes = useStyles();

  return (
    <>
      <FormControl style={{ padding: "7px" }}>
        <FormLabel component="legend" style={{ color: "white" }}>
          Privacy
        </FormLabel>
        <hr />
        <RadioGroup onChange={formik.handleChange} name="privacy">
          <Grid container>
            <Grid item xs={6}>
              <FormControlLabel
                value="private"
                control={<Radio className={classes.text} color="primary" />}
                label="Private"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="public"
                control={<Radio className={classes.text} />}
                label="Public"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      <TextField
        className={classes.textfield}
        required
        type="date"
        aria-label="Date"
        name="date"
        helperText="Date*"
        FormHelperTextProps={{ classes: { root: classes.text } }}
        value={formik.values.date}
        onChange={formik.handleChange}
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        color="secondary"
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.text,
        }}
        InputLabelProps={{ style: { color: "#fff" } }}
      />
      <TextField
        className={classes.textfield}
        required
        aria-label="City"
        helperText="City*"
        FormHelperTextProps={{ classes: { root: classes.text } }}
        name="city"
        value={formik.values.city}
        onChange={formik.handleChange}
        variant="outlined"
        color="secondary"
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.text,
        }}
        InputLabelProps={{ style: { color: "#fff" } }}
      />
      <TextField
        className={classes.textfield}
        required
        aria-label="Country"
        helperText="Country*"
        FormHelperTextProps={{ classes: { root: classes.text } }}
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        variant="outlined"
        color="secondary"
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.text,
        }}
        InputLabelProps={{ style: { color: "#fff" } }}
      />
      <TextField
        className={classes.textfield}
        required
        aria-label="Dive Site"
        name="site*"
        helperText="Dive Site"
        FormHelperTextProps={{ classes: { root: classes.text } }}
        value={formik.values.site}
        onChange={formik.handleChange}
        variant="outlined"
        color="secondary"
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.text,
        }}
        InputLabelProps={{ style: { color: "#fff" } }}
      />
      <TextField
        className={classes.textfield}
        required
        aria-label="Dive Center"
        name="center"
        helperText="Dive Center*"
        FormHelperTextProps={{ classes: { root: classes.text } }}
        value={formik.values.center}
        onChange={formik.handleChange}
        variant="outlined"
        color="secondary"
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.text,
        }}
        InputLabelProps={{ style: { color: "#fff" } }}
      />
      <TextField
        className={classes.textfield}
        aria-label="Dive Instructor/Guide"
        name="instructor"
        helperText="Dive Instructor/Guide"
        FormHelperTextProps={{ classes: { root: classes.text } }}
        value={formik.values.instructor}
        onChange={formik.handleChange}
        variant="outlined"
        color="primary"
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.text,
        }}
        InputLabelProps={{ style: { color: "#fff" } }}
      />
      <TextField
        className={classes.textfield}
        aria-label="Instructor/Guide Cert No."
        name="instructorCert"
        helperText="Instructor/Guide Cert No."
        FormHelperTextProps={{ classes: { root: classes.text } }}
        value={formik.values.instructorCert}
        onChange={formik.handleChange}
        variant="outlined"
        color="primary"
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.text,
        }}
        InputLabelProps={{ style: { color: "#fff" } }}
      />
    </>
  );
}
